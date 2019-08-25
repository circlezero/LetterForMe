import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
import Header from "./layout/Header";

import "App.scss";

const App: React.FC = () => {
  const { Footer, Content } = Layout;
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>

        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </div>
  );
};

export default App;
