import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import './AppHeader.scss';

import { Button as BtnAntd, Badge } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import DrawerComponent from '../../DrawerComponent';
import { Collapse, ListItemButton } from '@mui/material';
import { AttachMoney, AutoAwesome, ExpandLess, ExpandMore, Favorite, Person, ShoppingBasket } from '@mui/icons-material';

const categories = [
  { name: "Women's Clothing", icon: <i className="fas fa-female" style={{ fontSize: 25, paddingLeft: 5 }} /> },
  { name: "Men's Clothing", icon: <i className="fas fa-male" style={{ fontSize: 25, paddingLeft: 5 }} /> },
  { name: "Accessories", icon: <AutoAwesome /> },
  { name: "Shoes", icon: <i className="fas fa-shoe-prints" style={{ fontSize: 20, paddingLeft: 2 }} /> },
]

const AppHeader = () => {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [openDrawer, setOpenDrawer] = React.useState(false)
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    // onClick={() => setOpenDrawer(false)}
    // onKeyDown={() => setOpenDrawer(false)}
    >
      <List>
        <ListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <img loading="lazy" style={{ width: 70 }} src={require('../../../assets/image/logo/logo.png').default} alt="logo" />
          </ListItemIcon>
          <ListItemText primary={<div style={{fontSize: 20, fontWeight: 700}}>TP SHOP</div>} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <React.Fragment>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ShoppingBasket />
            </ListItemIcon>
            <ListItemText primary="Products" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {
            categories.map(item => (
              <Collapse key={item.name} in={open} timeout="auto" unmountOnExit>
                <List onClick={() => setOpenDrawer(false)} component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </List>
              </Collapse>
            ))
          }
          <Divider />
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <AttachMoney />
            </ListItemIcon>
            <ListItemText primary="Sale" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Favorite />
            </ListItemIcon>
            <ListItemText primary="Wishlist" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Login / Register" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemText primary={
              <div>
                <div className="my-2">
                  Need helps ?
                </div>
                <small className="my-1" style={{ display: 'block', color: 'gray' }}>
                  <i className="fa fa-phone" /> +84 79 466 8037
                </small>
                <small style={{ display: 'block', color: 'gray' }}>
                  <i className="fa fa-envelope" /> tranthuan.ttt@gmail.com
                </small>
              </div>
            } />
          </ListItemButton>
        </React.Fragment>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'white' }} color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div>
              <img loading="lazy" style={{ width: 70 }} src={require('../../../assets/image/logo/logo.png').default} alt="logo" />
            </div>
          </Typography>
          <div className="d-flex align-items-center">
            <BtnAntd
              className="button"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </BtnAntd>
            <BtnAntd className="mx-1" shape="circle" type="dashed" icon={<SearchOutlined />} />
            <Badge className="mx-1" count={5}>
              <div><BtnAntd shape="circle" type="dashed" icon={<ShoppingCartOutlined />} /></div>
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerComponent anchor="left" open={openDrawer} toggle={setOpenDrawer} items={list("left")} />
    </Box>
  );
}

export default AppHeader;
