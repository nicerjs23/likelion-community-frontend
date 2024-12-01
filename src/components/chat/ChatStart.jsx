// username을 클릭하면 채팅방으로 이동
import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";
import styled from "styled-components";

export const ChatStart = ({ username, nickname }) => {
  const navigate = useNavigate();

  const handleChat = async () => {
    try {
      const response = await axiosInstance.post(`/friend/chat/start/${username}/`);
      const { chatroom_id } = response.data;

      navigate(`/chat/${chatroom_id}`);
    } catch (error) {
      console.error("채팅 시작 실패:", error);
      alert("채팅에 실패했습니다. 다시 시도해주세요.")
    }
  };

  return (
    <Btn onClick={handleChat}>
      {nickname}
    </Btn>
  );
};

export const Btn = styled.button`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`