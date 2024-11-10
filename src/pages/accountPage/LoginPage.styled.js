import styled from "styled-components";

// 전체
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// 아이디 ~ 회원가입까지
export const ContentWrap = styled.div`
  margin-top: 174px;
  width: 85vw;
  max-width: 450px;
  height: 368px;
  display: flex;
  flex-direction: column;
`;

// input 이름 + input 입력 박스 묶음
export const InputWrapper = styled.div``;

// input 박스 이름
export const InputTitle = styled.label`
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  margin-left: 10px;
`;

// input 입력하는 박스
export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  padding: 20px;
  margin: 5px 0 20px 0;
  background-color: #fff;

  &:focus-within {
    background-color: #f2e0ca;
    border: 3px solid #f7941e;
  }
`;

// input
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  margin-left: 8px;

  &::placeholder {
    color: #a9a9a9;
  }

  &:focus-within {
    background-color: #f2e0ca;
  }
`;

export const Toggle = styled.div``;

// 로그인 오류 메세지
export const ErrorMessage = styled.p`
  color: red;
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 16px;
  text-align: center;
`;

export const Signup = styled.div`
  text-align: center;
  color: #a9a9a9;
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-weight: 500;
  font-size: 16px;

  .text {
    margin-right: 5px;
  }

  // 회원가입 화면으로 이동
  .underline {
    color: #f7941e;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
