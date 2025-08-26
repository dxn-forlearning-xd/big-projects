import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import Header from './Header';
import { Box } from '@ant-design/charts';
import { getOrders } from '../API/API';

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDatasource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDatasource(res.products);
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
      <Header title={'订单管理'}></Header>

      <Table
        loading={loading}
        columns={[
          {
            title: '缩略图',
            dataIndex: 'thumbnail',
            render: (url) => (
              <img
                src={url}
                alt="商品缩略图"
                style={{ width: 50, height: 50, objectFit: 'cover' }}
              />
            ),
          },
          { title: '商品名', dataIndex: 'title' },
          {
            title: '价格',
            dataIndex: 'price',
            render: (value) => <span>￥{value}</span>,
          },
          { title: '数量', dataIndex: 'quantity' },
          {
            title: '总价',
            dataIndex: 'total',
            sorter: (a, b) => a.price - b.price,
            render: (value) => <span>￥{value}</span>,
          },
        ]}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />
    </Space>
  );
};

export default Orders;
