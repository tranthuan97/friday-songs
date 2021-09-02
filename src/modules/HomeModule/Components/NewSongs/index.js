import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import styles from './styles.module.css';

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    id: i,
    image: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/2/e/9/12e9db50f219aa52f4b6427fa8a9de99.jpg',
    song: 'Anh Chỉ Biết Câm Nín Nghe Tiếng Em Khóc',
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
                <div className={styles.cover} style={{ marginInline: 5, display: 'flex', flex: 1, padding: 10, borderRadius: 5 }}>
                  <div style={{ background: 'gray', borderRadius: 5 }}>
                    <img src={item.image} alt='img' style={{ width: 55, height: 55, borderRadius: 5 }} />
                  </div>
                  <div className={`px-2`} style={{ alignSelf: 'center', overflow: 'hidden' }}>
                    <h5 title={item.song} className={styles.song}>{item.song}</h5>
                    <div className={styles.singers} style={{ color: '#878889' }}>
                      {item.singers.map(s => {
                        return (
                          <span title={s.singer} className={styles.singers_singer} key={s.id}>
                            {s.singer}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Col>)
          })
        }
      </Row>
    </div >
  );
};

NewSongs.propTypes = {

};

export default NewSongs;