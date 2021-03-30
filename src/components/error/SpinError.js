import React from 'react';
import { Spin, Alert } from 'antd';

const SpinError = () => (
  <Spin tip="Loading...">
    <Alert message="Alert message title" description="Further details about the context of this alert." type="info" />
  </Spin>
);

export default SpinError;