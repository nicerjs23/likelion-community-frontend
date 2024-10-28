import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/global";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
function App() {
  //배포시 100vh인데 스크롤생기는문제 해결
  useEffect(() => {
    // 실제 화면 높이 기반으로 --vh 값 설정
    const setScreenSize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setScreenSize(); // 초기 실행
    window.addEventListener("resize", setScreenSize); // 화면 크기 변경 시 실행

    return () => {
      window.removeEventListener("resize", setScreenSize); // cleanup
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
