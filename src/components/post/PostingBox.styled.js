import styled from "styled-components";
import check from "@assets/icons/check.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12));
`;

export const Title = styled.input`
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 15px;
  height: 50px;
  outline: none;
  border-bottom: 1.5px solid #ccc9c9;
`;

export const ContentWrapper = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.textarea`
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 12px;
  outline: none;
  flex: 1;
  vertical-align: top;
  margin: 10px 0;
  resize: none;
`;

export const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1.5px solid #767676;
  border-radius: 4px;
  &:checked {
    background-color: #ff7d2c;
    border-color: #ff7d2c;
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }

  &:checked + label {
    color: #ff7d2c;
  }
`;

export const CheckLabel = styled.label`
  margin-left: 4px;
  font-family: ${({ theme }) => theme.fonts.PretendardMedium["font-family"]};
  font-size: 13px;
  color: #767676;
`;

export const InputImg = styled.label`
  cursor: pointer;
  display: flex;
  width: 55px;
  height: 60px;
  justify-items: center;
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
`;

export const Input = styled.input`
  display: none;
`;

// 이미지 미리보기
export const ImageWrapper = styled.div`
  display: flex;
`;

export const PreviewsWrapper = styled.div`
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ $isSingle }) =>
    $isSingle ? `justify-content: center;` /* 이미지가 한 장일 때 가운데 정렬 */ : `overflow-x: scroll;`} /* 여러 장일 때 스크롤 */  gap: 10px;
`;

export const ImagePreview = styled.img`
  width: 75%; /* 원하는 미리보기 이미지 크기로 조절 */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.div`
  width: 85%;
`;
