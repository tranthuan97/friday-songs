import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const SectionCard = ({ img, type, name, price, discount, style, className }) => {
  return (
    <div style={style} className={className}>
      <img className="mb-2" src={img} alt="img" />
      <p><b>{name}</b></p>
      <span style={{ color: 'gray', marginRight: 5 }}>
        {discount ? <del>{price}</del> : price}
      </span>
      <span style={{ color: 'red' }}>{discount}</span>
      {type &&
        <Button type="dashed" shape="circle" style={{
          width: 50,
          height: 50,
          position: 'absolute',
          top: 20,
          right: 20,
          color: type.toLowerCase() === 'new' ? 'blue' : 'red'
        }}>
          {type}
        </Button>
      }
    </div>
  );
};

SectionCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SectionCard;