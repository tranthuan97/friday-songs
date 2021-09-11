import React from 'react';
import SliderComponent from '../../components/SliderComponent';
import HomeCarousel from './Components/HomeCarousel';
import NewSongs from './Components/NewSongs';
import Rank from './Components/Rank';

import audio from '../../assets/audio/MuaRoiLangTham.mp3'
import audio2 from '../../assets/audio/Ta-Co-Hen-Voi-Thang-5-Nguyen-Ha.mp3'
import audio3 from '../../assets/audio/Thoi-Thanh-Xuan-Se-Qua-Pham-Hong-Phuoc-Van-Mai-Huong.mp3'
import audio4 from '../../assets/audio/GiaiDieuTinhYeu-ThuyChi.mp3'
import audio5 from '../../assets/audio/ThanhXuan-DaLAB.mp3'
import audio6 from '../../assets/audio/BaiCaTuoiTre-DaLABLinhCaoMelG.mp3'

const data = [
  {
    id: 1, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg',
    song: 'Mưa Rơi Lặng Thầm', audio: audio, singer: [{ id: 1, singer: 'M4U', url: '' }], url: ''
  },
  {
    id: 2, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg',
    song: 'Ta Có Hẹn Với Tháng 5', audio: audio2, singer: [{ id: 1, singer: 'Nguyên Hà', url: '' }], url: ''
  },
  {
    id: 3, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg',
    song: 'Thời Thanh Xuân Sẽ Qua', audio: audio3, singer: [{ id: 1, singer: 'Phạm Hồng Phước', url: '' }], url: ''
  },
  {
    id: 4, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg',
    song: 'Giai Điệu Tình Yêu', audio: audio4, singer: [{ id: 1, singer: 'Thùy Chi', url: '' }], url: ''
  },
  {
    id: 5, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg',
    song: 'Thanh Xuân', audio: audio5, singer: [{ id: 1, singer: 'DaLAB', url: '' }], url: ''
  },
  {
    id: 6, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg',
    song: 'Bài Ca Tuổi Trẻ', audio: audio6, singer: [
      { id: 1, singer: 'DaLAB', url: '' },
      { id: 2, singer: 'Linh Cáo', url: '' },
      { id: 3, singer: 'MelG', url: '' }
    ], url: ''
  },
];

const HomeIndex = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="mt-5">
        <SliderComponent
          data={data}
          title={'Nhạc HOT'}
        />
        <SliderComponent
          data={data}
          title="Nhạc Hay Chọn Lọc"
        />
        <div className="mb-4">
          <Rank />
        </div>
        <div className="mb-4">
          <NewSongs />
        </div>
        <SliderComponent
          data={data}
          title="Chủ Đề HOT"
        />
        <SliderComponent
          data={data}
          title="Ca Sĩ Nổi Bật"
          rounded={true}
          contentStyles={{
            textAlign: 'center',
            fontWeight: 600
          }}
        />
      </div>
    </div >
  );
}
export default HomeIndex