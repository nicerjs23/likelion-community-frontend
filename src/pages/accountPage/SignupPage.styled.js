import styled from "styled-components";

// 전체
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentWrap = styled.div`
  margin-top: 90px;
  width: 85vw;
  max-width: 450px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  width: 100%;
  div {
    width: 80%;

    div {
      width: 100%;
    }
  }
`;

export const CheckButton = styled.button`
  align-items: end;
  text-align: center;
  height: 60px;
  width: 80px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #cccccc;
  }
`;
