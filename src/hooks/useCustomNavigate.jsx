import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };
  const goBack = () => {
    nav(-1); //뒤로가기, +1은 앞으로가기
  };

  return { goTo, goBack };
};

/* 훅 사용법! 참고하세요~
import React from "react";
import { useCustomNavigate } from "./hooks/useCustomNavigate";

const ExampleComponent = () => {
  const { goTo, goBack } = useCustomNavigate();

  return (
    <div>
      <button onClick={() => goTo("/target-path")}>Go to Target Page</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default ExampleComponent;
*/
