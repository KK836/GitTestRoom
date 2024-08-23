import React from "react";
import "./AuthorGrid.css";

const AuthorGrid: React.FC = () => {
  // 여기에 작성된 authors 배열을 추가
  const authors = [
    {
      id: 1,
      name: "레바",
      imageUrl: "../assets/reba.jpg",
      link: "https://namu.wiki/w/%EB%A0%88%EB%B0%94",
    },
    {
      id: 2,
      name: "이말년",
      imageUrl: "../assets/Lee.jpg",
      link: "https://namu.wiki/w/%EC%B9%A8%EC%B0%A9%EB%A7%A8",
    },
    {
      id: 3,
      name: "조석",
      imageUrl: "../assets/jo.jpg",
      link: "https://namu.wiki/w/%EC%A1%B0%EC%84%9D(%EB%A7%8C%ED%99%94%EA%B0%80)",
    },
    { id: 4, name: "레바", imageUrl: "../assets/reba.jpg" },
    { id: 5, name: "이말년", imageUrl: "../assets/Lee.jpg" },
    { id: 6, name: "조석", imageUrl: "../assets/jo.jpg" },
    { id: 7, name: "레바", imageUrl: "../assets/reba.jpg" },
    { id: 8, name: "이말년", imageUrl: "../assets/Lee.jpg" },
    { id: 9, name: "조석", imageUrl: "../assets/jo.jpg" },
    { id: 10, name: "레바", imageUrl: "../assets/reba.jpg" },
    { id: 11, name: "이말년", imageUrl: "../assets/Lee.jpg" },
    { id: 12, name: "조석", imageUrl: "../assets/jo.jpg" },
    { id: 13, name: "레바", imageUrl: "../assets/reba.jpg" },
    { id: 14, name: "이말년", imageUrl: "../assets/Lee.jpg" },
    { id: 15, name: "조석", imageUrl: "../assets/jo.jpg" },
  ];

  return (
    <div className="author-grid">
      {authors.map((author) => (
        <div key={author.id} className="author-card">
          <a href={author.link} target="_blank" rel="noopener noreferrer">
            <img
              src={author.imageUrl}
              alt={author.name}
              className="author-image"
            />
          </a>
          <p>{author.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AuthorGrid;
