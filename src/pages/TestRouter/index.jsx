import React from "react";
import { Table } from "antd";

const TestRouter = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Doe",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jane Doe",
      age: 28,
      address: "London No. 1 Lake Park",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default TestRouter;