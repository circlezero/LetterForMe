import React from "react";
import { Layout } from "antd";
import Header from "./layout/Header";
import "App.scss";

const App: React.FC = () => {
  const { Footer, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default App;
