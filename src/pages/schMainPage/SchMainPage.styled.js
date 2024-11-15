import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 88.89%;
  margin: 0 auto;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7.25vh 0 22px 0;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: #fff;
  width: 50%;
  height: 109px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`;

export const Boards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 100px;
`;
