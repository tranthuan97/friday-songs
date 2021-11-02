import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import { Button as BtnAntd, Badge } from 'antd';
import { SearchOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const AppHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: 'white'}} color="default">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div>
              <img loading="lazy" style={{ width: 70 }} src={require('../../../assets/image/logo/logo.png').default} alt="logo" />
            </div>
          </Typography>
          <div className="d-flex align-items-center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <BtnAntd className="mx-1" shape="circle" type="dashed" icon={<SearchOutlined />} />
            <BtnAntd className="mx-1" shape="circle" type="dashed" icon={<UserOutlined />} />
            <Badge className="mx-1" count={5}>
              <div><BtnAntd shape="circle" type="dashed" icon={<HeartOutlined />} /></div>
            </Badge>
            <Badge className="mx-1" count={5}>
              <div><BtnAntd shape="circle" type="dashed" icon={<ShoppingCartOutlined />} /></div>
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
