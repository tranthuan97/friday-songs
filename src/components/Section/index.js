import React from 'react';
// import PropTypes from 'prop-types';
import SectionCard from './SectionCard';


const Section = ({ title, subTitle, style, className, items }) => {
  return (
    <div style={style} className={className}>
      <div className="mb-4">
        <div className="d-flex justify-content-center">
          <h1 style={{ fontWeight: 700, fontSize: 20, textAlign: 'center', marginInline: 10 }}>{title}</h1>
        </div>
        <i><p style={{ textAlign: 'center', fontFamily: 'Libre Baskerville', color: 'gray', fontSize: 16, fontWeight: 600 }}>{subTitle}</p></i>
      </div>
      <div className="row">
        {
          items.map(item => {
            return <div key={item.id} className="col-6 col-md-3 mb-4">
              <SectionCard
                img={item.img}
                name={item.name}
                price={item.price}
                discount={item.discount}
                type={item.type}
              />
            </div>
          })
        }
      </div>
    </div>
  );
};

Section.propTypes = {

};

export default Section;