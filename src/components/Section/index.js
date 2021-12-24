import QuickViewModal from 'components/modal/QuickViewModal';
import React from 'react';
// import PropTypes from 'prop-types';
import SectionCard from './SectionCard';


const Section = ({ title, subTitle, style, className, items }) => {

  const [modalVisible, setModalVisible] = React.useState(false);

  const onCancel = () => {
    setModalVisible(false);
  }

  const onOpen = () => {
    setModalVisible(true);
  }

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
                onOpenModal={onOpen}
                img={item.img}
                name={item.name}
                price={item.price}
                discount={item.discount}
                type={item.type}
                size={item.size}
              />
            </div>
          })
        }
      </div>
      <QuickViewModal visible={modalVisible} onCancel={onCancel}/>
    </div>
  );
};

Section.propTypes = {

};

export default Section;