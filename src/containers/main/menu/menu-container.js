import React, { Component } from 'react';

//css

//data
import todaySpecialMenu from '../../../data/special-menu.json';

//helper functions
import h from '../../../helper-functions/helpers';

//components
import TodaysSpecialMenu from './TodaysSpecialMenu';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todaySpecialMenu: todaySpecialMenu,
      numbDataFromChild: 0
    };
  }

  myCallback = (dataFromChild) => {
        this.setState({ numbDataFromChild: dataFromChild });
  }

  todaySpecialMenu = () => {
    let todayDay;
    let numbDataFromChild = this.state.numbDataFromChild ;

    if(numbDataFromChild === 0) {
      todayDay = h.todayDay();      
    } else {
      todayDay = numbDataFromChild;
    }

    return todaySpecialMenu.menu.map((menu, id) => {
      if(menu.id === todayDay) {
        return (
          <TodaysSpecialMenu key={id} todaySpecialMenu={menu}  callbackFromParentMC={this.myCallback }/>
        );
      }
      return null
    });
  }

  render() {
    return (
      <div className="">
        {this.todaySpecialMenu()}
      </div>
    );
  }
}

export default MenuContainer;

/*
todaySpecialMenu = () => {
  let todayDay;
  let numbDataFromChild = this.state.numbDataFromChild ;

  if(numbDataFromChild === 0) {
    todayDay = h.todayDay();
    console.log("1todayDay", todayDay);
  } else {
    todayDay = numbDataFromChild;
    console.log("12todayDay", todayDay);
  }

  return todaySpecialMenu.menu.map((menu, id) => {
    if(menu.id === todayDay) {
      return (
        <TodaysSpecialMenu key={id} todaySpecialMenu={menu}  callbackFromParentMC={this.myCallback }/>
      );
    }
    return null
  });
}

*/
