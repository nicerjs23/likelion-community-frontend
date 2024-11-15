//운영진 출석페이지
import * as S from "./AdminAttPage.styled";
import { Header } from "@components/Header";
import { Dropdown } from "@components/adminAtt/Dropdown";
import adminPen from "@assets/icons/adminPen.svg";
import { AttCard } from "@components/adminAtt/AttCard";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axiosInstance from "@apis/axiosInstance"; // axiosInstance 가져오기
import { useEffect, useState } from "react";

const filterData = {
  data: ["트랙선택", "프론트엔드", "백엔드", "기획/디자인"],
};

export const AdminAttPage = () => {
  const { goTo } = useCustomNavigate();
  const [attendances, setAttendances] = useState([]); // 출석 목록을 담을 상태
  const [error, setError] = useState(null); // 에러 상태

  // 출석 목록 데이터를 가져오는 함수
  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        // API 호출
        const response = await axiosInstance.get("/attendance/main/");
        // 성공적으로 데이터를 받아온 경우 상태에 설정
        setAttendances(response.data);
      } catch (err) {
        // 오류 발생 시 에러 메시지 설정
        setError(
          err.response?.data?.detail ||
            "출석 목록을 불러오는 데 실패했습니다."
        );
      }
    };

    fetchAttendances();
    console.log(attendances);
  }, []); // 컴포넌트가 마운트될 때 한번 실행

  // isOpen 상태를 계산하는 함수 받아온date날짜에 time을기준으로 isopen이1이되고 지각시간이지나면 0이됨
  const calculateIsOpen = (date, time, absentThreshold) => {
    const openTime = new Date(`${date}T${time}`);
    const closeTime = new Date(
      openTime.getTime() + absentThreshold * 60000
    ); // absentThreshold를 분으로 처리
    const currentTime = new Date();

    return currentTime >= openTime && currentTime < closeTime ? 1 : 0;
  };
  return (
    <S.Wrapper>
      <Header title="출석" />
      {/* 요소들 묶어둔 콘텐츠 태그 */}
      <S.Content>
        {/* 액션바들 묶음 */}
        <S.ActionBar>
          <Dropdown props={filterData} />
          <S.WriteBtn onClick={() => goTo("/adminAttRegister")}>
            글쓰기
            <S.AdminPenIcon src={adminPen} alt="penIcon" />
          </S.WriteBtn>
        </S.ActionBar>

        {/* 에러 처리 */}
        {error && <p>{error}</p>}

        {/* 출석 카드 목록 */}
        <S.CardWrapper>
          {attendances.length > 0 ? (
            attendances.map((attendance) => (
              <AttCard
                key={attendance.id} // 고유한 key 값 사용
                isOpen={calculateIsOpen(
                  attendance.date,
                  attendance.time,
                  attendance.absent_threshold
                )}
                onClick={() =>
                  goTo(`/adminAttManage/${attendance.id}`)
                }
                absentThreshold={attendance.absent_threshold}
                date={attendance.date}
                description={attendance.description}
                file={attendance.file}
                lateThreshold={attendance.late_threshold}
                place={attendance.place}
                time={attendance.time}
                title={attendance.title}
                track={attendance.track}
              />
            ))
          ) : (
            <p>출석 목록이 없습니다.</p>
          )}
        </S.CardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
