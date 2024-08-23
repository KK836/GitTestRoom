import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.jpg";

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="로고" className="logo-image" />
          </Link>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/works">작품정보</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/creator">크리에이터</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/data">데이터분석</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/community">커뮤니티</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/mypage">마이페이지</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
