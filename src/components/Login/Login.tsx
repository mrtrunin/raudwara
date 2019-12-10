import React from "react";
import { Form, Input, Icon, Button } from "antd";
import "./Login.css";
import { FormComponentProps } from "antd/lib/form";
import CenterStructure from "../common/PageStructure/CenterStructure";
import { login } from "../../api/api";

interface UserFormProps extends FormComponentProps {
  age: number;
  name: string;
}

const Login = ({ form }: UserFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        login(values.username, values.password).then(res => {
          localStorage.setItem("jwt", res.access_token);
          console.log("Login successful");
          // TODO: redirect
        });
      }
    });
  };

  return (
    <CenterStructure>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {form.getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form>
    </CenterStructure>
  );
};

export default Form.create<UserFormProps>({ name: "normal_login" })(Login);
