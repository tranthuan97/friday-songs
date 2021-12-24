import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './styles.scss';

const SectionCard = ({ img, type, name, price, discount, style, size, className, onOpenModal }) => {

  const [changeImg, setChangeImg] = React.useState(false);
 

  return (
    <div
      onMouseEnter={() => setChangeImg(true)}
      onMouseLeave={() => setChangeImg(false)}
      style={style} className={`${className} section-card`}>
      <div className="img-cover mb-2">
        <img style={{ width: '100%', height: '100%' }} loading="lazy" src={img[changeImg ? img.length > 1 ? 1 : 0 : 0]} alt="img" />
        <div className="img-cover_selection">
          <div className="selector" onClick={onOpenModal}>
            <div className="quick-view">
              <div className="item-text">Quick View</div>
              <div className="item-icon"><i className="fa fa-eye" aria-hidden="true"></i></div>
            </div>
          </div>
          <div className="selector">
            <div className="add-to-cart">
              <div className="item-text" >Add To Cart</div>
              <div className="item-icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
        {type &&
          <Button type="dashed" shape="circle" style={{
            width: 50,
            height: 50,
            position: 'absolute',
            top: 10,
            right: 20,
            color: type.toLowerCase() === 'new' ? 'blue' : 'red'
          }}>
            {type}
          </Button>
        }
        {size &&
          <div className="section-cart_size">{size.map((item, index) => {
            return <span key={item.id}>{`${item.sizeName}${index < size.length - 1 ? ', ' : ''}`} </span>
          })}</div>
        }
        <div className="img-cover_background"></div>
      </div>
      <p><b>{name}</b></p>
      <span style={{ color: 'gray', marginRight: 5 }}>
        {discount ? <del>{price}</del> : price}
      </span>
      <span style={{ color: 'red' }}>{discount}</span>
      
    </div>
  );
};

SectionCard.propTypes = {
  img: PropTypes.array,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SectionCard;