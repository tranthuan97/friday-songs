import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Button, Slider } from 'antd';
// import { RetweetOutlined } from '@ant-design/icons';

import audio from '../../assets/audio/MuaRoiLangTham.mp3'
import audio2 from '../../assets/audio/Ta-Co-Hen-Voi-Thang-5-Nguyen-Ha.mp3'
import audio3 from '../../assets/audio/Thoi-Thanh-Xuan-Se-Qua-Pham-Hong-Phuoc-Van-Mai-Huong.mp3'
import audio4 from '../../assets/audio/GiaiDieuTinhYeu-ThuyChi.mp3'
import audio5 from '../../assets/audio/ThanhXuan-DaLAB.mp3'
import audio6 from '../../assets/audio/BaiCaTuoiTre-DaLABLinhCaoMelG.mp3'
// import styles from './styles.module.css';
import './login.scss';
import { useSelector } from 'react-redux';

const arrayMusic = [
  { id: 0, name: 'Mưa Rơi Lặng Thầm', src: audio, singer: 'M4U' },
  { id: 1, name: 'Ta Có Hẹn Với Tháng 5', src: audio2, singer: 'Nguyên Hà' },
  { id: 2, name: 'Thời thanh Xuân Sẽ Qua', src: audio3, singer: 'Phạm Hồng Phước - Văn Mai Hương' },
  { id: 3, name: 'Giai Điệu Tình Yêu', src: audio4, singer: 'Thùy Chi' },
  { id: 4, name: 'Thanh Xuân', src: audio5, singer: 'DaLAB' },
  { id: 5, name: 'Bài Ka Tuổi Trẻ', src: audio6, singer: 'DaLAB - Linh Cao - MelG' },
];

export default function Login() {
  const [state, setState] = React.useState({
    duration: 0,
    isPlay: false,
    currentTime: 0,
    currentMusic: 0,
    isLoading: true,
    volume: 7,
    isLoop: false
  });
  const ref = React.useRef();
  const interval = React.useRef();

  const songData = useSelector((state) => state.songReducer?.song);

  const loadAudio = React.useCallback((currentMusic, songData) => {
    ref.current.src = songData.audio;
    // ref.current.src = arrayMusic[currentMusic].src;
    ref.current.load();
    ref.current.onloadedmetadata = () => {
      const { duration } = ref.current;
      setState(pre => ({ ...pre, duration, currentTime: 0, isPlay: false, isLoading: false }));
    };
    ref.current.addEventListener('ended', () => {
      clearInterval(interval.current);
      // const currentMusic = state.currentMusic === arrayMusic.length - 1 ? state.currentMusic : state.currentMusic + 1;
      // setState(pre => ({ ...pre, isPlay: false, currentMusic }));
      setState(pre => ({ ...pre, isPlay: false }));
    });
  }, []);

  const updatePlayer = React.useCallback(() => {
    interval.current = setInterval(() => {
      setState(pre => ({ ...pre, currentTime: (ref.current.currentTime * 100) }));
    }, 20);
  }, []);

  const pauseAudio = () => {
    ref.current.pause();
    clearInterval(interval.current);
    setState(pre => ({ ...pre, isPlay: false }));
  }

  const playAudio = () => {
    const playPromise = ref.current.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        setState(pre => ({ ...pre, isPlay: true }));
        updatePlayer();
      })
        .catch(error => {
        });
    }
  };

  const onChangeRange = React.useCallback((value) => {
    pauseAudio();
    if (Math.floor((value / 100)) === Math.floor(state.duration)) {
      return;
    }
    ref.current.currentTime = value / 100;
    setState(pre => ({ ...pre, currentTime: value }));
  }, [state.duration]);

  const onChangeMusic = (key) => {
    switch (key) {
      case 'next':
        if (state.currentMusic === arrayMusic.length - 1) return;
        setState(pre => ({ ...pre, currentMusic: state.currentMusic + 1, isLoading: true }));
        break;
      case 'back':
        if (state.currentMusic === 0) return;
        setState(pre => ({ ...pre, currentMusic: state.currentMusic - 1, isLoading: true }));
        break;

      default:
        break;
    }
  }

  const onChangeVolume = React.useCallback((value) => {
    ref.current.volume = value / 10
    setState(pre => ({ ...pre, volume: ref.current.volume * 10 }));
  }, [])

  const formatDurationTime = React.useMemo(() => {
    const minutes = Math.floor(state.duration / 60) < 10 ? `0${Math.floor(state.duration / 60)}` : Math.floor(state.duration / 60);
    const seconds = Math.floor(state.duration % 60);
    return `${minutes}:${seconds}`
  }, [state.duration]);

  const formatCurrentTime = React.useMemo(() => {
    const currentTime = state.currentTime / 100;
    const minutes = Math.floor(currentTime / 60) < 10 ? `0${Math.floor(currentTime / 60)}` : Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60) < 10 ? `0${Math.floor(currentTime % 60)}` : Math.floor(currentTime % 60);
    return `${minutes}:${seconds}`
  }, [state.currentTime])

  const selectSong = (index) => {
    if (index === state.currentMusic) return null;
    setState(pre => ({ ...pre, currentMusic: index, isLoading: true }))
  }



  const renderListMusic = (item, index) => {
    return (
      <React.Fragment key={item.id}>
        <div className="my-2 d-flex justify-content-between align-items-center listMusic">
          <div>
            <div style={{ fontWeight: 600 }}> {item.name}</div>
            <small><i>{item.singer}</i></small>
          </div>
          <Button className="bg-primary" onClick={() => selectSong(index)}><i className="fas fa-play text-white" /></Button>
        </div>
        {index < arrayMusic.length - 1 && <hr />}
      </React.Fragment >
    )
  }

  React.useEffect(() => {
    setState(pre => ({ ...pre, isLoading: true }));
    setTimeout(() => {
      if (!ref.current) {
        ref.current = new Audio();
        ref.current.audio = 0.7;
      }
      loadAudio(state.currentMusic, songData);
    }, 500);
  }, [loadAudio, songData, state.currentMusic]);

  if (!songData || songData.length === 0) return null
  const singers = songData.singer.map((item, index) => {
    if (index === songData.singer.length - 1) {
      return <span key={item.id}>{item.singer}</span>
    }
    return <span key={item.id}>{item.singer}, </span>
  })

  return (
    <React.Fragment>
      {/* <Card>
                <CardHeader>List nhạc</CardHeader>
                <CardBody>
                    {
                        arrayMusic.map(renderListMusic)
                    }
                </CardBody>
            </Card> */}
      <div className={`py-3 px-5 text-center setWidth`} style={{ background: '#120C1C' }}>
        <div style={{ color: 'white' }}>
          {`Bài hát: ${songData.song} - `}
          {
            singers
          }
          {/* {`Bài hát: ${arrayMusic[state.currentMusic].name} - ${arrayMusic[state.currentMusic].singer}`} */}
        </div>
        <Button style={{ boxShadow: 'none' }} className="mx-1 bg-primary" onClick={() => onChangeMusic('back')}><i className="fas fa-step-backward text-white"></i></Button>
        <Button style={{ boxShadow: 'none' }} className="mx-1 bg-primary" onClick={() => !state.isPlay ? playAudio() : pauseAudio()}>
          {!state.isLoading ? state.isPlay ?
            <i className="fas fa-pause text-white" /> :
            <i className="fas fa-play text-white" /> :
            <i className="fa fa-spinner fa-pulse text-white"></i>
          }
        </Button>
        <Button style={{ boxShadow: 'none' }} className="mx-1 bg-primary" onClick={() => onChangeMusic('next')}><i className="fas fa-step-forward text-white"></i></Button>
        {/* <RetweetOutlined className="ml-2" style={{cursor: 'pointer', fontSize: '30px', color: '#08c' }} /> */}
        <div className="flex-grow-1 px-2">
          <div className="d-flex justify-content-between text-primary">
            <span>{formatCurrentTime}</span>
            <Slider style={{ height: 2, width: '100%', marginInline: 10 }} onMouseUp={() => console.log(1)} onChange={onChangeRange} type="range" min={0} value={Math.round(state.currentTime)} max={Math.round(state.duration * 100)} />
            <span>{formatDurationTime}</span>
            <i style={{ fontSize: 20 }} className={`fas volumeIcon ${state.volume ? `fa-volume-up` : `fa-volume-down`} ml-3`}></i>
            <span className="volumeRange" style={{ position: 'relative', display: 'none' }}>
              <Slider vertical style={{ zIndex: 9999, height: 50, marginInline: 5, position: 'absolute', bottom: 30, left: -22 }} type="range" onChange={onChangeVolume} min={0} value={state.volume} max={10} />
              <div style={{ width: 25, height: 25, backgroundColor: '', position: 'absolute', bottom: 11, left: -25 }}></div>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
};
