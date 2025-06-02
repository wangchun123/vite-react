import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

import "./index.css";

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 简单校验
    if (!username || !password) {
      setError("请输入用户名和密码");
      openNotification("topRight");
      return;
    }
    setError("");
    // 登录成功后跳转到首页
    navigate("/home");
  };

  const openNotification = (placement) => {
    api.info({
      message: `用户名和密码`,
      description: <>随便🫤输入即可</>,
      placement,
    });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
            />
          </div>
          {error && (
            <div style={{ color: "red", marginBottom: 12 }}>{error}</div>
          )}
          <button type="submit" style={{ width: "100%", padding: 10 }}>
            登录
          </button>
        </form>
      </div>
      {contextHolder}
    </div>
  );
};

export default Login;
