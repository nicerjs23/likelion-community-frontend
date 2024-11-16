import React, { useEffect, useState, useRef } from 'react';
import * as S from './ChatPage.styled';
import { Header } from '@components/Header';
import logo from '/thumbnail.png';
import send from '@assets/icons/send.svg';
import axiosInstance from '@apis/axiosInstance';
import { useParams } from 'react-router-dom';
import Cookies from "js-cookie";

export const ChatPage = () => {
    const [currentUser, setCurrentUser] = useState({ id: null, username: "", nickname: "" });
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [participantName, setParticipantName] = useState("");
    const [roomName, setRoomName] = useState("");
    const chatRef = useRef(null);
    const { chatroom_id } = useParams();
    const socketRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axiosInstance.get("/friend/api/user/");
                setCurrentUser({
                    id: userResponse.data.id,
                    username: userResponse.data.username,
                    nickname: userResponse.data.nickname,
                });
    
                const chatResponse = await axiosInstance.get(`/friend/chat/${chatroom_id}/`);
                setMessages(chatResponse.data.messages);
                setParticipantName(chatResponse.data.other_participant.nickname);
                setRoomName(chatResponse.data.room_name);
            } catch (error) {
                console.error("데이터 로드 오류:", error);
            }
        };
    
        fetchData();
    }, [chatroom_id]);
    

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axiosInstance.get("/friend/api/user/");
                setCurrentUser({
                    id: response.data.id,  // 사용자 ID 가져오기
                    username: response.data.username,
                    nickname: response.data.nickname
                });
            } catch (error) {
                console.error("현재 사용자 정보를 불러오는 중 오류 발생:", error);
            }
        };

        fetchCurrentUser();
    }, []);

    useEffect(() => {
        if (!roomName || !currentUser.id) return;
    
        let retryInterval = 1000; // 재연결 간격 (1초부터 시작)
    
        const connectWebSocket = () => {
            socketRef.current = new WebSocket(`wss://everion.store/ws/chat/${roomName}/`);
    
            socketRef.current.onopen = () => {
                console.log("WebSocket 연결 성공.");
                retryInterval = 1000; // 재연결 간격 초기화
            };
    
            socketRef.current.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.message) {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { sender: data.sender, content: data.message, image: data.image || null }
                    ]);
                }
            };
    
            socketRef.current.onclose = (event) => {
                console.error("WebSocket 연결 종료:", event.code, event.reason);
                // 연결 종료 시 재연결 시도
                setTimeout(connectWebSocket, retryInterval);
                retryInterval = Math.min(retryInterval * 2, 30000); // 점진적으로 간격 증가, 최대 30초
            };
    
            socketRef.current.onerror = (error) => {
                console.error("WebSocket 오류 발생:", error);
            };
        };
    
        connectWebSocket();
    
        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, [roomName, currentUser.id]);
    // currentUser.id가 변경될 때마다 다시 실행되도록
    

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim() || selectedImage) {
            const messageData = {
                message: newMessage,
                username: currentUser.username,
                nickname: currentUser.nickname,
            };
    
            if (selectedImage) {
                const formData = new FormData();
                formData.append("image", selectedImage);
                formData.append("content", newMessage);
    
                const csrftoken = Cookies.get("csrftoken");
                axiosInstance.post(`/friend/chat/${chatroom_id}/`, formData, {
                    headers: {
                        "X-CSRFToken": csrftoken,
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                })
                .then(response => {
                    setMessages(prevMessages => [...prevMessages, response.data]);
                    setSelectedImage(null);
                    setNewMessage("");
                })
                .catch(error => {
                    console.error("이미지 전송 오류:", error);
                });
            } else {
                if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
                    socketRef.current.send(JSON.stringify(messageData));
                    setNewMessage("");
                } else {
                    console.error("WebSocket 연결이 닫혀 있습니다. 메시지를 전송할 수 없습니다.");
                }
            }
        }
    };
    

    return (
        <S.Wrapper>
            <Header title={participantName} />
            <S.Chat ref={chatRef}>
            {
                messages.map((msg, index) => (
                    msg.sender === currentUser.id ? (
                        <S.RightDiv key={index}>
                            <S.RightContext>
                                {msg.image ? <img src={msg.image} alt="chat img" /> : msg.content}
                            </S.RightContext>
                        </S.RightDiv>
                    ) : (
                        <S.LeftDiv key={index}>
                            <S.Profile src={logo} />
                            <S.LeftContext>
                                {msg.image ? <img src={msg.image} alt="chat img" /> : msg.content}
                            </S.LeftContext>
                        </S.LeftDiv>
                    )
                ))
            }

            </S.Chat>



            <S.SendWrap>
                <S.Send>
                    <S.SendRight>
                        <S.TextInput
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="메시지를 입력하세요"
                        />
                    </S.SendRight>
                    <S.Btn onClick={handleSendMessage}>
                        <img src={send} alt="send icon" />
                    </S.Btn>
                </S.Send>
            </S.SendWrap>
        </S.Wrapper>
    );
};

export default ChatPage;

