import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // App.tsx 파일을 불러옴
import "./index.css"; // 글로벌 스타일 파일 불러옴

// root 엘리먼트를 찾고, 해당 엘리먼트에 React 애플리케이션을 렌더링
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
