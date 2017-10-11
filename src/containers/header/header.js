import React from 'react';

//css
import '../../index.css';
//import '../../css/containers/header/header.css';

const Header = () => (
  <header className="w3-display-container w3-content w3-wide" style={{ maxWidth:'1600px', minWwidth: '500px'}} id="home">
    <img className="w3-image" src="https://www.w3schools.com/w3images/hamburger.jpg" alt="Hamburger Catering" style={{ width: "1600", height: "800" }} />
    <div className="w3-display-bottomleft w3-padding-large w3-opacity">
      <h1 className="w3-xxlarge">Le Catering</h1>
    </div>
  </header>
);

export default Header;
