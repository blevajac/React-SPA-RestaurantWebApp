import React, { Component } from 'react';

//components
import TodaysSpecialMenuCarousel from './TodaysSpecialMenuCarousel';

//helper functions
import h from '../../../helper-functions/helpers';
//h.formatPrice(count * fish.price)

//css
import '../../../index.css';

const carouselSlidesData = [
  {
    name: "Sweet Fruit Surprise",
    day:  "Monday"
  }, {
    name: "The Rib-Eye Surprise",
    day:  "Tuesday"
  }, {
    name: "The Iron Caesar",
    day:  "Wednesday"
  }, {
    name: "The Crusted Dipped Chicken",
    day:  "Thursday"
  }, {
    name: "The Drunken Flyer Surprise",
    day:  "Friday"
  }, {
    name: "Jack's All Night Dinner",
    day:  "Saturday"
  }, {
    name: "The Mean Sirloin",
    day:  "Sunday"
  }
];

class TodaysSpecialMenu extends Component {
  constructor(props) {
    super(props);

    this.callbackFromParent = this.callbackFromParent.bind(this);
  }

  callbackFromParent(dataFromChild) {
    this.props.callbackFromParentMC(dataFromChild);
  }

  render() {
    const { todaySpecialMenu } = this.props;
    return (
        <div className="w3-row w3-padding-64" id="menu">
            <h1 className="w3-center">Today's special Menu</h1>
            <div className="w3-col l6 w3-padding-large">
                <TodaysSpecialMenuCarousel slides={carouselSlidesData} todaysDate={ todaySpecialMenu.id } callbackFromParentTSP={this.callbackFromParent}/>
              <br></br>

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
  }
}


export default TodaysSpecialMenu;
