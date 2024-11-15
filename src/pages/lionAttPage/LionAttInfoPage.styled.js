import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  justify-content: center;
  align-items: center;
  margin-top: 7.25vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 88.89%;
  height: calc(90vh - 7.25vh);
  overflow-y: auto;
  margin-top: 15px;
  gap: 20px;
`;

export const AttScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 22px 35px;
  width: 100%;
  height: 190px;
  border-radius: 32px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
`;

export const AttScoreTitle = styled.div`
  display: flex;

  width: 100%;

  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;

export const AttScoreBody = styled.div`
  display: flex;
  gap: 11px;
  justify-content: center;
`;

export const AttBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 90px;
  height: 90px;
  border-radius: 32px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
  font-size: 22px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;

export const AttBoxText = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.textColor};
  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;

export const AttSubmitBtn = styled.button`
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 32px;

  width: 100%;
  min-height: 56px;

  background-color: #ff7710;
  color: #ffffff;
  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;
