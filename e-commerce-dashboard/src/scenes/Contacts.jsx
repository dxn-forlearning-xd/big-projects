import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import Header from './Header';
import { Box } from '@ant-design/charts';
import { getContacts } from '../API/API';

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDatasource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getContacts().then((res) => {
      setDatasource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space
      size={20}
      direction="vertical
    "
      style={{ width: '100%' }}
    >
      <Header title={'顾客信息'}></Header>

      <Table
        loading={loading}
        columns={[
          {
            title: '头像',
            dataIndex: 'image',
            render: (url) => (
              <img
                src={url}
                alt="头像"
                style={{ width: 50, height: 50, objectFit: 'cover' }}
              />
            ),
          },
          { title: '姓名', dataIndex: 'firstName' },
          {
            title: '电话',
            dataIndex: 'phone',
          },
          { title: '邮箱', dataIndex: 'email' },
        ]}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      ></Table>
    </Space>
  );
};

export default Contacts;
