import React from "react";
import { Form, Input, Icon, Button } from "antd";
import "./Login.css";
import { FormComponentProps } from "antd/lib/form";
import CenterStructure from "../common/PageStructure/CenterStructure";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../User/UserActions";

interface UserFormProps extends FormComponentProps {
  username: string;
  password: string;
  history: any;
}

const Login = ({ form }: UserFormProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    form.validateFields(async (err, values) => {
      if (!err) {
        try {
          dispatch(login(values.username, values.password));
          history.push("/books");
        } catch (error) {
          alert(error);
        }
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
