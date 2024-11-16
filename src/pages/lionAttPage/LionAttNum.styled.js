import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5.56vw;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  margin-top: 7.25vh;
`;

export const Info = styled.div`
  font-size: 18px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  margin-top: 47px;
  color: ${({ att }) =>
    att === "success"
      ? "#0074DA"
      : att === "fail"
      ? "#E70000"
      : "0074DA"};
`;

export const Nums = styled.div`
  display: flex;
  gap: 10px;
  margin: 34px 0;
`;

export const Num = styled.input`
  border: 2px solid #ff7710;
  border-radius: 20px;
  background-color: #fff;
  width: 60px;
  height: 60px;
  font-size: 22px;
  font-weight: 700;
  padding: 21px;
  text-align: center;

  &:focus {
    outline: none;
  }
`;
export const Button = styled.button`
  width: 85px;
  height: 38px;
  font-weight: 600;
  line-height: 22px;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid
    ${({ complete, buttonText }) =>
      buttonText === "돌아가기"
        ? "#0074DA"
        : complete
        ? "#FF7710"
        : "#9C9CA1"}; // '돌아가기'는 파란색, '출석하기'는 회색 또는 주황색
  background-color: ${({ complete, buttonText }) =>
    buttonText === "돌아가기"
      ? "#0074DA"
      : complete
      ? "#FF7710"
      : "#fff"}; // '돌아가기'는 파란색, '출석하기'는 회색 또는 주황색
  color: ${({ complete, buttonText }) =>
    buttonText === "돌아가기" || complete
      ? "#fff"
      : "#9C9CA1"}; // 텍스트 색상
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.12);
  cursor: ${({ complete }) => (complete ? "pointer" : "default")};
`;

export const BoxInput = styled.input`
  width: 60px;
  height: 60px;
  border: 2px solid #ff7710;
  border-radius: 20px;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) =>
    props.$isFilled ? "#ff7710" : "#ffffff"};
  font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
  font-size: 30px;
  transition: border-color 0.3s;
  &:focus {
    outline: none;
  }
`;
