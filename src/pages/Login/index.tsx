import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../redux/store";
import "./index.less";

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("请输入用户名和密码");
      openNotification("topRight");
      return;
    }
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(login(username));
      navigate("/home");
    } catch (err) {
      setError("登录失败");
    }
  };

  const openNotification = (placement: any) => {
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
