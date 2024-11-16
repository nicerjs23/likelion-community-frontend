import React, { useEffect, useState } from 'react';
import * as S from './ChatListPage.styled';
import { MainHeader } from '@components/MainHeader';
import { ChatMember } from '@components/chat/ChatMember';
import { Footer } from '@components/Footer';
import { Link } from 'react-router-dom';
import axiosInstance from '@apis/axiosInstance';
import thumbnail from '/thumbnail.png';

export const ChatListPage = () => {
  const [chatRooms, setChatRooms] = useState([]);

  // 채팅방 목록 가져오기
  const fetchChatRooms = async () => {
    try {
      const response = await axiosInstance.get('/friend/chat/');
      if (response.status === 200) {
        setChatRooms(response.data);  // 채팅방 목록 상태에 저장
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("인증이 필요합니다.");
      } else {
        console.error("채팅방 목록을 불러오는 중 오류가 발생했습니다:", error);
      }
    }
  };

  useEffect(() => {
    fetchChatRooms();  // 컴포넌트가 마운트될 때 채팅방 목록 가져오기
  }, []);

  return (
    <S.Wrapper>
      <MainHeader title="EVERION"/>
      <S.Members>
        {chatRooms.length > 0 ? (
          chatRooms.map((room) => (
            <Link to={`/chat/${room.id}`} key={room.id}>
            <ChatMember 
                name={room.name} 
                context={room.messages[0] ? room.messages[0].content : "메시지가 없습니다."} 
                img={room.messages[0]?.image || thumbnail}
            />
            </Link>
          ))
        ) : (
          <p>참여 중인 채팅방이 없습니다.</p>
        )}
      </S.Members>
      <Footer />
    </S.Wrapper>
  );
};

export default ChatListPage;
