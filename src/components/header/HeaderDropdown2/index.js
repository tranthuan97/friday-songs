import React from 'react';
import fakeTrendingData from '../../../fakedata/fakeTrendingData';
import ProductSlider from '../../ProductSlider';
import './headerDropdown.scss';

const data = [
  "MEN'S CLOTHING",
  "WOMEN'S CLOTHING",
  "ACCESSORIES",
  "SHOES",
]

const HeaderDropdown2 = props => {
  return (
    <div className="header-dropdown d-flex flex-column">
      <div className="d-flex" style={{ textAlign: 'left', padding: 15 }}>
        {
          data.map((item, index) => {
            return (
              <div key={item} className="flex-1 py-3 text-center header-product"  >
                {item}
              </div>
            )
          })
        }
      </div>
      <div style={{ width: '100%', padding: 15 }}>
        <ProductSlider items={fakeTrendingData} />
      </div>

    </div>
  );
};

HeaderDropdown2.propTypes = {

};

export default HeaderDropdown2;