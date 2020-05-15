import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin, Dropdown } from 'antd';
import React from 'react';
// import { history, connect } from 'umi';
// import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

class AvatarDropdown extends React.Component {
  onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    // history.push(`/account/${key}`);
  };

  render() {
    const {
      currentUser = {
        avatar: 'http://p4.music.126.net/tzpcaS7_b243MtdjrvYplA==/109951163870857317.jpg?param=80y80',
        name: 'RAdmin',
      },
      menu,
    } = this.props;
    const menuHeaderDropdown = (
      <Menu style={{minWidth: 160}} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="center">
            <UserOutlined />
            个人中心
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings">
            <SettingOutlined />
            个人设置
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}

        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.name ? (
      <Dropdown overlay={menuHeaderDropdown} placement="bottomRight">
        <span className="right-a-span">
          <Avatar size="small" className="img_span" src={currentUser.avatar} alt="avatar" />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
      </Dropdown>
    ) : (
      <span className="right-a-span">
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

export default AvatarDropdown;
