import React, { FC } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Math } from "../../pages/Math/Math";
import { Navigation } from "../Navigation/Navigation";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const App: FC = () => {
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
            <Route path="/matemaatika" component={Math} />
            {/* <Route path={} component={} /> */}
          </Switch>
          {/* Some main page */}
        </Content>
        <Footer className="center">Raudwara 2019</Footer>
      </Layout>
    </Router>
  );
};

export default App;
