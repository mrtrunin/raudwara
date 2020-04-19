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
import WriteChapter from "../Write/WriteChapter";

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
            paddingTop: 80,
            marginTop: 80,
            margin: 0,
            minHeight: "92vh"
          }}
        >
          <Switch>
            <Route path="/books" component={Books} />
            <Route path="/chapter/:id" component={Chapter} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/write" exact component={Write} />
            <Route path="/write/chapter/:id" component={WriteChapter} />
          </Switch>
        </Content>

        <Footer className="center" style={{ height: "8vh" }}>
          Raudwara 2020
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
