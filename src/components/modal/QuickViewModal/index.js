import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Button } from 'antd';
import { Close } from '@mui/icons-material';

const background = 'https://cdn.shopify.com/s/files/1/0332/6420/5963/products/eberj4183019d5e_q1_2-0_1080x.jpg?v=1606136069';

const QuickViewModal = ({ visible, onCancel }) => {

  React.useEffect(() => {
    if (visible) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
  })

  return (
    <div className={styles.modal} style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? '1' : '0' }}>
      <div onClick={onCancel} className={styles.background}></div>
      <div className={`${styles.body} ${visible ? styles.bodySlideLeft : styles.bodySlideRight}`}>
        <div className={styles.bodyLeft}>
          <div
            style={{
              width: '100%',
              background: visible && `url(${background})`,
              
            }}
          >

          </div>
        </div>
        <div className={styles.bodyRight}>
          <div className={styles.bodyRight_Content}>
            content
          </div>
        </div>
        <Button style={{ position: 'absolute', top: 0, right: 0 }} type='dashed' icon={<Close />} onClick={onCancel} />
      </div>
    </div>
  );
};

QuickViewModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default React.memo(QuickViewModal);