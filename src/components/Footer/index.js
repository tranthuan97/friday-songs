import React from 'react';
// import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import { BackTop, Button, Input } from 'antd';
const { Search } = Input;
const FooterComponent = props => {
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center" style={{ paddingTop: 50, paddingBottom: 50, background: '#F6F6F8' }}>
        <Row style={{ maxWidth: 1200, width: '100%' }}>
          <div className="col-sm-6 col-lg-3 mb-4">
            <h1 style={{ marginBottom: 10, fontSize: 25, fontWeight: 600 }}>TP Shop</h1>
            <ul>
              <li style={{ color: 'gray' }} className="my-2">
                <i className="mx-2 fa fa-map-marker-alt" />
                Da Nang city, VietNam.
              </li>
              <li style={{ color: 'gray' }} className="my-2">
                <i className="mx-2 fa fa-envelope" />
                tranthuan.ttt @gmail.com
              </li>
              <li style={{ color: 'gray' }} className="my-2">
                <i className="mx-2 fa fa-phone-alt" />
                +84 79 466 8037
              </li>
              <li style={{ color: 'gray' }} className="my-2">
                <i className="mx-2 fab fa-facebook" />
                <i className="mx-2 fab fa-twitter" />
                <i className="mx-2 fab fa-instagram" />
                <i className="mx-2 fab fa-linkedin-in" />
                <i className="mx-2 fab fa-pinterest-p" />
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-2 mb-4">
            <h3 style={{ marginBottom: 10, fontSize: 18, fontWeight: 600 }}>Categories</h3>
            <ul>
              <li style={{ color: 'gray' }} className="my-2">Men</li>
              <li style={{ color: 'gray' }} className="my-2">Women</li>
              <li style={{ color: 'gray' }} className="my-2">Accessories</li>
              <li style={{ color: 'gray' }} className="my-2">Shoes</li>
              <li style={{ color: 'gray' }} className="my-2">Denim</li>
              <li style={{ color: 'gray' }} className="my-2">Dress</li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-2 mb-4">
            <h3 style={{ marginBottom: 10, fontSize: 18, fontWeight: 600 }}>Infomation</h3>
            <ul>
              <li style={{ color: 'gray' }} className="my-2">About Us</li>
              <li style={{ color: 'gray' }} className="my-2">Contact Us</li>
              <li style={{ color: 'gray' }} className="my-2">Privacy policy</li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-2 mb-4">
            <h3 style={{ marginBottom: 10, fontSize: 18, fontWeight: 600 }}>Useful links</h3>
            <ul>
              <li style={{ color: 'gray' }} className="my-2">Store Location</li>
              <li style={{ color: 'gray' }} className="my-2">My Account</li>
              <li style={{ color: 'gray' }} className="my-2">FAQs</li>
            </ul>
          </div>
          <div className="col-12 col-lg-3 mb-4">
            <h3 style={{ marginBottom: 10, fontSize: 18, fontWeight: 600 }}>Newsletter Signup</h3>
            <p className="mb-2" style={{ color: 'gray' }}>Subscribe to our newsletter and get 10% off your first purchase</p>
            <Search
              placeholder="Your email address"
              allowClear
              enterButton="Subscribe"
              size="large"
              style={{ maxWidth: 400, borderRadius: 20 }}
              bordered
            // onSearch={onSearch}
            />
          </div>
        </Row>
      </div >
      <div style={{ textAlign: 'center', color: 'gray' }} className="py-3">
        <div className="my-1">
          Copyright © 2021. Powered by Tran Thuan
        </div>
        <ul className="d-flex justify-content-center my-1">
          <li className="mx-2">Shop</li>
          <li className="mx-2">About US</li>
          <li className="mx-2">Contact</li>
        </ul>
      </div>
      <BackTop>
        <Button type="dashed" style={{ position: 'absolute', right: -35, bottom: 5, width: 50, height: 50, borderRadius: 5, background: 'white', textAlign: 'center', lineHeight: '50px', }}>
          <i className="fa fa-angle-up" style={{ fontSize: 25 }} />
        </Button>
      </BackTop>
    </div >
  );
};

FooterComponent.propTypes = {

};

export default FooterComponent;