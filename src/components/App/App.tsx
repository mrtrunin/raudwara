import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Navigation } from "../Navigation/Navigation";
import { Layout } from "antd";
import Books from "../Book/Books";
import Chapter from "../Chapter/Chapter";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <div className="logo" />
        <Header className="header">
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
          </Switch>
          {/* Some main page */}
        </Content>
        <Footer className="center">Raudwara 2019</Footer>
      </Layout>
    </Router>
  );
};

export default App;
