import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Top = styled.div`
  border-radius: 32px 32px 0px 0px;
  background: #ff7710;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

export const TopImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const Mid = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 0 0 32px 32px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
`;

export const Gap5 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Location = styled.div`
  color: #767676;
  font-size: 14px;
  display: flex;
  align-items: center;

  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;

export const LocationImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Date = styled.div`
  color: #767676;
  font-size: 14px;

  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  display: flex;
`;

export const DateImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Title = styled.div`
  display: flex;
  color: #111111;
  font-size: 16px;

  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;

export const Detail = styled.div`
  display: flex;
  width: 100%;
  word-wrap: break-word; /* 자동 줄바꿈 */
  word-break: break-all; /* 긴 단어가 넘어갈 때 줄바꿈 */
  white-space: normal; /* 기본 줄바꿈을 활성화 */
  font-size: 14px;
  margin-top: 9px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
  color: #111111;
`;

export const FileDiv = styled.div`
  border-radius: 32px;
  background: rgba(247, 148, 30, 0.25);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  width: 100%;
  margin-top: 15px;
`;

export const FileName = styled.div`
  color: #999;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;
