import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom';

//css
import '../../../css/containers/main/router.css';

//components
import About from './about';
import Gallery from './gallery';

const AboutContainer = () => (
  <Router>
    <div>
          <ul className="router-ul">
            <li className="router-li"><Link to="/">About</Link></li>
            <li className="router-li"><Link to="/gallery">Gallery</Link></li>
          </ul>

          <Route exact path="/" component={About}/>
          <Route path="/gallery" component={Gallery}/>

    </div>
  </Router>
)

/*
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
*/
export default AboutContainer;
