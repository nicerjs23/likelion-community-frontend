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
  display: flex;
  flex-direction: column;
  overflow: auto;
  -ms-overflow-style: none; /* IE 및 Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-top: 10px;
  margin-left: 20px;
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
