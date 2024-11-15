//운영진 출석관리 출석상태변경모달
import styled from "styled-components";

const Modal = ({
  isOpen,
  onClose,
  onStatusClick,
  selectedStatus,
  onConfirm,
}) => {
  if (!isOpen) return null;
  const getButtonStyles = (status) => ({
    backgroundColor:
      selectedStatus === status ? getActiveColor(status) : "#efefef",
    color:
      selectedStatus === status
        ? getActiveTextColor(status)
        : "#767676",
  });

  const getActiveColor = (status) => {
    if (status === "출석") return "#A2FF9A";
    if (status === "지각") return "#FFF39A";
    if (status === "결석") return "#FF9A9A";
  };

  const getActiveTextColor = (status) => {
    if (status === "출석") return "#067600";
    if (status === "지각") return "#C07D00";
    if (status === "결석") return "#760400";
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <ModalHeader>
            <TitleText>출석을 변경 하시겠습니까?</TitleText>
            <InfoText>
              <div className="name">이동건</div> |{" "}
              <div className="track">12기 프론트엔드</div>
            </InfoText>
          </ModalHeader>
          <ButtonWrapper>
            <StatusButton
              style={getButtonStyles("출석")}
              onClick={() => onStatusClick("출석")}
            >
              출석
            </StatusButton>
            <StatusButton
              style={getButtonStyles("지각")}
              onClick={() => onStatusClick("지각")}
            >
              지각
            </StatusButton>
            <StatusButton
              style={getButtonStyles("결석")}
              onClick={() => onStatusClick("결석")}
            >
              결석
            </StatusButton>
          </ButtonWrapper>
          <ActionButtons>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
          </ActionButtons>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 320px;
  height: 253px;
  border-radius: 32px;
  box-sizing: border-box;
  padding: 23px 15px 20px;
  background-color: white;
`;
const ModalContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 13px;
`;
const TitleText = styled.div`
  display: flex;
  color: #000000;
  font-size: 18px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;
const InfoText = styled.div`
  display: flex;
  gap: 3px;
  color: #000000;
  font-size: 16px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  .track {
    color: #767676;
    font-size: 14px;
    font-family: ${({ theme }) =>
      theme.fonts.PretendardSemiBold["font-family"]};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 13px;
  margin-bottom: 25px;
`;

const StatusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 80px;
  border-radius: 16px;
  font-size: 20px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};
  cursor: pointer;

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

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 26px;
`;

const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 120px;
  height: 32px;
  border-radius: 100px;
  cursor: pointer;

  background-color: #efefef;
  color: #767676;
  font-size: 14px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;

const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 120px;
  height: 32px;
  border-radius: 100px;
  cursor: pointer;

  background-color: #ff7710;
  color: #ffffff;
  font-size: 14px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;
