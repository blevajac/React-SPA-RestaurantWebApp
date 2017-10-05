import React, { Component } from 'react';

//css

//data
import todaySpecialMenu from '../../../data/special-menu.json';

//components
import TodaysSpecialMenu from './TodaysSpecialMenu';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todaySpecialMenu: todaySpecialMenu
    };
  }

  componentDidMount() {
    this.getTodaysMenu();
  }

  getTodaysMenu() {
    
  }

  render() {
    return (
      <div className="">
        <TodaysSpecialMenu {...this.state.todaySpecialMenu}/>
      </div>
    );
  }
}

export default MenuContainer;
