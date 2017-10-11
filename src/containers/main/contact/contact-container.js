import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route,  Link
} from 'react-router-dom';

//css
import '../../../css/containers/main/router.css';
import '../../../index.css';

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
      <Router>
        <div className="about-border">
              <ul className="router-ul">
                <li className="router-li"><Link to="/">Contact</Link></li>
                <li className="router-li right-link"><Link to="/map">Map</Link></li>
              </ul>
              <Route exact path="/" component={ () => ( <Contact {...this.state.contactData} /> )} />
              <Route path="/map" component={ () => ( <Map {...this.state.contactData}/> )} />

        </div>
      </Router>
    );
  }
}

export default ContactComponent;
