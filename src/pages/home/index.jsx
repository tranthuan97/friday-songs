import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import CarouselComponent from '../../components/Carousel';
import { Affix } from 'antd';
import Collections from '../../components/Collections';
import Section from '../../components/Section';
import fakeTrendingData from '../../fakedata/fakeTrendingData';
import fakeBestSellerData from '../../fakedata/fakeBestSellerData';
import FooterComponent from '../../components/Footer';
import IGSlider from '../../modules/home/components/IGSlider';

const Home = props => {
  return (
    <div>
      <Affix offsetTop={0}>
        <Header />
      </Affix>
      <CarouselComponent />
      <div className="d-md-flex justify-content-md-center">
        <Collections style={{ maxWidth: 1200 }} className="mt-5 mb-5" />
      </div>
      <div className="d-md-flex justify-content-md-center">
        <Section style={{ maxWidth: 1200, padding: 15 }} title="TRENDING" subTitle="Top view in this week" items={fakeTrendingData} />
      </div>
      <div className="d-md-flex justify-content-md-center">
        <Section style={{ maxWidth: 1200, padding: 15 }} title="BEST SELLER" subTitle="Top sale in this week" items={fakeBestSellerData} />
      </div>
      <div>
        <IGSlider />
      </div>
      <FooterComponent />
    </div>
  );
};

Home.propTypes = {

};

export default Home;