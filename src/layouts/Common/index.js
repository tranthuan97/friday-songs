import React from 'react';
import Home from '../../pages/home';
import './styles.scss';

const CommonLayout = ({ props }) => {
  const [loadingPage, setLoadingPage] = React.useState(true);

  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.layout === '/common') {
  //       return <Route path={prop.path} component={prop.component} key={key} />;
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  window.addEventListener('load', () => {
    setLoadingPage(false);
  })

  if (loadingPage) return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%' }}>
      <div className="common-loader">
        <div className="common-outer"></div>
        <div className="common-middle"></div>
        <div className="common-inner"></div>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  );
}
export default CommonLayout