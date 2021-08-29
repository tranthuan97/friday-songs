import React from 'react';
import { Col, Row } from 'antd';
import RankCard from './RankCard';

const data = [
  {
    id: 1, image: 'https://stc-id.nixcdn.com/v12/static/media/bg_top_1.03d0fd3f.jpg', region: 'Việt Nam',
    songs: [
      {
        id: 1, song: 'Gặp Gỡ, Yêu Đương Và Được Bên Em',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615554946033_300.jpg',
        singers: [{ id: 1, singer: 'Phan Mạnh Quỳnh', url: '' }], url: ''
      },
      {
        id: 2, song: 'Có Điều Gì Sao Không Nói Cùng Anh',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/08/02/f/d/b/3/1627913895076_300.jpg',
        singers: [{ id: 1, singer: 'Trung Quân Idol', url: '' }], url: ''
      },
      {
        id: 3, song: 'Độ Tộc 2',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615525268442_300.jpg',
        singers: [
          { id: 1, singer: 'Masew', url: '' },
          { id: 2, singer: 'Độ Mixi', url: '' },
          { id: 3, singer: 'Phúc Du', url: '' },
          { id: 4, singer: 'Pháo', url: '' },
        ],
        url: ''
      },
    ]
  },
  {
    id: 2, image: 'https://stc-id.nixcdn.com/v12/static/media/bg_top_2.9eb21c0e.jpg', region: 'US-UK',
    songs: [
      {
        id: 1, song: 'Gặp Gỡ, Yêu Đương Và Được Bên Em',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615554946033_300.jpg',
        singers: [{ id: 1, singer: 'Phan Mạnh Quỳnh', url: '' }], url: ''
      },
      {
        id: 2, song: 'Có Điều Gì Sao Không Nói Cùng Anh',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/08/02/f/d/b/3/1627913895076_300.jpg',
        singers: [{ id: 1, singer: 'Trung Quân Idol', url: '' }], url: ''
      },
      {
        id: 3, song: 'Độ Tộc 2',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615525268442_300.jpg',
        singers: [
          { id: 1, singer: 'Masew', url: '' },
          { id: 2, singer: 'Độ Mixi', url: '' },
          { id: 3, singer: 'Phúc Du', url: '' },
          { id: 4, singer: 'Pháo', url: '' },
        ],
        url: ''
      },
    ]
  },
  {
    id: 3, image: 'https://stc-id.nixcdn.com/v12/static/media/bg_top_3.a057d449.jpg', region: 'Hàn quốc',
    songs: [
      {
        id: 1, song: 'Gặp Gỡ, Yêu Đương Và Được Bên Em',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615554946033_300.jpg',
        singers: [{ id: 1, singer: 'Phan Mạnh Quỳnh', url: '' }], url: ''
      },
      {
        id: 2, song: 'Có Điều Gì Sao Không Nói Cùng Anh',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/08/02/f/d/b/3/1627913895076_300.jpg',
        singers: [{ id: 1, singer: 'Trung Quân Idol', url: '' }], url: ''
      },
      {
        id: 3, song: 'Độ Tộc 2',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615525268442_300.jpg',
        singers: [
          { id: 1, singer: 'Masew', url: '' },
          { id: 2, singer: 'Độ Mixi', url: '' },
          { id: 3, singer: 'Phúc Du', url: '' },
          { id: 4, singer: 'Pháo', url: '' },
        ],
        url: ''
      },
    ]
  },
]

const Rank = props => {
  return (
    <div>
      <h4 style={{ fontWeight: 700 }}>BXH Bài Hát</h4>
      <Row gutter={[20, 20]}>
        {
          data.map((item) => {
            return <Col key={item.id} sm={24} md={8}>
              <RankCard data={item} />
            </Col>
          })
        }
      </Row>
    </div >
  );
};

export default Rank;