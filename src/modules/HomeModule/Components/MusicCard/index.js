import React from 'react';
import './musicCard.scss'
import backgroundImage from './background.jpg'

const MusicCard = props => {
  return (
    <p className="block" >
      <img className="bg" style={{ width: '100%', height: '100%' }} src={backgroundImage} alt="..." />
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
    </p>
  );
};

export default MusicCard;