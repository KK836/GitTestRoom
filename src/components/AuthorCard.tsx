// src/components/AuthorCard.tsx
import React from "react";

interface AuthorProps {
  id: number;
  name: string;
  profileImage: string;
  bio: string;
  works: string[];
}

const AuthorCard: React.FC<AuthorProps> = ({
  name,
  profileImage,
  bio,
  works,
}) => {
  return (
    <div className="author-card">
      <img
        src={profileImage}
        alt={`${name}의 프로필`}
        className="profile-image"
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>작품 목록:</h3>
      <ul>
        {works.map((work, index) => (
          <li key={index}>{work}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorCard;
