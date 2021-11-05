import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const IntoInput = props => {

  const refs = React.useRef();

  return (
    <div className="m-5" style={{ textAlign: 'center' }}>
      {
        [1, 2, 3, 4, 5].map(item => {
          return (
            <div key={item} className="my-1">
              Input {item} <Input ref={refs} maxLength={3} style={{ width: 200 }} />
            </div>
          )
        })
      }
    </div>
  );
};

IntoInput.propTypes = {

};

export default IntoInput;