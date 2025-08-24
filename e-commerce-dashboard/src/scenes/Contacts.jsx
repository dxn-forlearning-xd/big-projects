import React from 'react';
import { Table } from 'antd';
import { mockDataTeam } from '../data/mockData';
import Header from '../components/Header';

const Contacts = () => {
  const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '电话', dataIndex: 'phone', key: 'phone' },
  ];
  return (
    <div>
      <Header title={'顾客信息'}></Header>
      <div>
        <Table dataSource={mockDataTeam} columns={columns}></Table>
      </div>
    </div>
  );
};

export default Contacts;
