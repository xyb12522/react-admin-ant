import React from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import '../style/home.css'

const { Header, Footer, Sider, Content } = Layout;
const logo = 'https://gw.alipayobjects.com/zos/antfincdn/PmY%24TNNDBI/logo.svg';
export default class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div id={'components-layout'}>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={'ant-pro-sider-menu-sider'} width={256}>
            <div className="ant-pro-sider-menu-logo">
              <a href="/">
                <img src={logo} alt="logo" />
                {this.state.collapsed ? null : <h1>React Admin</h1>}
              </a>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ padding: '16px 0', width: '100%' }}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}