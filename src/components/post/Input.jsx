// 댓글 작성 input
import styled from "styled-components";
import check from "@assets/icons/check.svg";
import comment from "@assets/icons/comment.svg";
import { useState } from "react";
import axiosInstance from "@apis/axiosInstance";

export const Input = ({ postId, onAddComment }) => {

  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    setSubmit(true);
    try {
      const requestBody = {
        content: content.trim(),
        anonymous: anonymous,
        board: postId,
      };

     
      const response = await axiosInstance.post(
        "/post/maincomment/",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json", // FormData 전송 시 헤더 설정
          },
        }
      );
      console.log("댓글 작성 성공:", response.data);

      if (onAddComment) {
        onAddComment(response.data);
      }

      // 입력 필드 초기화
      setContent("");
      setAnonymous(false);
    } catch (error) {
      console.error("댓글 작성 실패:", error);
      alert("댓글 작성에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setSubmit(false);
    }
  };

  return (
    <WriteWrap>
      <Check>
        <CheckBox 
          type="checkbox"
          id="check"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />
        <CheckLabel htmlFor="check">익명</CheckLabel>
      </Check>
      <Write
        placeholder="댓글을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <WriteBtn onClick={handleSubmit} disabled={submit}></WriteBtn>
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
