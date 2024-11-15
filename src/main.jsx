import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

console.log("VITE_BASE_URL:", import.meta.env.VITE_BASE_URL); // 환경 변수 출력

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
