import styled from "styled-components";

export const Button = ({ onClick, disabled, btnName }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {btnName}
    </StyledButton>
  );
};

// 로그인 버튼
const StyledButton = styled.button`
  width: 100%;
  height: 55px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 16px;
  background-color: #ff7710;
  border-radius: 20px;
  color: #ffffff;
  margin-top: 40px;
  margin-bottom: 16px;
  cursor: pointer; /*커서가 올라가면 포인터로 바뀌게*/

  &:disabled {
    background-color: #d9d9d9;
  }
`;
