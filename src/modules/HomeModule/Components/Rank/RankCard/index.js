import React from 'react';
import { Button } from 'antd';
import styles from './styles.module.css';

const RankCard = ({ data }) => {

  const [state, setState] = React.useState({
    songs: [],
    number: 1,
    screenSize: 1000,
    songData: data.songs[0],
  })

  const ref = React.useRef();
  const size = React.useRef(1000);
  const { song, singers } = state.songData

  const countDown = () => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setState(pre => ({ ...pre, songData: data.songs[0], number: 1 }))
    }, 10000);
  }

  const setScreenSize = (screenSize) => {
    setState(pre => ({ ...pre, screenSize }));
    size.current = screenSize;
  }

  window.addEventListener('resize', (e) => {
    const screenSize = document.querySelector('.div-cover')?.clientWidth;
    if (screenSize <= 191) {
      if (size.current <= 191) return;
      setScreenSize(screenSize);
    } else {
      if (size.current > 191) return;
      setScreenSize(192)
    }
  })

  window.addEventListener('load', () => {
    const size = document.querySelector('.div-cover')?.clientWidth;
    setState(pre => ({ ...pre, screenSize: size }));
  })

  React.useEffect(() => {
    setState(pre => ({ ...pre, songs: data.songs }))
  }, [data])

  return (
    <div style={{ position: 'relative', height: 300, display: 'flex', flexDirection: 'column', flex: 1, background: '#F6F6F6' }}>
      <div
        className="div-cover"
        style={{
          flex: 1,
          width: '100%',
          borderRadius: 5,
          backgroundImage: `url(${data.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}>
        <div style={{ position: 'absolute', top: 24, left: 24, fontSize: 28, color: 'white' }}>
          {data.region.toUpperCase()}
        </div>
        {
          data.songs.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`${styles[`box${index + 1}`]}`}
                onMouseEnter={() => setState(pre => ({ ...pre, songData: item, number: index + 1 }))}
                onMouseLeave={() => countDown()}
                style={{
                  display: index === 2 && (state.screenSize <= 191) ? 'none' : 'block'
                }}
              >
                <img src={item.image} alt='' style={{ borderRadius: 5, width: '100%', height: '100%' }} />
              </div>
            )
          })
        }
      </div>
      <div style={{ flex: 1 }}>
        <div className="p-4" style={{ position: 'relative' }}>
          <div style={{ zIndex: 5, position: 'relative' }}>
            <h5 title={song} className={styles.songTitle}>{song}</h5>
            <p className={styles.singers}>
              {
                singers.map((item, index) => {
                  return (
                    <React.Fragment key={item.id}>
                      <span title={item.singer} className={styles.singers_singer}>{item.singer}</span>
                      {
                        singers.length - 1 !== index && ', '
                      }
                    </React.Fragment>
                  )
                })
              }
            </p>
            <Button className={styles.viewAllBtn} style={{ background: '#F2F2F2' }}>Xem tất cả</Button>
          </div>
          <div style={{ zIndex: 1, position: 'absolute', top: '22%', right: 24, fontSize: 56, fontWeight: 700, color: '#E7E8E8' }}>
            #{state.number}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankCard;