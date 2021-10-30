import React from 'react';
import PropTypes from 'prop-types';

const Collections = ({ style, className }) => {
  return (
    <div className={`${className} d-flex flex-column flex-md-row`} style={style}>
      <div className="d-flex col-md-6 col-12 mb-3" style={{ position: 'relative' }}>
        <img
          style={{ width: '100%' }}
          src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/young-beautiful-woman-looking-trendy-girl-casual-summer-clothes-positive-funny-model-winking_1080x.jpg?v=1606209527"
          alt="women" />
        <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, boxShadow: '1px 1px gray', background: 'white', width: 80, height: 40, position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
          Women
        </div>
      </div>
      <div className="d-flex col-md-6 col-12 px-0 mb-3">
        <div className="d-flex flex-column col-md-6">
          <div className="flex-1 mb-4" style={{ position: 'relative' }}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/bag2_540x.jpg?v=1581730050"
              alt="acessories" />
            <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, boxShadow: '1px 1px gray', background: 'white', width: 80, height: 40, position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
              Acessories
            </div>
          </div>
          <div className="flex-1" style={{ position: 'relative' }}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/lemai3020112688_m4_2-0_540x.jpg?v=1606229788"
              alt="acessories" />
            <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, boxShadow: '1px 1px gray', background: 'white', width: 80, height: 40, position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
              Footwear
            </div>
          </div>
        </div>
        <div className="col-6" style={{ position: 'relative' }}>
          <img
            style={{ height: '100%', width: '100%' }}
            src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/p24-21_540x.jpg?v=1581731327"
            alt="acessories" />
          <div className="d-flex justify-content-center align-items-center" style={{ fontWeight: 600, boxShadow: '1px 1px gray', background: 'white', width: 80, height: 40, position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, -50%)' }}>
            Watches
          </div>
        </div>
      </div>
    </div>
  );
};

Collections.propTypes = {
  style: PropTypes.object,
  className: PropTypes.any
};

export default Collections;