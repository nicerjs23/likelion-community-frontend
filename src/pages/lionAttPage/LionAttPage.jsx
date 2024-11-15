//아기사자 출석페이지
//운영진 출석페이지
import * as S from "./LionAttPage.styled";
import { Header } from "@components/Header";
import { Dropdown } from "@components/adminAtt/Dropdown";
import adminPen from "@assets/icons/adminPen.svg";
import { AttCard } from "@components/adminAtt/AttCard";
import { LionAttCard } from "@components/lionAttPage/LionAttcard";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axiosInstance from "@apis/axiosInstance"; // axiosInstance 가져오기
import { useEffect, useState } from "react";

export const LionAttPage = () => {
  const { goTo } = useCustomNavigate();
  const [attendances, setAttendances] = useState([]);
  const [error, setError] = useState(null);

  // 출석 목록 데이터를 가져오는 함수
  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const response = await axiosInstance.get("/attendance/main/");
        setAttendances(response.data); // 성공적으로 데이터를 받아온 경우 상태에 설정
      } catch (err) {
        setError(
          err.response?.data?.detail || "오류가 발생했습니다."
        );
      }
    };

    fetchAttendances();
  }, []);
  console.log(attendances);
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
          <LionAttCard
            isOpen="0"
            onClick
            date="2024-11-15"
            place="신공"
            time="16:30"
            title="제목테스트제목테스트제목테스트제목테스트"
            track="프론트"
            status="출석"
          />
          <LionAttCard
            isOpen="0"
            onClick
            date="2024-11-15"
            place="신공"
            time="16:30"
            title="제목테스트제목테스트제목테스트제목테스트"
            track="프론트"
            status="지각"
          />
          <LionAttCard
            isOpen="0"
            onClick
            date="2024-11-15"
            place="신공"
            time="16:30"
            title="제목테스트제목테스트제목테스트제목테스트"
            track="프론트"
            status="결석"
          />
        </S.CardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
