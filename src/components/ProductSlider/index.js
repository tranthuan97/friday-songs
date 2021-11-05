import React from 'react';
// import PropTypes from 'prop-types';
import Slider from '@ant-design/react-slick';
import { Button } from 'antd';
import SectionCard from '../Section/SectionCard';

const ArrowButton = ({ icon, isDisable, position, onClick }) => {
  return <Button
    onClick={onClick}
    style={{
      ...position,
      width: 40,
      height: 40,
      position: 'absolute',
      bottom: '40%',
      zIndex: 5,
      backgroundColor: `rgba(255, 0, 0, ${isDisable ? 0 : 0.2})`
    }}
    type="dashed" shape="circle" >{icon}</Button>
}

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  const isDisable = className.includes('slick-disabled');
  return (
    <ArrowButton
      onClick={onClick}
      isDisable={isDisable}
      position={{ right: 10 }}
      icon={<i className="fa fa-chevron-right"
        style={{ color: 'white' }} />}
    />
  )
}
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  const isDisable = className.includes('slick-disabled');
  return (
    <ArrowButton
      onClick={onClick}
      isDisable={isDisable}
      position={{ left: 10 }}
      icon={<i className="fa fa-chevron-left"
        style={{ color: 'white' }} />}
    />
  )
}

const ProductSlider = ({ items }) => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.id}>
            <div style={{paddingInline: 5, position: 'relative'}}>
              <SectionCard
                img={item.img}
                name={item.name}
                price={item.price}
                discount={item.discount}
                type={item.type}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ProductSlider.propTypes = {

};

export default ProductSlider;