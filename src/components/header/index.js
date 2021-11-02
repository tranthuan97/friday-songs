import React from 'react';
// import PropTypes from 'prop-types';
import AppHeader from './AppHeader';
import WebHeader from './WebHeader';

const Header = props => {
  return (
    <div >
      <div className="d-md-none d-block">
        <AppHeader />
      </div>
      <div className="d-md-block d-none">
        <WebHeader />
      </div>
    </div >
  );
};

Header.propTypes = {

};

export default Header;