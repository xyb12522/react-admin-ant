import React from 'react';
import { withRouter, Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import '@/style/home.less';
import logo from '@/logo.png';
import Icon from '@/components/icons/Icon';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
// const logo = '../logo.png';
class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  goto = (v) => {
    console.log(v);
    this.props.history.push(v);
  }
  gotooo = e => {
    console.log(e);
    this.props.history.push(e.key);
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={'ant-pro-sider-menu-sider'} width={256}>
          <div className="ant-pro-sider-menu-logo">
            <a href="/">
              <img src={logo} alt="logo" />
              {this.state.collapsed ? null : <h1>React Admin</h1>}
            </a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} style={{ padding: '16px 0', width: '100%' }}>
            <SubMenu key="sub1" icon={<Icon type="DashboardOutlined" />} title="Dashboard">
              <Menu.Item key="1"><Link to="/dashboard/workplace/form/form">1234132</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<Icon type="UserOutlined" />} title="个人主页">
              <Menu.Item key="21" icon={<Icon />}>option1</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<Icon type="TableOutlined" />} title="列表页">
              <Menu.Item key="31" icon={<Icon />}>option1</Menu.Item>
              <Menu.Item key="32" icon={<Icon />}>option2</Menu.Item>
            </SubMenu>
            <Menu.Item key="/home" onClick={this.gotooo} icon={<Icon type="UserOutlined" />}>
              首页
            </Menu.Item>
            <Menu.Item key="/dash/dashboard" onClick={this.gotooo} icon={<Icon type="VideoCameraOutlined" />}>
              视频
            </Menu.Item>
            <Menu.Item key="/form/form" onClick={this.gotooo} icon={<Icon type="UploadOutlined" />}>
              上传
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'rant-header-trigger',
              onClick: this.toggle,
            })} */}
            <Icon type={this.state.collapsed ? "MenuUnfoldOutlined" : "MenuFoldOutlined"} onClick={this.toggle} className="rant-header-trigger" />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/home" component={()=><div>首页</div>}/>
              <Route exact path="/dash/dashboard" component={()=><div>dash-----</div>}/>
              <Route exact path="/dashboard/workplace/form/form" component={()=><div>表单</div>}/>}/>
              {/* <Route component={()=><div>子路由的404！</div>}/> */}
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default withRouter(Home);