import React from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css'

const SliderComponent = ({ data, title }) => {

  const ref = React.useRef()
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    arrows: false,
  }
  return (
    <div className="my-3">
      <div className="d-flex justify-content-between align-items-center mx-2">
        <h4 style={{ fontWeight: 700 }}>{title}</h4>
        <div>
          <i onClick={() => ref.current.slickPrev()} style={{ cursor: 'pointer' }} className={`fas fa-chevron-left mx-1 p-1 ${styles.nextBtn}`}></i>
          <i onClick={() => ref.current.slickNext()} style={{ cursor: 'pointer' }} className={`fas fa-chevron-right mx-1 p-1 ${styles.prevBtn}`}></i>
        </div>
      </div>
      <Slider ref={ref} {...settings}>
        {
          data.map((item) => {
            return (
              <div key={item.id}>
                <div style={{ paddingInline: 10 }}>
                  <img style={{ width: '100%', borderRadius: 5 }} src={item.img} alt="..." />
                  <div title={item.name} className={styles.textUnderImg} style={{ paddingTop: 5, fontWeight: 600, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{item.name}</div>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default SliderComponent;