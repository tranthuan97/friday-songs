import React from 'react';
import { Layout, Input, Menu, BackTop } from 'antd';
import {
    FireOutlined,
    PartitionOutlined,
    CrownOutlined,
    SearchOutlined,
    UserOutlined,
    StarOutlined,
    // RightOutlined,
    // LeftOutlined,
    GlobalOutlined,
    ThunderboltOutlined,
} from '@ant-design/icons';
import publicRoutes from '../../routes/publicRoutes';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.module.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// const CustomTrigger = ({ collapsed }) => {
//     return <div style={{ background: 'white'}}>
//         {
//             collapsed ?
//                 <RightOutlined style={{ fontSize: 20, color: '#002140' }} /> :
//                 <LeftOutlined style={{ fontSize: 20, color: '#002140' }} />
//         }
//     </div>
// }

const CommonLayout = ({ props }) => {
    // const [state, setState] = React.useState({
    //     collapsed: false,
    // })

    // const onCollapse = collapsed => {
    //     setState({ collapsed });
    // };

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

    // const { collapsed } = state;
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider style={{ background: '#fff', borderRight: '1px solid #EAEBEB' }}
            // trigger={<CustomTrigger collapsed={collapsed} />}
            // collapsible
            // collapsed={collapsed}
            // onCollapse={onCollapse}
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
            <Layout>
                <Header className={styles.siteLayoutBackgroundHeader} style={{ padding: 0, display: 'flex', justifyContent: 'space-between' }} >

                    <Input onChange={onSearch} style={{ maxWidth: 400, height: 40, borderRadius: 50, margin: 'auto 5px' }} placeholder="Nhập tên bài hát, tên nghệ sĩ hoạt MV..." prefix={<SearchOutlined style={{ fontSize: 20 }} />} />
                    <div className="px-2" style={{ whiteSpace: 'nowrap' }}>
                        <span>Xin chào, </span>
                        <span style={{ color: 'blue', display: 'inline-block' }}>Trần Thuận</span>
                    </div>
                </Header>
                <Content>
                    <div className={styles.siteLayoutBackgroundBody} style={{ paddingInline: 24, minHeight: 360 }}>
                        <Switch>
                            {getRoutes(publicRoutes)}
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Friday Songs ©2021 Created by TT</Footer>
            </Layout>
            <BackTop style={{right: 30}}/>
        </Layout>
    );
}
export default CommonLayout