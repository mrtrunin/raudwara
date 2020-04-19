import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import "@ant-design/compatible/assets/index.css";
import { Input, Button, Form } from "antd";
import "./Login.css";
import CenterStructure from "../common/PageStructure/CenterStructure";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../User/UserActions";

interface UserFormProps {
  username: string;
  password: string;
  history: any;
}

const Login = (form: UserFormProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values: any) => {
    try {
      dispatch(login(values.username, values.password));
      history.push("/books");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <CenterStructure>
      <Form onFinish={onFinish} className="login-form" name="normal_login">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username" }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </CenterStructure>
  );
};

export default Login;
