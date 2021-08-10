import React from 'react';
import PropTypes from 'prop-types';
import './musicCard.scss'

const MusicCard = props => {
  return (
    <div style={{maxWidth: 300}}>
      <div className="block">
        <div className="head">
          {/* <h2><span>Enjoy</span> The Life</h2>
          <div className="box">
            <p>Stay Healthy</p>
            <p>Stay Happy</p>
          </div> */}
        </div>
        <div className="bg"></div>
        <div className="iconBox">
          {/* <div className="icon">
            <i className="fas fa-home"></i>
          </div> */}
          <div className="icon">
            <i className="fas fa-link"></i>
          </div>
          <div className="icon">
            <i className="fas fa-play"></i>
          </div>
          <div className="icon">
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

MusicCard.propTypes = {

};

export default MusicCard;