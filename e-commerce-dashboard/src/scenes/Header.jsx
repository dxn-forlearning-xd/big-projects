import React from 'react';
import { Image, Typography, Space, Badge } from 'antd';
import { BellFilled, MailOutlined } from '@ant-design/icons';

const Header = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography.Title level={2} style={{ color: '#fff' }}>
        {title}
      </Typography.Title>
    </div>
  );
};

export default Header;
