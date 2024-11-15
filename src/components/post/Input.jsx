// 댓글 작성 input
import styled from "styled-components";
import check from "@assets/icons/check.svg";
import comment from "@assets/icons/comment.svg";

export const Input = () => {
  return (
    <WriteWrap>
      <Check>
        <CheckBox type="checkbox"></CheckBox>
        <CheckLabel htmlFor="check">익명</CheckLabel>
      </Check>
      <Write placeholder="댓글을 입력해주세요."></Write>
      <WriteBtn></WriteBtn>
    </WriteWrap>
  );
};

export const WriteWrap = styled.div`
  position: fixed;
  bottom: 3vh;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88.89%;
  max-width: 480px;
  height: 35px;
  border-radius: 4px;
  background-color: #e7e4e4;
  padding: 10px;
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

export const Write = styled.input`
  outline: none;
  font-family: ${({ theme }) => theme.fonts.PretendardSemiBold["font-family"]};
  font-size: 13px;
  margin-left: 10px;
  flex: 1;
  background-color: inherit;
  &::placeholder {
    color: #ccc9c9;
  }
`;

export const WriteBtn = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${comment});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  background-color: transparent;
`;
