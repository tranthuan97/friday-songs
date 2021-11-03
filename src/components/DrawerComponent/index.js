import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const DrawerComponent = ({ anchor, open, toggle, items }) => {
  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={() => toggle(false)}
          onOpen={() => toggle(true)}
        >
          {items}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default DrawerComponent;