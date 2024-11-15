// 운영진 출석 정보 확인카드 컴포넌트
import * as S from "./AdminAttInfo.styled";
import { useState } from "react";
import list from "@assets/icons/list.svg";
import dateIcon from "@assets/icons/date.svg";
import location from "@assets/icons/location.svg";
import image from "@assets/icons/image.svg";
import EditDelModal from "@components/adminAttManage/EditDelModal";
export const AdminAttInfo = ({
  date,
  time,
  place,
  track,
  title,
  description,
  file,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // 파일 이름 추출 함수
  const getFileName = (fileUrl) => {
    return fileUrl ? fileUrl.split("/").pop() : "파일이 없습니다.";
  };

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    openModal("수정하시겠습니까?");
  };

  const handleDelete = () => {
    openModal("삭제하시겠습니까?");
  };
  return (
    <S.Wrapper>
      <S.Top>
        <S.TopImg src={list} />
      </S.Top>
      <S.Mid>
        <S.Gap5>
          <S.Date>
            <div>
              <S.DateImg src={dateIcon} />
              <span>
                {date} {time}~
              </span>
            </div>
            <S.EditDelete>
              <S.EditBtn onClick={handleEdit}>수정</S.EditBtn>|
              <S.DeleteBtn onClick={handleDelete}>삭제</S.DeleteBtn>
            </S.EditDelete>
          </S.Date>
          <S.Location>
            <S.LocationImg src={location} />
            {place}
          </S.Location>
          <S.Title>
            [{track}] {title}
          </S.Title>
        </S.Gap5>
        <S.Detail>{description}</S.Detail>

        {file && (
          <S.FileDiv>
            <a href={file} target="_blank" rel="noopener noreferrer">
              <S.FileName>{getFileName(file)}</S.FileName>
            </a>
            <img src={image} alt="file icon" />
          </S.FileDiv>
        )}
      </S.Mid>
      {isModalOpen && (
        <EditDelModal
          message={modalMessage}
          onConfirm={() => {
            // 확인 버튼 클릭 시 로직 추가
            console.log(`${modalMessage} 확인`);
            closeModal();
          }}
          onCancel={closeModal}
        />
      )}
    </S.Wrapper>
  );
};

export default AdminAttInfo;
