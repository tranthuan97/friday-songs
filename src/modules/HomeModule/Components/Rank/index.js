import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'antd';
import styles from './styles.module.css';
import { Container } from 'reactstrap';

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
                    <div style={{position: 'absolute', top: 36, left: 24, fontSize: 28, color: 'white'}}>
                      {item.region.toUpperCase()}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="p-4">
                      <h5 style={{ fontSize: 16 }}>Thê Lương</h5>
                      <p style={{ fontSize: 13, color: '#878889' }}>Phúc Chinh</p>
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

Rank.propTypes = {

};

export default Rank;