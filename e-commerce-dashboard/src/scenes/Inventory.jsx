import React, { useEffect, useState } from 'react';
import { Space, Table, Button, Modal, Form, Input, InputNumber } from 'antd';
import Header from './Header';
import { getInventory } from '../API/API';

const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDatasource] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDatasource(res.products);
      setLoading(false);
    });
  }, []);

  const handleAdd = () => {
    form.resetFields();
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setEditingItem(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingItem) {
        const newData = dataSource.map((item) =>
          item.id === editingItem.id ? { ...item, ...values } : item
        );
        setDatasource(newData);
      } else {
        const newItem = {
          id: Date.now(),
          ...values,
        };
        setDatasource([...dataSource, newItem]);
      }
      setIsModalOpen(false);
      setEditingItem(null);
      form.resetFields();
    });
  };

  return (
    <Space size={20} direction="vertical" style={{ width: '100%' }}>
      <Header title={'库存管理'} />

      <Button type="primary" onClick={handleAdd}>
        新增商品
      </Button>

      <Table
        loading={loading}
        rowKey="id"
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
          { title: '库存', dataIndex: 'stock' },
          {
            title: '操作',
            render: (_, record) => (
              <Button type="link" onClick={() => handleEdit(record)}>
                编辑
              </Button>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingItem ? '编辑商品' : '新增商品'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingItem(null);
          form.resetFields();
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="商品名"
            name="title"
            rules={[{ required: true, message: '请输入商品名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="价格"
            name="price"
            rules={[{ required: true, message: '请输入价格' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="库存"
            name="stock"
            rules={[{ required: true, message: '请输入库存数量' }]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            label="缩略图URL"
            name="thumbnail"
            rules={[{ required: true, message: '请输入图片URL' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
};

export default Inventory;
