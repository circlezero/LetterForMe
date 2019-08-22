import React from "react";
import { Menu, Icon, Row, Col } from "antd";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Row type="flex" justify="space-around">
        <Col span={8}>
          <div>Logo</div>
        </Col>
        <Col span={8} offset={8}>
          <Menu mode="horizontal">
            <Menu.Item key="letter">
              <Icon type="mail" />
              Letter
            </Menu.Item>
            <Menu.Item key="login">
              <Icon type="login" />
              Login
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
