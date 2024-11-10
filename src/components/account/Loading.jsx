import React from "react";
import styled from "styled-components";
import spinner from "@assets/spinner.gif";

export const Loading = () => {
  return (
    <Background>
      <img src={spinner} alt="로딩중" width="200px" />
      <Text>회원인증이 진행 중입니다.</Text>
    </Background>
  );
};

export const Background = styled.div`
  background-color: #000000;
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  color: #fff;
  margin-top: 20px;
`;
