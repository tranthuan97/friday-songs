import React from 'react';
import Home from '../../pages/home';
import './styles.scss';

const CommonLayout = ({ props }) => {

  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.layout === '/common') {
  //       return <Route path={prop.path} component={prop.component} key={key} />;
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}
export default CommonLayout