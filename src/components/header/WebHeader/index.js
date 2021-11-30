import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Badge } from 'antd';
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import '../headerStyles.scss'
import HeaderDropdown from '../HeaderDropdown';
import HeaderDropdown2 from '../HeaderDropdown2';

const WebHeader = props => {
  return (
    <div className="d-flex px-3 bg-white" style={{ borderBottom: '1px dashed #b0b0b0' }}>
      <div>
        <img loading="lazy" style={{ width: 70 }} src={require('assets/image/logo/logo.png').default} alt="logo" />
      </div>
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="mx-2 dropdownCover">
          <div className="dropdownProductButton">PRODUCTS</div>
          <div className="dropdownProductContent">
            <HeaderDropdown />
          </div>
        </div>
        <div className="mx-2 dropdownCover">
          <div className="dropdownSaleButton">SALE</div>
          <div className="dropdownSaleContent">
            <HeaderDropdown2 />
          </div>
        </div>
        <div className="mx-2">PORTFOLIO</div>
      </div>
      <div className="d-flex align-items-center">
        <Button className="mx-1" shape="circle" type="dashed" icon={<SearchOutlined />} />
        <Button className="mx-1" shape="circle" type="dashed" icon={<UserOutlined />} />
        <Badge className="mx-1" count={5}>
          <div><Button shape="circle" type="dashed" icon={<HeartOutlined />} /></div>
        </Badge>
        <Badge className="mx-1" count={5}>
          <div><Button shape="circle" type="dashed" icon={<ShoppingCartOutlined />} /></div>
        </Badge>
      </div>
    </div >
  );
};

WebHeader.propTypes = {

};

export default WebHeader;