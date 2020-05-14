import React from 'react';
// 这是整体引入
// import * as allIcons from '@ant-design/icons/es/icons';
// import AntdIcon, {createFromIconfontCN, getTwoToneColor, setTwoToneColor} from '@ant-design/icons';

// 这里还是采用按需引入
import {
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
  ProfileOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  UserOutlined,
  HighlightOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MehOutlined,
  SettingOutlined,
  HomeOutlined,
} from '@ant-design/icons';
export default class Icon extends React.Component {
  outIconByType() {
    let ico;
    switch(this.props.type) {
      case 'DashboardOutlined':
        ico = <DashboardOutlined />;
        break;
      case 'FormOutlined':
        ico = <FormOutlined />;
        break;
      case 'TableOutlined':
        ico = <TableOutlined />;
        break;
      case 'ProfileOutlined':
        ico = <ProfileOutlined />;
        break;
      case 'CheckCircleOutlined':
        ico = <CheckCircleOutlined />;
        break;
      case 'WarningOutlined':
        ico = <WarningOutlined />;
        break;
      case 'UserOutlined':
        ico = <UserOutlined />;
        break;
      case 'HighlightOutlined':
        ico = <HighlightOutlined />;
        break;
      case 'VideoCameraOutlined':
        ico = <VideoCameraOutlined />;
        break;
      case 'UploadOutlined':
        ico = <UploadOutlined />;
        break;
      case 'MenuUnfoldOutlined':
        ico = <MenuUnfoldOutlined {...this.props} />;
        break;
      case 'MenuFoldOutlined':
        ico = <MenuFoldOutlined {...this.props} />;
        break;
      case 'SettingOutlined':
        ico = <SettingOutlined />;
        break;
      case 'HomeOutlined':
        ico = <HomeOutlined />;
        break;
      default:
        ico = <MehOutlined />;
    }
    return ico;
  }
  render() {
    return (
      <>
        {this.outIconByType()}
      </>
    )
  }
}