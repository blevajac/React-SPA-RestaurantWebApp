/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

//css
import '../../../index.css';
import '../../../css/containers/main/contact/map.css';

import { compose, withProps, lifecycle, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow,
} from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";
import MdRestaurantMenu from "react-icons/lib/md/restaurant-menu";

const MapWithASearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `750px`, width: `500px` }} />,
    containerElement: <div style={{ height: `750px`, width: `500px` }} />,
    mapElement: <div style={{ height: `750px`, width: `500px` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
           lat: 45.8131545, lng: 15.9767975
        },
        markers: [],
        isMainMarker: true,
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();
          const DirectionsService = new google.maps.DirectionsService();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });

          DirectionsService.route({
            origin: new google.maps.LatLng(45.8131545, 15.9767975),
            destination: new google.maps.LatLng(this.state.center.lat(), this.state.center.lng()),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
                isMainMarker: false
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
           refs.map.fitBounds(bounds);
        },
      })
    },
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    {/*Lokacija marker postavljen na sam centar trga (koji nema parkioralište, a pokazivać puta gleda promet stvaraju se dupli markeri*/}
      {props.isMainMarker ? (
          <Marker
            position={{ lat: 45.8131545, lng: 15.9767975 }}
            onClick={props.onToggleOpen}
          >
              {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                <div>
                  <MdRestaurantMenu />
                  {" "}
                  Gourmet, au Gulaš!
                  {" "}
                  <MdRestaurantMenu />
                  {" "}
                </div>
            </InfoWindow>}
          </Marker>
      ) : (
          props.directions && <DirectionsRenderer directions={props.directions} />
      )}

    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.BOTTOM_CENTER}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input className="input-position"
        type="text"
        placeholder="For getting directions. Please, Enter your location."
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `380px`,
          height: `40px`,
          marginTop: `20px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`
        }}
      />
    </SearchBox>
  </GoogleMap>
);


const Map = ({ resInformation, address }) => (
  <div className="w3-row w3-padding-64" id="about">
    <div className="w3-col m6 w3-padding-large w3-hide-small map">
      <MapWithASearchBox />
    </div>

    <div className="w3-col m6 w3-padding-large">
      <h1 className="w3-center">{resInformation.restaurantName}</h1>
      <h5 className="w3-center">Tradition since 1889</h5><br></br>

      <p className="w3-text-blue-grey w3-large"><b>{address.street} {address.number}, {address.zipcode} {address.city}, {address.country} </b></p><br></br>
      <p>U can contact us all day from 10:00 am - 17:00 pm CET </p>
      <p><strong>Contact number:</strong> <br></br>
          Phone number: { resInformation.telephone }<br></br>
          Mobile number: { resInformation.mobile }
      </p>
      <p><strong>Working hours:</strong><br></br>
          Monday - Friday: 9:00 am - 11:00 pm ET <br></br>
          Saturday - Sunday: 9:00 am - 11:00 pm ET
      </p>
      <br></br>
      <p className="w3-large w3-text-grey w3-hide-medium">
        For larger Events, Weddings, Presentations, or Catering please call us between <em> 10:00 am - 12:00 am</em> CET. <br></br>
        For Smaller orders and deliveries  please call us all day till <em>17:00 pm</em> CET.<br></br>
        For all other Orders, Reservations, or Information our operators will be on standby all day till <em>17:00 pm</em> CET.
      </p>
    </div>
  </div>
);

export default Map;

Map.propTypes = {
  resInformation: PropTypes.shape({
    description: PropTypes.string.isRequired,
    restaurantName: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  }).isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    zipcode: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired,
};
