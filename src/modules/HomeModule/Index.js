import { Col, Row } from 'antd';
import React from 'react';
import HomeCarousel from './Components/HomeCarousel';
import MusicCard from './Components/MusicCard';

const HomeIndex = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="mt-5">
        <Row gutter={[16, 16]}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
              return (
                <Col key={index} xs={24} sm={12} md={8} lg="6">
                  <MusicCard />
                </Col>
              )
            })
          }
        </Row>
      </div>
    </div>
  );
}
export default HomeIndex