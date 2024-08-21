import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // 최신 버전의 react-router-dom 사용
import Header from "./components/Header"; // Header 컴포넌트 임포트
import AuthorsPage from "./pages/AuthorsPage"; // AuthorsPage 컴포넌트 임포트
import "./App.css"; // 글로벌 스타일 파일

const App: React.FC = () => {
  return (
    <Router>
      {/* Header는 모든 페이지에서 공통으로 보여지므로 Routes 외부에 위치시킴 */}
      <Header />
      <Routes>
        {/* /authors 경로에 AuthorPage 컴포넌트를 렌더링 */}
        <Route path="/authors" element={<AuthorsPage />} />
        {/* 다른 경로 추가 시 아래에 Route 컴포넌트 추가 */}
      </Routes>
    </Router>
  );
};

export default App;
