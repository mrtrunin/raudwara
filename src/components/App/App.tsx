import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "../Navigation/Navigation";
import { Layout } from "antd";
import Books from "../Book/Books";
import Chapter from "../Chapter/Chapter";
import Login from "../Login/Login";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import { User } from "../User/User.model";
import Logout from "../Logout/Logout";
import Write from "../Write/Write";

const { Header, Content, Footer } = Layout;

const App = () => {
  const user: User = useSelector((state: RootState) => state.user.user);

  axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem("jwt");

      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return (
    <Router>
      <Layout>
        <Header className="header">
          <div className="logo">
            {user.firstName ? `Welcome ${user.firstName}!` : ""}
          </div>
          <Navigation />
        </Header>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <Switch>
            <Route path="/books" component={Books} />
            <Route path="/chapter/:id" component={Chapter} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/write" component={Write} />
          </Switch>
          {/* Some main page */}
        </Content>
        <Footer className="center">Raudwara 2019</Footer>
      </Layout>
    </Router>
  );
};

export default App;
