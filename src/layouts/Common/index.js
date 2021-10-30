import React from 'react';
import { Layout, Menu, } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../../pages/home';

const CommonLayout = ({ props }) => {
  const [state, setState] = React.useState({
    sizeBottm: 0,
    isSiderOpen: false,
  })

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/common') {
        return <Route path={prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}
export default CommonLayout