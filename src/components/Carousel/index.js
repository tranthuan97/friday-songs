import React from 'react';
import PropTypes from 'prop-types';
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
        <img loading="lazy" src={`https://cdn.shopify.com/s/files/1/0332/6420/5963/files/Slider1_3350x.jpg?v=1628696569`} alt="img" />
      </div>
      <div className="d-flex justify-content-center">
        <img loading="lazy" src={`https://cdn.shopify.com/s/files/1/0332/6420/5963/files/Slider2_3000x.jpg?v=1628696591`} alt="img" />
      </div>
      <div className="d-flex justify-content-center">
        <img loading="lazy" src={`https://cdn.shopify.com/s/files/1/0332/6420/5963/files/Slider3_1950x.jpg?v=1628696608`} alt="img" />
      </div>
    </Slider>
  );
};

CarouselComponent.propTypes = {

};

export default CarouselComponent;