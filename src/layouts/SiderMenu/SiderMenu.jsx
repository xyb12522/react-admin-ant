import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import menuList from "@/routes/menu";
import Icon from '@/components/icons/Icon';

const { SubMenu } = Menu;
class SiderMenu extends React.Component {
  state = {
    menuTreeNode: null,
  };
  goto = e => {
    // console.log(e);
    this.props.history.push(e.key);
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenus(menuList);
    this.setState({
      menuTreeNode,
    });
  }
  // 动态获取菜单
  renderMenus(list) {
    if (list && list.length) {
      let menunode = [];
      list.forEach(item => {
        if (item.children && item.children.length) {
          menunode.push(
            <SubMenu key={item.path} icon={<Icon type={item.icon} />} title={item.title}>
              {this.renderMenus(item.children)}
            </SubMenu>
          );
        } else {
          menunode.push(
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          );
        }
      });
      return menunode;
    }
  }
  render() {
    return (
      <Menu theme="dark" mode="inline"
        defaultSelectedKeys={[menuList[0].path]}
        defaultOpenKeys={[menuList[0].path]}
        style={{ padding: '16px 0', width: '100%' }}>
        {this.state.menuTreeNode}
      </Menu>
    )
  }
}
export default withRouter(SiderMenu);