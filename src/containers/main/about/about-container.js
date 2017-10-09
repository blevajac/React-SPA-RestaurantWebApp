import React, { Component } from 'react';

//css

//components
import About from './about';
import Gallery from './gallery';

class AboutContainer extends Component {
  render() {
    return (
      <div className="">
        <About />
        <Gallery />
      </div>
    );
  }
}

export default AboutContainer;
