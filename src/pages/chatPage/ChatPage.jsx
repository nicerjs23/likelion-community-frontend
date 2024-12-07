import React, { useEffect, useState, useRef } from "react";
import * as S from "./ChatPage.styled";
import { Header } from "@components/Header";
import defaultProfile from "@assets/images/ExImg.svg";
import send from "@assets/icons/send.svg";
import axiosInstance from "@apis/axiosInstance";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";
import fileICon from "@assets/icons/file.svg";
import chatX from "@assets/icons/chatX.svg";
export const ChatPage = () => {
  useFetchCsrfToken();

  const [currentUser, setCurrentUser] = useState({
    id: null,
    username: "",
    nickname: "",
  });
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [participantName, setParticipantName] = useState("");
  const [roomName, setRoomName] = useState("");
  const chatRef = useRef(null);
  const { chatroom_id } = useParams();
  const socketRef = useRef(null);
  const [userLeft, setUserLeft] = useState(false);
  const [participantProfileImage, setParticipantProfileImage] = useState(null);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axiosInstance.get(
          "/friend/api/user/"
        );
        setCurrentUser({
          id: userResponse.data.id,
          username: userResponse.data.username,
          nickname: userResponse.data.nickname,
        });

        const chatResponse = await axiosInstance.get(
          `/friend/chat/${chatroom_id}/`
        );
        setMessages(chatResponse.data.messages);
        setParticipantName(
          chatResponse.data.other_participant.nickname
        );
        setRoomName(chatResponse.data.room_name);

        const otherParticipant = chatResponse.data.participants.find(
          (participant) => participant.id !== userResponse.data.id
        );
        if (otherParticipant) {
          setParticipantName(otherParticipant.nickname);
          // 상대 경로를 절대 경로로 변환
          const absoluteProfileImage = otherParticipant.profile_image
          ? otherParticipant.profile_image.startsWith("http")
            ? otherParticipant.profile_image
            : `https://everion.store${otherParticipant.profile_image}`
          : null;
        setParticipantProfileImage(absoluteProfileImage);
      }
    } catch (error) {
      console.error("데이터 로드 오류:", error);
    }
    };

    fetchData();
  }, [chatroom_id]);

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };
  
  useEffect(() => {
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages]);

  
  useEffect(() => {
    if (!roomName || !currentUser.id) return;
  
    let retryInterval = 1000;
  
    const connectWebSocket = () => {
      socketRef.current = new WebSocket(
        `wss://everion.store/ws/chat/${roomName}/`
      );
  
      socketRef.current.onopen = () => {
        console.log("WebSocket 연결 성공.");
        retryInterval = 1000;
      };
  
      socketRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
  

        if (data.event === "user_left") {
          alertUserLeft(); 
        } else if (data.event === "new_message") {

          setMessages((prevMessages) => {
            const isDuplicate = prevMessages.some(
              (msg) =>
                msg.sender === data.sender &&
                msg.content === data.message &&
                msg.image === data.image_url
            );
            if (isDuplicate) return prevMessages; // 중복이면 상태 변경하지 않음
  
            // 중복이 아니면 새 메시지 추가
            return [
              ...prevMessages,
              {
                sender: data.sender,
                content: data.message,
                image: data.image_url || null,
              },
            ];
          });
        }
      };
  
      socketRef.current.onclose = (event) => {
        console.error("WebSocket 연결 종료:", event.code, event.reason);
        setTimeout(connectWebSocket, retryInterval);
        retryInterval = Math.min(retryInterval * 2, 30000);
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
  

  const alertUserLeft = () => {
    setUserLeft(true);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
  
    try {
      const csrftoken = Cookies.get("csrftoken");
      if (!csrftoken) {
        console.error("CSRF 토큰이 없습니다.");
        throw new Error("CSRF 토큰 누락");
      }
  
      const response = await axiosInstance.post(
        `/friend/chat/${chatroom_id}/`,
        formData,
        {
          headers: {
            "X-CSRFToken": csrftoken,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // 인증 쿠키 포함
        }
      );
  
      return response.data.image_url;
    } catch (error) {
      console.error("이미지 업로드 오류:", error);
      throw error;
    }
  };
  
  const handleSendMessage = async () => {
    if (selectedImage) {
      try {
        // 이미지를 Base64로 변환
        const base64Image = await convertToBase64(selectedImage);
  
        // WebSocket으로 전송할 데이터 생성
        const messageData = {
          message: "",
          username: currentUser.username,
          nickname: currentUser.nickname,
          image: base64Image,
        };
  
        if (
          socketRef.current &&
          socketRef.current.readyState === WebSocket.OPEN
        ) {

          socketRef.current.send(JSON.stringify(messageData));
          setSelectedImage(null); 
        } else {
          console.error("WebSocket 연결이 닫혀 있습니다.");
        }
      } catch (error) {
        console.error("이미지 전송 실패:", error);
      }
    } else if (newMessage.trim()) {
      const messageData = {
        message: newMessage.trim(),
        username: currentUser.username,
        nickname: currentUser.nickname,
        image: null,
      };
  
      if (
        socketRef.current &&
        socketRef.current.readyState === WebSocket.OPEN
      ) {
        socketRef.current.send(JSON.stringify(messageData));
        setNewMessage("");
      } else {
        console.error("WebSocket 연결이 닫혀 있습니다.");
      }
    }
  };
  
  
  // Base64 변환 함수
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  
  
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 지원 가능한 파일 형식 확인
      const validExtensions = [
        "image/png",
        "image/jpeg",
        "image/gif",
      ];
      if (!validExtensions.includes(file.type)) {
        alert("지원하지 않는 이미지 형식입니다.");
        return;
      }

      setSelectedImage(file);
    }
  };

  return (
    <S.Wrapper>
      {userLeft ? (
        <S.PartialAlertOverlay>
            <S.PartialAlertMessage>
            상대방이 채팅방을 나갔습니다. 더 이상 채팅을 할 수 없습니다.
            </S.PartialAlertMessage>
            <S.BackButton onClick={() => window.history.back()}>
            뒤로가기
            </S.BackButton>
        </S.PartialAlertOverlay>
      ) : (
        <>
          {/* 기존 채팅 UI */}
          <Header title={participantName} />
          <S.Chat ref={chatRef}>
            {messages.map((msg, index) =>
              msg.sender === currentUser.id ? (
                <S.RightDiv key={index}>
                  <S.RightContext>
                    {msg.image ? (
                      msg.image.startsWith("data:") ? (
                        // Base64 데이터
                        <img src={msg.image} alt="chat img" />
                      ) : (
                        // 서버 URL
                        <img
                          src={`https://everion.store${msg.image}`}
                          alt="chat img"
                          onLoad={scrollToBottom}
                        />
                      )
                    ) : (
                      msg.content
                    )}
                  </S.RightContext>
                </S.RightDiv>
              ) : (
                <S.LeftDiv key={index}>
                  <S.Profile
                    src={participantProfileImage || defaultProfile}
                    alt={`${participantName}의 프로필`}
                  />
                  <S.LeftContext>
                    {msg.image ? (
                      msg.image.startsWith("data:") ? (
                        <img src={msg.image} alt="chat img" />
                      ) : (
                        <img
                          src={`https://everion.store${msg.image}`}
                          alt="chat img"
                          onLoad={scrollToBottom}
                        />
                      )
                    ) : (
                      msg.content
                    )}
                  </S.LeftContext>
                </S.LeftDiv>
              )
            )}
          </S.Chat>
  
          {/* 이미지 업로드 미리보기 */}
          {selectedImage && (
            <S.PreviewWrapper>
              <S.PreviewImage
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
              />
              <S.RemoveButton onClick={() => setSelectedImage(null)}>
                <img src={chatX} alt="delete icon" />
              </S.RemoveButton>
            </S.PreviewWrapper>
          )}
  
          {/* 메시지 전송 UI */}
          <S.SendWrap>
            <S.Send>
              <S.SendRight>
                <S.FileUploadWrapper>
                  <label htmlFor="image-upload">
                    <img src={fileICon} alt="file icon" />
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    onChange={handleImageChange}
                  />
                </S.FileUploadWrapper>
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
        </>
      )}
    </S.Wrapper>
  );
};

export default ChatPage;
