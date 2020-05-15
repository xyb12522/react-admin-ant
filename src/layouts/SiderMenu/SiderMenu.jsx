import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import menuList from "@/routes/menu";
import Icon from '@/components/icons/Icon';

const { SubMenu } = Menu;
class SiderMenu extends React.Component {
  state = {
    menuTreeNode: null,
    openKey: [],
  };
  goto = e => {
    // console.log(e);
    this.props.history.push(e.key);
  }
  UNSAFE_componentWillMount() {
    const menuTreeNode = this.renderMenus(menuList);
    this.setState({
      menuTreeNode,
    });
  }
  // 动态获取菜单
  renderMenus(list) {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname;
    if (list && list.length) {
      let menunode = [];
      list.forEach(item => {
        if (item.children && item.children.length) {
          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find(
            (cItem) => path.indexOf(cItem.path) === 0
          );
          // 如果存在, 说明当前item的子列表需要打开
          if (cItem) {
            this.setState((state) => ({
              openKey: [...state.openKey, item.path],
            }));
          }
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
    const path = this.props.location.pathname;
    const openKey = this.state.openKey;
    return (
      <Menu theme="dark" mode="inline"
        defaultSelectedKeys={[path]}
        defaultOpenKeys={openKey}
        style={{ padding: '16px 0', width: '100%' }}>
        {this.state.menuTreeNode}
      </Menu>
    )
  }
}
export default withRouter(SiderMenu);