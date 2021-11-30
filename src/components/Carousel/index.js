import React from 'react';
// import PropTypes from 'prop-types';
import Slider from "react-slick";

const CarouselComponent = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div className="d-flex justify-content-center">
        <img src={require('assets/image/Slider1_3350x.jpg').default} alt="img" />
      </div>
      <div className="d-flex justify-content-center">
        <img src={require('assets/image/Slider2_3000x.jpg').default} alt="img" />
      </div>
      <div className="d-flex justify-content-center">
        <img src={require('assets/image/Slider3_1950x.jpg').default} alt="img" />
      </div>
    </Slider>
  );
};

CarouselComponent.propTypes = {

};

export default CarouselComponent;