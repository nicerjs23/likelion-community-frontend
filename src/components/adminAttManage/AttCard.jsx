import React from "react";
import styled from "styled-components";
import AttStatusModal from "@components/adminAttManage/AttStatusModal";
import { useState } from "react";

const AttCard = ({ name, details, status, onStatusChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(status);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 모달에서 상태를 변경 (확인 버튼 누르기 전)
  const handleStatusClick = (newStatus) => {
    setSelectedStatus(newStatus);
  };

  // 확인 버튼 클릭 시 상태를 상위 컴포넌트에 전달
  const handleConfirm = () => {
    onStatusChange(selectedStatus); // 상위 컴포넌트에 변경 사항 전달
    closeModal(); // 모달 닫기
  };

  return (
    <>
      <CardWrapper>
        <Content>
          <Profile>
            <ProfileImg />
            <Info>
              <Name>{name}</Name>|<Details>{details}</Details>
            </Info>
          </Profile>
          <Status $status={status} onClick={openModal}>
            {status}
          </Status>
        </Content>
      </CardWrapper>
      <AttStatusModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onStatusClick={handleStatusClick}
        selectedStatus={selectedStatus}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default AttCard;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-radius: 32px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  display: flex;
  width: 93.75%;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  font-size: 16px;
  color: #111111;
`;

const Name = styled.div`
  display: flex;
  margin-right: 3px;
  font-size: 14px;
  font-weight: bold;
  color: #111111;
  font-size: 16px;
`;

const Details = styled.div`
  display: flex;
  margin-left: 3px;
  font-size: 14px;
  color: #767676;
`;

const Status = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 37px;
  border-radius: 32px;
  font-size: 15px;
  background-color: ${({ $status }) =>
    $status === "출석"
      ? "#A2FF9A"
      : $status === "지각"
      ? "#FFF39A"
      : "#FF9A9A"};
  color: ${({ $status }) =>
    $status === "출석"
      ? "#067600"
      : $status === "지각"
      ? "#C07D00"
      : "#760400"};
`;
