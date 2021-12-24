import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Button } from 'antd';
import { Close } from '@mui/icons-material';

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
      <div className={`${styles.content} ${visible ? styles.contentLeft : styles.contentRight}`}>
        <div>
          img
        </div>
        <div>
          content
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