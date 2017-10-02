import React, { Component } from 'react';

//css

//data
import contactData from '../../../data/contact-data.json';

//components
import Contact from './contact';
import Map from './map';


class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: contactData
    }
  }

  render() {
    return (
      <div className="">
        <Contact {...this.state.contactData} />
        <Map {...this.state.contactData}/>

      </div>
    );
  }
}

export default ContactComponent;
