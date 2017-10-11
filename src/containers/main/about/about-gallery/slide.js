import React from 'react';

//css
import '../../../../css/containers/main/about/gallery.css';

const Slide = (props) => {
  const current = props.background[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${current}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }
  return <div className="slide" style={styles.imageBackground}></div>
}

export default Slide;
