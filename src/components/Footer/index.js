import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import { BackTop, Button, Input } from 'antd';
const { Search } = Input;
const FooterComponent = props => {
  return (
    <div className="mt-5  ">
      <div className="d-flex justify-content-center" style={{ paddingTop: 30, paddingBottom: 30, background: '#F6F6F8' }}>
        <Row style={{ maxWidth: 1200, width: '100%' }}>
          <div className="col-3">
            <h1>TP Shop</h1>
            <ul>
              <li>
                <i className="fa fa-map-marker-alt" />
                Da Nang city, VietNam.
              </li>
              <li>
                <i className="fa fa-envelope" />
                tranthuan.ttt@gmail.com
              </li>
              <li>
                <i className="fa fa-phone-alt" />
                +84 79 466 8037
              </li>
              <li>
                <i className="fab fa-facebook" />
                <i className="fab fa-twitter" />
                <i className="fab fa-instagram" />
                <i className="fab fa-linkedin-in" />
                <i className="fab fa-pinterest-p" />
              </li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Categories</h3>
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>Shoes</li>
              <li>Denim</li>
              <li>Dress</li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Infomation</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="col-2">
            <h3>Useful links</h3>
            <ul>
              <li>Store Location</li>
              <li>My Account</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col-3">
            <h3>Newsletter Signup</h3>
            <p>Subscribe to our newsletter and get 10% off your first purchase</p>
            <Search
              placeholder="Your email address"
              allowClear
              enterButton="Subcribe"
              size="large"
            // onSearch={onSearch}
            />
          </div>
        </Row>
      </div>
      <div style={{ textAlign: 'center' }} className="py-3">
        Copyright © 2021. Powered by Tran Thuan
      </div>
      <BackTop>
        <Button type="dashed" style={{ position: 'absolute', right: -35, bottom: 5, width: 50, height: 50, borderRadius: 5, background: 'white', textAlign: 'center', lineHeight: '50px', }}>
          <i className="fa fa-angle-up" style={{ fontSize: 25 }} />
        </Button>
      </BackTop>
    </div>
  );
};

FooterComponent.propTypes = {

};

export default FooterComponent;