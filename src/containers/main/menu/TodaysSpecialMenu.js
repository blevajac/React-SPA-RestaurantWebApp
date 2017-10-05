import React from 'react';

//components
import TodaysSpecialMenuCarousel from './TodaysSpecialMenuCarousel';

//helper functions
import h from '../../../helper-functions/helpers';
//h.formatPrice(count * fish.price)

const carouselSlidesData = [
  {
    day:  "Monday"
  }, {
    day:  "Tuesday"
  }, {
    day:  "Wednesday"
  }, {
    day:  "Thursday"
  }, {
    day:  "Friday"
  }, {
    day:  "Saturday"
  }, {
    day:  "Sunday"
  }
];

const TodaysSpecialMenu = ({ todaySpecialMenu }) => (
  <div className="w3-row w3-padding-64" id="menu">
    <h1 className="w3-center">Today's special Menu</h1>
    <div className="w3-col l6 w3-padding-large">

      <TodaysSpecialMenuCarousel slides={carouselSlidesData} todaysDate={ todaySpecialMenu.day }/>

      <br></br>
      <p> test day{todaySpecialMenu.day}</p>
      <h4>{ todaySpecialMenu.extras.name }</h4>
      <p className="w3-text-grey">{ todaySpecialMenu.extras.description } { h.formatPrice(todaySpecialMenu.extras.price) }</p><br></br>

      <h4>{ todaySpecialMenu.app_snacks.name }</h4>
      <p className="w3-text-grey">{ todaySpecialMenu.app_snacks.description } { h.formatPrice(todaySpecialMenu.app_snacks.price) }</p><br></br>

      <h4>{ todaySpecialMenu.salads.name }</h4>
      <p className="w3-text-grey">{ todaySpecialMenu.salads.description } { h.formatPrice(todaySpecialMenu.salads.price) }</p><br></br>

      <h4>{ todaySpecialMenu.main.name }</h4>
      <p className="w3-text-grey">{ todaySpecialMenu.main.description } { h.formatPrice(todaySpecialMenu.main.price) }</p><br></br>

      <h4>{ todaySpecialMenu.dessert.name }</h4>
      <p className="w3-text-grey">{ todaySpecialMenu.dessert.description } { h.formatPrice(todaySpecialMenu.dessert.price) }</p>
    </div>

    <div className="w3-col l6 w3-padding-large">
      <img src={ todaySpecialMenu.img } className="w3-round w3-image w3-opacity-min" alt="Menu" width="500" height="750" />
    </div>
  </div>
);

export default TodaysSpecialMenu;
