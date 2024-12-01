import React, { useEffect, useState } from "react";
import * as S from "./ChatListPage.styled";
import { MainHeader } from "@components/MainHeader";
import { ChatMember } from "@components/chat/ChatMember";
import { Footer } from "@components/Footer";
import { Link } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";
import defaultProfile from "@assets/images/ExImg.svg";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";

export const ChatListPage = () => {
  useFetchCsrfToken();
  
  const [chatRooms, setChatRooms] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null); // 로그인한 사용자 ID

  // 현재 사용자 정보 가져오기
  const fetchCurrentUser = async () => {
    try {
      const response = await axiosInstance.get("friend/api/user/"); // 사용자 정보 요청
      if (response.status === 200) {
        setCurrentUserId(response.data.id); // 로그인한 사용자 ID 설정
        console.log("Current User ID:", response.data.id); // 디버깅용 출력
      }
    } catch (error) {
      console.error(
        "사용자 정보를 가져오는 중 오류가 발생했습니다:",
        error
      );
    }
  };

  // 채팅방 목록 가져오기
  const fetchChatRooms = async () => {
    try {
      const response = await axiosInstance.get("/friend/chat/");
      if (response.status === 200) {
        setChatRooms(response.data); // 채팅방 목록 상태에 저장
        console.log("Chat Rooms:", response.data); // 디버깅용 출력
      }
    } catch (error) {
      console.error(
        "채팅방 목록을 불러오는 중 오류가 발생했습니다:",
        error
      );
    }
  };

    // 채팅방 나가기
    const leaveChatRoom = async (roomId) => {
      try {
        const response = await axiosInstance.post(
          `/friend/chatrooms/${roomId}/delete/`,
          {},
          {
            headers: {
              "X-CSRFToken": axiosInstance.defaults.headers.common["X-CSRFToken"],
            },
            withCredentials: true,
          }
        );
        console.log("채팅방 나가기 성공:", response.data);
      } catch (error) {
        console.error("채팅방 나가기 중 오류가 발생했습니다:", error);
      }
    };
    
    
    

  useEffect(() => {
    fetchCurrentUser(); // 현재 사용자 정보 가져오기
    fetchChatRooms(); // 채팅방 목록 가져오기
  }, []);

  return (
    <S.Wrapper>
      <MainHeader title="EVERION" />
      <S.Members>
        {chatRooms.length > 0 ? (
          chatRooms.map((room) => {
            // 현재 사용자와 다른 참가자 찾기
            const otherParticipant = room.participants.find(
              (participant) => participant.id !== currentUserId // 현재 사용자 ID와 다른 참가자 찾기
            );

            // 상대방의 프로필 이미지 설정
            const profileImage =
              otherParticipant?.profile_image || defaultProfile;

            // 최신 메시지 설정
            const latestMessage =
              room.latest_message && room.latest_message.is_image
                ? "(이미지 파일)" // 이미지 메시지
                : room.latest_message && room.latest_message.content
                ? room.latest_message.content // 텍스트 메시지
                : "메시지가 없습니다."; // 메시지가 없을 경우
            return (
              <S.ChatRoomContainer key={room.id}>
                <Link to={`/chat/${room.id}`} style={{ maxWidth: 'calc(100% - 60px)' }}>
                  <ChatMember
                    name={otherParticipant?.nickname || "알 수 없음"}
                    context={latestMessage}
                    img={profileImage}
                  />
                </Link>
                <S.LeaveButton onClick={() => leaveChatRoom(room.id)}>
                  나가기
                </S.LeaveButton>
              </S.ChatRoomContainer>
            );
          })
        ) : (
          <p>참여 중인 채팅방이 없습니다.</p>
        )}
      </S.Members>
      <Footer />
    </S.Wrapper>
  );
};

export default ChatListPage;
