import React from 'react';
// import PropTypes from 'prop-types';
import Slider from '@ant-design/react-slick';
import { Button } from 'antd';

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

const IGSlider = props => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
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
      <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 22 }} className="my-2"><i>@</i> FOLLOW US ON INSTAGRAM</div>
      <Slider {...settings}>
        <div>
          <img loading="lazy" style={{ paddingInline: 1 }} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_14_540x.jpg?v=1581782221" alt="img" />
        </div>
        <div>
          <img loading="lazy" style={{ paddingInline: 1 }} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_8_540x.jpg?v=1581782258" alt="img" />

        </div>
        <div>
          <img loading="lazy" style={{ paddingInline: 1 }} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_1_540x.jpg?v=1581781488" alt="img" />

        </div>
        <div>
          <img loading="lazy" style={{ paddingInline: 1 }} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_6_540x.jpg?v=1581789983" alt="img" />

        </div>
        <div>
          <img loading="lazy" style={{ paddingInline: 1 }} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_5_540x.jpg?v=1581782315" alt="img" />

        </div>
        <div>
          <img loading="lazy" style={{ paddingInline: 1 }} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_4_540x.jpg?v=1581782159" alt="img" />

        </div>
        <div>
          <img loading="lazy" style={{ paddingInline: 1 }} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_2_540x.jpg?v=1581781598" alt="img" />

        </div>
        <div>
          <img loading="lazy" style={{ paddingInline: 1 }} src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/ins1_13_540x.jpg?v=1581782196" alt="img" />

        </div>
      </Slider>
    </div>
  );
};

IGSlider.propTypes = {

};

export default IGSlider;