import React from "react";
import Slider from "react-slick";
import './slickStyles.css'

export default function HomeCarousel() {

  const data = [
    { id: 1, img: 'https://avatar-ex-swe.nixcdn.com/slideshow-web/2020/09/22/f/1/4/5/1600768775945.jpg' },
    { id: 1, img: 'https://avatar-ex-swe.nixcdn.com/slideshow/2020/11/27/f/1/f/d/1606470229209_org.jpg' },
    { id: 1, img: 'https://avatar-ex-swe.nixcdn.com/slideshow-web/2021/06/23/6/8/e/e/1624434548622.jpg' },
  ];

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {
        data.map((item) => {
          return (
            <div key={item.id}>
              <img style={{ paddingInline: 10, width: '100%' }} src={item.img} alt="..." />
            </div>
          )
        })
      }
    </Slider>
  );
}