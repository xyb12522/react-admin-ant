import React from 'react';
import BreadCrumb from "./Breadcrumb";
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
// import NoticeIconView from './NoticeIconView';
import Avatar from './AvatarDropdown';

import './index.less';
class TopHeader extends React.Component {
  render() {
    return (
      <>
        <BreadCrumb />
        <div className="antd-header-index-right">
          <Tooltip title="使用文档">
            <a
              target="_blank"
              href="https://pro.ant.design/docs/getting-started"
              rel="noopener noreferrer"
              className="right-a-span"
            >
              <QuestionCircleOutlined />
            </a>
          </Tooltip>
          {/* <NoticeIconView /> */}
          <Avatar menu />
        </div>
      </>
    )
  }
}
export default TopHeader;