import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import menuList from "@/routes/menu";
import Icon from '@/components/icons/Icon';

const { SubMenu } = Menu;
class SiderMenu extends React.Component {
  goto = e => {
    console.log(e);
    this.props.history.push(e.key);
  }
  render() {
    return (
      <Menu theme="dark" mode="inline"
        defaultSelectedKeys={[menuList[0].children[1].path]}
        defaultOpenKeys={[menuList[0].path]}
        style={{ padding: '16px 0', width: '100%' }}>
        {menuList.length>0 && menuList.map((item)=>{
          if (item.children && item.children.length>0) { // 二级菜单
            return (
              <SubMenu key={item.path} icon={<Icon type={item.icon} />} title={item.title}>
                {item.children.map(v => (<Menu.Item key={v.path}><Link to={v.path}>{v.title}</Link></Menu.Item>))}
              </SubMenu>
            );
          } else { // 一级菜单
            return (
              <Menu.Item key={item.path} onClick={this.goto} icon={<Icon type={item.icon} />}>
                {item.title}
              </Menu.Item>
            );
          }
        })}
      </Menu>
    )
  }
}
export default withRouter(SiderMenu);