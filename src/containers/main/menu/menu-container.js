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
      todaySpecialMenu: todaySpecialMenu
    };
  }

  todaySpecialMenu = () => {
    const todayDay = h.todayDay();

    return todaySpecialMenu.menu.map((menu, id) => {
      if(menu.id === todayDay) {
        return (
          <TodaysSpecialMenu key={id} todaySpecialMenu={menu} />
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
