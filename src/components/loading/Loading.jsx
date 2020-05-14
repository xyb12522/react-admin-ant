import React from 'react';
import { Spin } from 'antd';

// const PageLoading: React.FC<{
//   tip?: string;
// }> = ({ tip }) => (
const PageLoading = () => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" tip={"Loading..."} />
  </div>
);

export default PageLoading;
