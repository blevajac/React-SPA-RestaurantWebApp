import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ resInformation, address }) => (
  <div className="w3-container w3-padding-64" id="contact">
    <h1>Contact</h1><br></br>

    <p>{ resInformation.description }</p>
    <p className="w3-text-blue-grey w3-large"><b>{resInformation.restaurantName}. {address.street} {address.number}, {address.zipcode} {address.city}, {address.country} </b></p>
    <p>You can also contact us by phone <strong>{ resInformation.telephone }</strong> or email <strong>{ resInformation.website }</strong>, or you can send us a message here:</p>

    <form onChange={this.readOnly} target="_blank">
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
      <p><input className="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People" /></p>
      <p><input className="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date"  /></p>
      <p><input className="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
      <p><button className="w3-button w3-light-grey w3-section" type="submit">SEND MESSAGE</button></p>
    </form>
  </div>
);

export default Contact;


Contact.propTypes = {
  resInformation: PropTypes.shape({
    description: PropTypes.string.isRequired,
    restaurantName: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
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
