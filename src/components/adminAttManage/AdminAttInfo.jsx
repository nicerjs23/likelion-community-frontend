import * as S from "./AdminAttInfo.styled";
import { useState } from "react";
import list from "@assets/icons/list.svg";
import dateIcon from "@assets/icons/date.svg";
import location from "@assets/icons/location.svg";
import image from "@assets/icons/image.svg";
import EditDelModal from "@components/adminAttManage/EditDelModal";
import axiosInstance from "@apis/axiosInstance";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

export const AdminAttInfo = ({
  date,
  time,
  place,
  track,
  title,
  description,
  file,
  id, // 추가: 삭제할 출석 정보의 ID
}) => {
  const { goTo } = useCustomNavigate();
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

  const handleDelete = async () => {
    try {
      // 삭제 API 요청
      const response = await axiosInstance.delete(
        `/attendance/set/${id}/`
      );
      console.log("삭제 성공:", response.data);

      // 삭제 후 페이지 이동
      goTo("/adminAtt");
    } catch (error) {
      console.error("삭제 실패:", error);
      alert("삭제에 실패했습니다. 다시 시도해 주세요.");
    }
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
              <S.DeleteBtn
                onClick={() => openModal("삭제하시겠습니까?")}
              >
                삭제
              </S.DeleteBtn>
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

        {/* 파일이 없어도 FileDiv 출력 */}
        <S.FileDiv>
          <a
            href={file || "#"}
            target={file ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <S.FileName>{getFileName(file)}</S.FileName>
          </a>
          <img src={image} alt="file icon" />
        </S.FileDiv>
      </S.Mid>
      {isModalOpen && (
        <EditDelModal
          message={modalMessage}
          onConfirm={handleDelete} // 확인 버튼 클릭 시 삭제 처리
          onCancel={closeModal}
        />
      )}
    </S.Wrapper>
  );
};

export default AdminAttInfo;
