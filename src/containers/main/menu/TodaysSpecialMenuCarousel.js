//jsx-a11y/anchor-has-conten
import React, { Component } from 'react';

//helper functions
import h from '../../../helper-functions/helpers';

//css
import '../../../css/containers/main/menu/TodaysSpecialMenu.css'
import '../../../index.css';

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#CarouselLeftArrow"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#CarouselRightArrow"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          href="#CarouselIndicator"
          className={
            this.props.index === this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        ></a>
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    let formatedDate;

    if (this.props.index === this.props.activeIndex) {
      formatedDate = h.calculateDay(this.props.index);
    }

    return (
      <li
        className={
          this.props.index === this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p className="carousel-slide__content">Today's Menu: {this.props.slide.name}

          <br></br>
          <strong className="carousel-slide__author">
            {this.props.slide.day}, {formatedDate}
          </strong>
          <br></br>
        </p>
      </li>
    );
  }
}

// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.getNewDay = this.getNewDay.bind(this);

    this.state = {
      activeIndex: (this.props.todaysDate - 1),
      todayDay: h.todayDay()
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
    this.getNewDay();
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
    this.getNewDay();
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
    this.getNewDay();
  }

  getNewDay () {
    let newDay = this.state.activeIndex;
    newDay = newDay + 1;
    this.props.callbackFromParentTSP(newDay);
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide} todaysDate={this.props.todaysDate}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex === index}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

// Render Carousel component
export default Carousel;

//source
//https://blog.alexdevero.com/create-simple-carousel-react-js/
