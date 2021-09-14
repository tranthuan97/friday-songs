import React from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';

const SliderComponent = ({ data, title, rounded, contentStyles }) => {

  const [state, setState] = React.useState({
    screen: 768
  })

  const dispatch = useDispatch();

  const size = React.useRef(768);
  const ref = React.useRef()

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: state.screen < 768 ? 3 : 5,
    slidesToScroll: 1,
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    arrows: false,
  }

  window.addEventListener('resize', (e) => {
    const screenWidth = window.innerWidth
    if (screenWidth < 768) {
      if (size.current < 768) return;
      setState(pre => ({ ...pre, screen: screenWidth }))
      size.current = screenWidth;
    }
    if (size.current >= 768) return;
    setState(pre => ({ ...pre, screen: screenWidth }))
    size.current = screenWidth;
  })

  window.addEventListener('load', () => {
    const screenWidth = window.innerWidth
    setState(pre => ({ ...pre, screen: screenWidth }))
  })

  const listenToMusic = (item) => {
    dispatch({ type: 'LISTEN_SONG', song: item })
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
                  <div className={`${rounded ? 'rounded-circle' : ''} ${styles.cover}`}>
                    <img className={`${rounded ? 'rounded-circle' : ''}  ${styles.img}`} src={item.img} alt="..." />
                    <div className={styles.box}>
                      <div className={styles.boxContent}>
                        <AiOutlinePlayCircle onClick={() => listenToMusic(item)} className={styles.playBtn} />
                      </div>
                    </div>
                  </div>
                  <div title={item.name} className={styles.textUnderImg} style={contentStyles}>{item.song}</div>
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