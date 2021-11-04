import { Divider } from 'antd';
import React from 'react';
import './headerDropdown.scss'

const data = [
  "MEN'S CLOTHING",
  "WOMEN'S CLOTHING",
  "ACCESSORIES",
  "SHOES",
]

const HeaderDropdown = props => {
  return (
    <div className="header-dropdown row">
      {
        data.map(product => (
          <div key={product} className="col-3">
            <div className="header-product mt-3">{product}</div>
            <Divider />
            {
              [1, 2, 3, 4, 5].map(item => (
                <div key={item} className="header-item my-3">Item Number {item}</div>
              ))
            }
          </div>
        ))
      }
    </div>

  );
};

HeaderDropdown.propTypes = {

};

export default HeaderDropdown;