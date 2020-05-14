import React from 'react';
import { Layout } from 'antd';
import Menu from './SiderMenu/SiderMenu';
import TopHeader from './TopHeader/TopHeader';
import Contents from './Content/Content';

import logo from '@/logo.png';
import Icon from '@/components/icons/Icon';
import './layout.less';

const { Header, Footer, Sider, Content } = Layout;
class Layouti extends React.Component {
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
      <Layout>
        {/* 侧边栏 */}
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="ant-pro-sider-menu-sider" width={256}>
          {/* logo */}
          <div className="ant-pro-sider-menu-logo">
            <a href="/">
              <img src={logo} alt="logo" />
              {this.state.collapsed ? null : <h1>React Admin</h1>}
            </a>
          </div>
          {/* 菜单 */}
          <Menu />
        </Sider>
        <Layout className="site-layout">
          {/* 头部 */}
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Icon type={this.state.collapsed ? "MenuUnfoldOutlined" : "MenuFoldOutlined"} onClick={this.toggle} className="rant-header-trigger" />
            <TopHeader />
          </Header>
          {/* body内容 */}
          <Content className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}>
            <Contents />
          </Content>
          {/* 底部 */}
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Layouti;