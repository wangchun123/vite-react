import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../redux/store";
import request from "../../util/request";
import "./index.less";
import RadarLoading from "../../component/RadarLoading";

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      // 使用幻想的登录接口
      const res = await request.post("https://mock.presstime.cn/mock/68418e0b96dd34226fe483ad/myaApp/login", {
        username,
        password,
      });
      // 假设幻想接口返回 { success: true, user: { id, name } }
      const data = res.data;
      if (data && data.success && data.user && data.user.id) {
        dispatch({ type: "LOGIN_ASYNC", payload: username });
        navigate("/home");
      } else {
        setError("登录失败");
      }
    } catch (err: any) {
      setError(err?.message || "请求异常");
    } finally {
      setLoading(false);
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
          <button type="submit" style={{ width: "100%", padding: 10 }} disabled={loading}>
            {loading ? <RadarLoading /> : "登录"}
          </button>
        </form>
      </div>
      {contextHolder}
    </div>
  );
};

export default Login;
