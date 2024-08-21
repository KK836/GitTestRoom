import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/services">로고 및 서비스</Link>
          </li>
          <li>
            <Link to="/works">작품정보</Link>
          </li>
          <li>
            <Link to="/creator">크리에이터</Link>
          </li>
          <li>
            <Link to="/data">데이터분석</Link>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
        </ul>
        <button className="login-button">로그인</button>
      </nav>
    </header>
  );
};

export default Header;
