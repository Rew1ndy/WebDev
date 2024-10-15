import React from 'react';
import { useState } from 'react';
import { Table, Button, Space, Popconfirm, message } from 'antd';

const Admin = () => {
//   const dataSource = [
//     { key: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { key: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Moderator' },
//     { key: '3', name: 'Sam Brown', email: 'sam@example.com', role: 'User' },
//   ];

  const [dataSource, setdataSource] = useState([
        { key: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { key: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Moderator' },
        { key: '3', name: 'Sam Brown', email: 'sam@example.com', role: 'User' },
  ]);

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleDelete = (key) => {
    message.success(`User with key ${key} deleted`);
    console.log(key)
    setdataSource(dataSource.filter((el) => el.key != key));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <Button type="primary" style={{ marginBottom: '20px' }}>
        Add New User
      </Button>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export { Admin };
