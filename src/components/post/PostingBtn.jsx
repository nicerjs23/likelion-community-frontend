import styled from "styled-components";

export const PostingBtn = () => {
  return <Button>완료</Button>;
};

export const Button = styled.button`
  width: 85vw;
  max-width: 465px;
  height: 35px;
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.PretendardBold["font-family"]};

  font-size: 15px;
  background-color: #ff7d2c;

  position: fixed;
  bottom: 30px;
  transform: translateX(-50%);
  left: 50%;
`;
