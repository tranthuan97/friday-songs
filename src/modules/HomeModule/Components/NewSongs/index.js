import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    id: i,
    image: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/2/e/9/12e9db50f219aa52f4b6427fa8a9de99.jpg',
    song: 'Khi Cô Đơn Em Nhớ Ai',
    singers: [
      { id: i, image: '', singer: 'Vicky Nhung', url: '' }
    ],
    url: ''
  })

}

const NewSongs = props => {
  return (
    <div>
      <h4 style={{ fontWeight: 700 }}>Mới Phát Hành</h4>
      <Row gutter={[16, 16]}>
        {
          data.map(item => {
            return (
              <Col key={item.id} span={24} md={12}>
                <div style={{ background: '#F6F6F6', marginInline: 5, display: 'flex', padding: 10, borderRadius: 5  }}>
                  <div style={{ width: 70, height: 70, background: 'gray' }}>
                    <img src={item.image} alt='img' style={{ width: '100%', height: '100%', borderRadius: 5 }} />
                  </div>
                  <div className="px-2">
                    <h5>{item.song}</h5>
                    <div>
                      {item.singers.map(s => {
                        return (
                          <span key={s.id}>
                            {s.singer}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </div >
  );
};

NewSongs.propTypes = {

};

export default NewSongs;