import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 7.25vh; //헤더 높이만큼 띄우기
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  justify-content: center;
  align-items: center;
`;

//페이지 안쪽 내용 들어가는 부분 320px부분~
export const Content = styled.div`
  /* border: solid 1px green; */

  display: flex;
  flex-direction: column;
  width: 88.89%;
  height: 100vh;
  margin: 0 auto;
  gap: 15px;
  padding-top: 16px;
  box-sizing: border-box;
`;

export const AttCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
