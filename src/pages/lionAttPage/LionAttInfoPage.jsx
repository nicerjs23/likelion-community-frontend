// 아기사자 출석 정보 확인 페이지
import { useState, useEffect } from "react";
import { Header } from "@components/Header";
import * as S from "./LionAttInfoPage.styled";
import LionAttInfo from "@components/lionAttPage/LionAttInfo";
import LionAttTimer from "@components/lionAttPage/LionAttTimer";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { useParams } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";

export const LionAttInfoPage = () => {
  useFetchCsrfToken();

  const { id } = useParams();
  const { goToWithId } = useCustomNavigate();
  const [infoData, setInfoData] = useState(null);
  const [status, setStatus] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axiosInstance.get(
          "/attendance/myattendance/"
        );
        const allAttendances = response.data.all_attendances || [];
        const userAttendances = response.data.user_attendance || [];

        // allAttendances를 date와 time 기준으로 내림차순 정렬
        const sortedAttendances = allAttendances.sort((a, b) => {
          const dateTimeA = new Date(`${a.date}T${a.time}`);
          const dateTimeB = new Date(`${b.date}T${b.time}`);
          return dateTimeB - dateTimeA; // 내림차순 정렬
        });

        // sortedAttendances에서 attendance 찾기
        const attendance = sortedAttendances.find(
          (item) => item.id === parseInt(id, 10)
        );

        if (attendance) {
          setInfoData(attendance);
          const userAttendance = userAttendances.find(
            (item) => item.attendance === attendance.id
          );
          setStatus(userAttendance ? userAttendance.status : "");
        }
        console.log("정렬된 출석 데이터:", sortedAttendances);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchAttendanceData();
  }, [id]);

  if (!infoData) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  return (
    <S.Wrapper>
      <Header title="출석 정보" />
      <S.Content>
        <LionAttInfo
          date={infoData.date}
          time={infoData.time}
          place={infoData.place || "장소 정보 없음"}
          track={infoData.track}
          title={infoData.title}
          description={infoData.description}
          file={infoData.file}
        />
        <S.AttScore>
          <S.AttScoreTitle>
            벌점이 15점 이상이거나 무단결석이 3회 이상일 경우
            제명됩니다.
          </S.AttScoreTitle>
          <S.AttScoreBody>
            <S.AttBox
              $bgColor={
                status === "출석"
                  ? "rgba(162, 255, 154, 0.50)"
                  : "none"
              }
              $fontColor={status === "출석" ? "#51804D" : "#000000"}
            >
              <S.AttBoxText
                $textColor={status === "출석" ? "#8CBB88" : "#767676"}
              >
                출석
              </S.AttBoxText>
              3회
            </S.AttBox>

            <S.AttBox
              $bgColor={
                status === "지각"
                  ? "rgba(255, 243, 154, 0.50)"
                  : "none"
              }
              $fontColor={status === "지각" ? "#80794D" : "#000000"}
            >
              <S.AttBoxText
                $textColor={status === "지각" ? "#BBB488" : "#767676"}
              >
                지각
              </S.AttBoxText>
              2회
            </S.AttBox>

            <S.AttBox
              $bgColor={
                status === "결석"
                  ? "rgba(255, 154, 154, 0.50)"
                  : "none"
              }
              $fontColor={status === "결석" ? "#804D4D" : "#000000"}
            >
              <S.AttBoxText
                $textColor={status === "결석" ? "#BB8888" : "#767676"}
              >
                결석
              </S.AttBoxText>
              1회
            </S.AttBox>
          </S.AttScoreBody>
        </S.AttScore>
        <LionAttTimer
          sessionDate={infoData.date}
          sessionTime={infoData.time}
          lateTime={infoData?.late_threshold}
          absentTime={infoData?.absent_threshold}
          setIsTimerActive={setIsTimerActive}
        />
        {isTimerActive ? (
          <S.AttSubmitBtn
            onClick={() => goToWithId("/lionAttNum", id)}
          >
            출석하러 가기
          </S.AttSubmitBtn>
        ) : (
          <S.AttSubmitBtn disabled>
            출석 시간이 아닙니다
          </S.AttSubmitBtn>
        )}
      </S.Content>
    </S.Wrapper>
  );
};
export default LionAttInfoPage;
