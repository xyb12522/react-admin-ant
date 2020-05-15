import React from 'react';
import { GithubOutlined, CopyrightCircleOutlined } from '@ant-design/icons';
import './index.less';

export default () => (
  <footer className="ant-pro-global-footer">
    <div className="ant-pro-global-footer-links">
      <a title="React Admin" rel="noopener noreferrer" target="_blank" href="https://github.com/xyb12522/react-admin-ant">React Admin</a>
      <a title="React Admin" rel="noopener noreferrer" target="_blank" href="https://github.com/xyb12522/react-admin-ant">
        <GithubOutlined />
      </a>
      <a title="Ant Design" rel="noopener noreferrer" target="_blank" href="https://ant.design/index-cn">Ant Design</a>
    </div>
    <div className="ant-pro-global-footer-copyright">Copyright <CopyrightCircleOutlined /> 2020 七度丢失的梦出品</div>
  </footer>
);