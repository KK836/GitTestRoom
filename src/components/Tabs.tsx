// src/components/Tabs.tsx
import React, { useState } from "react";
import "./Tabs.css";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("글작가");

  return (
    <div className="tabs">
      <button
        className={activeTab === "글작가" ? "active" : ""}
        onClick={() => setActiveTab("글작가")}
      >
        글작가
      </button>
      <button
        className={activeTab === "그림작가" ? "active" : ""}
        onClick={() => setActiveTab("그림작가")}
      >
        그림작가
      </button>
      <button
        className={activeTab === "연출/감독" ? "active" : ""}
        onClick={() => setActiveTab("연출/감독")}
      >
        연출/감독
      </button>
    </div>
  );
};

export default Tabs;
