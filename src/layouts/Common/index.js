import React from 'react';
import { Layout, Input, Menu, BackTop, Affix, Button } from 'antd';
import {
  FireOutlined,
  PartitionOutlined,
  CrownOutlined,
  SearchOutlined,
  UserOutlined,
  StarOutlined,
  RightOutlined,
  LeftOutlined,
  GlobalOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import publicRoutes from '../../routes/publicRoutes';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.module.css'
import { useSelector } from 'react-redux';
import AudioPlayer from '../../components/AudioPlayer';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const CommonLayout = ({ props }) => {
  const [state, setState] = React.useState({
    sizeBottm: 0,
  })
  const isOpenModal = useSelector(state => state.songReducer?.isOpenModal);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/common') {
        return <Route path={prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  const onSearch = event => console.log(event.target.value);

  React.useEffect(() => {
    if (isOpenModal) {
      const screenSize = document.querySelector('.affix-bottom')?.clientHeight;
      setState(pre => ({ ...pre, sizeBottm: screenSize }))
    }
  }, [isOpenModal])
  console.log(state.sizeBottm)
  return (
    <React.Fragment>
      <div className="d-flex">
        <Sider style={{
          background: '#fff', borderRight: '1px solid #EAEBEB',
          // overflow: 'auto',
          flex: 0,
          // height: '100%',
        }}
        >
          <div className={styles.logo} >
            My Songs
          </div>
          <Menu theme="light" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              Cá nhân
            </Menu.Item>
            <Menu.Item key="2" icon={<FireOutlined />}>
              Khám phá
            </Menu.Item>
            <Menu.Item key="3" icon={<CrownOutlined />}>
              Xếp hạng
            </Menu.Item>
            <SubMenu key="sub1" icon={<PartitionOutlined />} title="Thể loại">
              <Menu.Item icon={<StarOutlined />} key="4">Việt Nam</Menu.Item>
              <Menu.Item icon={<ThunderboltOutlined />} key="5">US-UK</Menu.Item>
              <Menu.Item icon={<GlobalOutlined />} key="6">Khác</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ flex: 1, overflow: 'auto', height: `calc(100vh - ${state.sizeBottm}px)` }}>
          <Header className={styles.siteLayoutBackgroundHeader} style={{ padding: 0, display: 'flex', justifyContent: 'space-between' }} >

            <Input onChange={onSearch} style={{ maxWidth: 400, height: 40, borderRadius: 50, margin: 'auto 5px' }} placeholder="Nhập tên bài hát, tên nghệ sĩ hoạt MV..." prefix={<SearchOutlined style={{ fontSize: 20 }} />} />
            <div className="px-2" style={{ whiteSpace: 'nowrap' }}>
              <span>Xin chào, </span>
              <span style={{ color: 'blue', display: 'inline-block' }}>Trần Thuận</span>
            </div>
          </Header>
          <Content>
            <div className={styles.siteLayoutBackgroundBody} style={{ paddingInline: 24 }}>
              <Switch>
                {getRoutes(publicRoutes)}
              </Switch>
            </div>
            <Footer style={{ textAlign: 'center' }}>Friday Songs ©2021 Created by TT</Footer>
            {/* <BackTop style={{ right: 30, bottom: 120 }} /> */}
          </Content>
        </Layout>
      </div>
      {isOpenModal && <Affix className="affix-bottom" style={{ zIndex: 2 }} offsetBottom={0}>
        <AudioPlayer />
      </Affix>}
    </React.Fragment>
  );
}
export default CommonLayout