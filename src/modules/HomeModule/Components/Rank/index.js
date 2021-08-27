import React from 'react';
import { Button, Col, Row } from 'antd';
import styles from './styles.module.css';

const Rank = props => {
  return (
    <div>
      <h4 style={{ fontWeight: 700 }}>BXH Bài Hát</h4>
      <Row gutter={[20, 20]}>
        {
          [
            { id: 1, image: 'https://stc-id.nixcdn.com/v12/static/media/bg_top_1.03d0fd3f.jpg', region: 'Việt Nam' },
            { id: 2, image: 'https://stc-id.nixcdn.com/v12/static/media/bg_top_2.9eb21c0e.jpg', region: 'US-UK' },
            { id: 3, image: 'https://stc-id.nixcdn.com/v12/static/media/bg_top_3.a057d449.jpg', region: 'Hàn quốc' },
          ].map((item) => {
            return (
              <Col style={{}} key={item.id} span={8}>
                <div style={{ position: 'relative', height: 300, display: 'flex', flexDirection: 'column', flex: 1, background: '#F2F2F2' }}>
                  <div style={{
                    flex: 1,
                    width: '100%',
                    borderRadius: 5,
                    backgroundImage: `url(${item.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                  }}>
                    <div style={{ position: 'absolute', top: 24, left: 24, fontSize: 28, color: 'white' }}>
                      {item.region.toUpperCase()}
                    </div>
                    <div className={styles.box1} style={{ borderRadius: 5, position: 'absolute', bottom: '45%', left: 15, height: 80, width: 80, background: 'gray' }}>
                      <img src="https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615554946033_300.jpg" alt='' style={{ borderRadius: 5, width: '100%', height: '100%' }} />
                    </div>
                    <div className={styles.box2} style={{ borderRadius: 5, position: 'absolute', bottom: '45%', left: 60, height: 80, width: 80, background: 'blue' }}>
                      <img src="https://avatar-ex-swe.nixcdn.com/song/2021/08/02/f/d/b/3/1627913895076_300.jpg" alt='' style={{ borderRadius: 5, width: '100%', height: '100%' }} />
                    </div>
                    <div className={styles.box3} style={{ borderRadius: 5, position: 'absolute', bottom: '45%', left: 110, height: 80, width: 80, background: 'green' }}>
                      <img src="https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615525268442_300.jpg" alt='' style={{ borderRadius: 5, width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="p-4">
                      <h5 title="Gặp gỡ, yêu đương và được bên em" style={{ fontSize: 16, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Gặp gỡ, yêu đương và được bên em</h5>
                      <p title="Phan Mạnh Quỳnh" style={{ fontSize: 13, color: '#878889', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>Phan Mạnh Quỳnh</p>
                      <Button className={styles.viewAllBtn} style={{ background: '#F2F2F2' }}>Xem tất cả</Button>
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

export default Rank;