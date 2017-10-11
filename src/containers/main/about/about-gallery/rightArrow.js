import React from 'react';

//css
import '../../../../css/containers/main/about/gallery.css';

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.nextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;
