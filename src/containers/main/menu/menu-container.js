import React, { Component } from 'react';

//css

//components
import TodaysSpecialMenu from './TodaysSpecialMenu';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true
    };
  }

  render() {
    return (
      <div className="">
        <TodaysSpecialMenu />
      </div>
    );
  }
}

export default MenuContainer;
