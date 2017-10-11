import React, { Component } from 'react';

//css
import '../../css/containers/main/App.css';
import '../../index.css';

//components
import Footer from '../footer/footer';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import AboutContainer from './about/about-container';
import MenuContainer from './menu/menu-container';
import ContactComponent from './contact/contact-container'

class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Header />
        <div className="w3-content" style={{maxWidth: "1100px"}}>
          <AboutContainer />
          <hr></hr>
          <MenuContainer />
          <hr></hr>
          <ContactComponent />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
