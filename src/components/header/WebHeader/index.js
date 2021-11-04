import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Badge } from 'antd';
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import '../headerStyles.scss'
import HeaderDropdown from '../HeaderDropdown';

const WebHeader = props => {
  return (
    <div className="d-flex px-3 bg-white" style={{ borderBottom: '1px dashed #b0b0b0' }}>
      <div>
        <img loading="lazy" style={{ width: 70 }} src={require('../../../assets/image/logo/logo.png').default} alt="logo" />
      </div>
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="mx-2 dropdownCover">
          <div className="dropdownButton">PRODUCTS</div>
          <div className="dropdownContent">
            <HeaderDropdown />
          </div>
        </div>
        <div className="mx-2">SALE</div>
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