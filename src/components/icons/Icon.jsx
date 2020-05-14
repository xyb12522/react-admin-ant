import React from 'react';
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