// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthorPage from "./pages/AuthorPage";
import WorksPage from "./pages/WorkPage"; // 작품정보 페이지 추가
import "./App.css";
import "antd/dist/reset.css"; // 최신 버전의 CSS 파일

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthorPage />} />
        <Route path="/works" element={<WorksPage />} />
        {"http://localhost:5173/works"}
        <Route path="/works" element={<WorksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
