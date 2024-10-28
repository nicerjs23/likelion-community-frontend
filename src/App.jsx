import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/global";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh(); // 초기 설정
    window.addEventListener("resize", setVh); // 화면 크기 변경 시 업데이트

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
