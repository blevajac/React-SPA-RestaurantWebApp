import React from 'react';
import {
  BrowserRouter as Router, Route,  Link
} from 'react-router-dom';

//css
import '../../../index.css';
import '../../../css/containers/main/router.css';
import '../../../css/containers/main/about/about.css';

//components
import About from './about';
import Gallery from './gallery';

const AboutContainer = () => (
  <Router>
    <div className="about-border">
          <ul className="router-ul">
            <li className="router-li"><Link to="/">About</Link></li>
            <li className="router-li right-link"><Link to="/gallery">Gallery</Link></li>
          </ul>
          <Route exact path="/" component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/gallery" component={Gallery}/>

    </div>
  </Router>
)

export default AboutContainer;
