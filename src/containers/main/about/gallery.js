import React, { Component } from 'react';

//css
import '../../../css/containers/about/gallery.css';

//data
import GalleryData from '../../../data/about-gallery-data.json';

//components
import Slide from './about-gallery/slide';
import RightArrow from './about-gallery/rightArrow';
import LeftArrow from './about-gallery/leftArrow';
import Dots from './about-gallery/dots';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: [],
      galleryData: GalleryData,
      current: undefined,
      ready: false
    }

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  // Pulls in config data for the slider from .json file
  componentWillMount() {
      this.setImageArray();
  }

  // Sets the background state property to the array of images pulled in from the componentWillMount method
  setImageArray() {
    let newArray = [];

    for(let i = 0; i < GalleryData.length; i++) {
      newArray.push(GalleryData[i].img);
    }

    this.setState({ background: newArray, current: 0, ready: true });
  }

  preloadNextImage() {
    let current = this.state.current;
    let background = this.state.background;

    if( (current !== undefined) && (current < background.length - 1) )
      return (
        <div style={{display: 'none', height:'100%', backgroundImage: `url(${(this.state.background[this.state.current + 1])}.jpg)`}}></div>
      )
    else
      return null
  }

  /* Handle cLicking of dots */
  dotClick(dotIndex) {
    this.setState({ current: dotIndex })
  }

  /* Previous & Next Slide Functionality */
  previousSlide() {
    let current = this.state.current;
    let imageArray = this.state.background.length - 1;

    if(current >= 1)
      this.setState({ current: current - 1 })
    if(current === 0)
      this.setState({ current: imageArray })
  }

  nextSlide() {
    let current = this.state.current;
    let imageArray = this.state.background.length - 1;

    if((current >= 0) && (current !== imageArray))
      this.setState({ current: current + 1 })
    if(current === imageArray) {
      this.setState({ current: 0 })
    }
  }

  render() {
    return (
      <div className="w3-row w3-padding-64" id="about">       

        <div>
          <div className="w3-col m6 w3-padding-large w3-hide-small">
            <div className="w3-round w3-image w3-opacity-min" style={{ width: "600", height: "750" }}>

              <div className="slider">
                {/* The Current Image*/}
                {
                  this.state.ready ?
                  <Slide
                    background={this.state.background}
                    current={this.state.current}
                    ready={this.state.ready}
                  />
                  : null
                }

                {/* Arrows */}
                <LeftArrow previousSlide={this.previousSlide} />
                <RightArrow nextSlide={this.nextSlide} />
                {/* Dots */}
                <Dots
                  numberOfDots={this.state.background.length}
                  isCurrent={this.state.current}
                  dotClick={this.dotClick}
                 />

                 {this.preloadNextImage()}
              </div>
            </div>

          </div>

          <div className="w3-col m6 w3-padding-large">
            <h1 className="w3-center">About Catering</h1><br></br>
            <h5 className="w3-center">Tradition since 1889</h5>
            <p className="w3-large">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
            <p className="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
