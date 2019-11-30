import React, { FC } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Math } from "../../pages/Math/Math";
import { Navigation } from "../Navigation/Navigation";
import { Layout } from "antd";

const { Header, Content } = Layout;

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
            <Route path="/math" component={Math} />
            {/* <Route path={} component={} /> */}
          </Switch>
          {/* Some main page */}
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
