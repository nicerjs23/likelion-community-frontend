import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 40px 20px;
  width: 320px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Message = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;
const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 80px;
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
  width: 80px;
  height: 32px;
  border-radius: 100px;
  cursor: pointer;
  background-color: #ff7710;
  color: #ffffff;
  font-size: 14px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;

const EditDelModal = ({ message, onConfirm, onCancel }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Message>{message}</Message>
        <ButtonGroup>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
        </ButtonGroup>
      </ModalContent>
    </ModalWrapper>
  );
};

export default EditDelModal;
