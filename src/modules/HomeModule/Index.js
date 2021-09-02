import React from 'react';
import SliderComponent from '../../components/SliderComponent';
import HomeCarousel from './Components/HomeCarousel';
import NewSongs from './Components/NewSongs';
import Rank from './Components/Rank';

const data = [
  { id: 1, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'Anh chỉ biết câm nín nghe tiếng em khóc' },
  { id: 2, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'Có điều gì sao không nói cùng anh' },
  { id: 3, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 4, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 5, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 6, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 7, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 8, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
  { id: 9, img: 'https://avatar-ex-swe.nixcdn.com/playlist/2020/04/13/0/1/e/7/1586787125253_500.jpg', name: 'The Lazy Song' },
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
        />
      </div>
    </div >
  );
}
export default HomeIndex