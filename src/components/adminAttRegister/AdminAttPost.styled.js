import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 32px;
  flex-grow: 1;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 32px 32px 0px 0px;
  background: #ff7710;
`;

export const HeaderIcon = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
`;

export const InputSection = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 10px 10px 17px;
  box-sizing: border-box;
  /* border: 1px solid blue; */
  gap: 8px;
`;

export const InputSectionGap = styled.div`
  display: flex;
  gap: ${(props) => (props.$gap10 ? "10px" : "7px")};
`;

export const InputTitle = styled.input`
  display: flex;
  align-items: center;
  padding: 7px;
  box-sizing: border-box;
  /* width: 100%; */
  height: 33px;
  flex-grow: 1;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);

  color: #5b5b5b;
  font-size: 14px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};

  &::placeholder {
    color: #999999; /* 원하는 색상으로 변경 */
  }
  &:focus {
    border-color: #5b5b5b; /* 원하는 색상으로 변경 */
    outline: none; /* 기본 outline 제거 */
  }
`;

export const InputDate = styled.input.attrs({ type: "date" })`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 33px;

  border: 1px solid #cccccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;

  color: #999999;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 14px;
`;

export const InputTime = styled.input.attrs({ type: "time" })`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 33px;

  border: 1px solid #cccccc;
  border-radius: 8px;

  color: #999999;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 14px;
`;

export const TextareaBody = styled.textarea`
  display: flex;

  padding: 7px;
  box-sizing: border-box;
  width: 100%;
  flex-grow: 1;
  /* border: 1px solid #cccccc; */
  border-radius: 8px;

  color: #5b5b5b;
  font-size: 14px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};

  &::placeholder {
    color: #999999; /* 원하는 색상으로 변경 */
  }
  &:focus {
    outline: none; /* 기본 outline 제거 */
  }
`;