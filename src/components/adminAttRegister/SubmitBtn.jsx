//운영진 출석 등록하기 버튼 컴포넌트
import styled from "styled-components";

export const SubmitBtn = ({ isActive, onClick }) => {
  return (
    <Wrapper $isActive={isActive} onClick={onClick}>
      등록하기
    </Wrapper>
  );
};

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 100px;
  background-color: ${({ $isActive }) =>
    $isActive ? "#FF7710" : "#d9d9d9"};
  color: #ffffff;
  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  cursor: ${({ $isActive }) =>
    $isActive ? "pointer" : "not-allowed"};
`;
