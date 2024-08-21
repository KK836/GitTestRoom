// src/components/AuthorGrid.tsx
import React from "react";
import "./AuthorGrid.css"; // 스타일 파일을 추가로 만드실 경우에 필요합니다.

const authors = [
  // 임시 데이터 예시
  { id: 1, name: "작가 1", image: "/images/author1.jpg" },
  { id: 2, name: "작가 2", image: "/images/author2.jpg" },
  // 더 많은 작가 추가
];

const AuthorGrid: React.FC = () => {
  return (
    <div className="author-grid">
      {authors.map((author) => (
        <div key={author.id} className="author-card">
          <img src={author.image} alt={author.name} />
          <h3>{author.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default AuthorGrid;
