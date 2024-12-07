//아기사자 출석페이지
import * as S from "./LionAttPage.styled";
import { F5Header } from "@components/adminAttManage/F5Header";
import { AttCard } from "@components/adminAtt/AttCard";
import { LionAttCard } from "@components/lionAttPage/LionAttCard";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import axiosInstance from "@apis/axiosInstance";
import { useEffect, useState } from "react";

export const LionAttPage = () => {
  const { goTo } = useCustomNavigate();
  const [attendanceRecords, setAttendanceRecords] = useState([]); // 출석 데이터를 저장하는 상태
  const [userAttendance, setUserAttendance] = useState([]); // 유저 출석 데이터를 저장하는 상태
  const [statusCounts, setStatusCounts] = useState({
    present: 0,
    late: 0,
    absent: 0,
  }); // 상태 카운트를 저장하는 상태
  const [fetchError, setFetchError] = useState(null); // 오류 메시지를 저장하는 상태

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      try {
        const response = await axiosInstance.get(
          "/attendance/myattendance/"
        );
        console.log("전체데이터:", response.data);
        setAttendanceRecords(response.data.all_attendances || []);
        setUserAttendance(response.data.user_attendance || []);
        // 한국어 변수명을 영어로 매핑
        const status = response.data.status_count;
        if (status) {
          setStatusCounts({
            present: status["출석"] || 0, // '출석'을 'present'로 매핑
            late: status["지각"] || 0, // '지각'을 'late'로 매핑
            absent: status["결석"] || 0, // '결석'을 'absent'로 매핑
          });
        } else {
          setStatusCounts({ present: 0, late: 0, absent: 0 });
        }
      } catch (err) {
        setFetchError(
          err.response?.data?.detail || "오류가 발생했습니다."
        );
      }
    };

    fetchAttendanceRecords();
  }, []);
  // userAttendance에서 해당 record의 출석 상태를 찾는 함수
  const getStatusForRecord = (recordId) => {
    const matchedAttendance = userAttendance.find(
      (item) => item.attendance === recordId
    );
    return matchedAttendance ? matchedAttendance.status : null; // 출석 상태 반환
  };

  const calculateIsOpen = (date, time, absentThreshold) => {
    const openTime = new Date(`${date}T${time}`);
    const closeTime = new Date(
      openTime.getTime() + absentThreshold * 60000
    );
    const currentTime = new Date();

    return currentTime >= openTime && currentTime < closeTime ? 1 : 0;
  };

  return (
    <S.Wrapper>
      <F5Header title="출석" />
      <S.Content>
        <S.LionAttScore>
          <S.ScoreContent>
            <S.ScoreText>
              <div>출석</div>
              <div className="score">{statusCounts.present}회</div>
            </S.ScoreText>
            <S.ScoreText>
              <div>지각</div>
              <div className="score">{statusCounts.late}회</div>
            </S.ScoreText>
            <S.ScoreText>
              <div>결석</div>
              <div className="score">{statusCounts.absent}회</div>
            </S.ScoreText>
          </S.ScoreContent>
        </S.LionAttScore>

        <S.CardWrapper>
          {Array.isArray(attendanceRecords) &&
          attendanceRecords.length > 0 ? (
            attendanceRecords.map((record) => {
              const isOpen = calculateIsOpen(
                record.date,
                record.time,
                record.absent_threshold
              );
              const status = getStatusForRecord(record.id); // 출석 상태 가져오기
              return isOpen === 1 ? (
                <AttCard
                  key={record.id}
                  isOpen={isOpen}
                  onClick={() => goTo(`/lionAttInfo/${record.id}`)}
                  absentThreshold={record.absent_threshold}
                  date={record.date}
                  description={record.description}
                  file={record.file}
                  lateThreshold={record.late_threshold}
                  place={record.place}
                  time={record.time}
                  title={record.title}
                  track={record.track}
                />
              ) : (
                <LionAttCard
                  key={record.id}
                  isOpen={isOpen}
                  onClick={() => goTo(`/lionAttInfo/${record.id}`)}
                  date={record.date}
                  place={record.place}
                  time={record.time}
                  title={record.title}
                  track={record.track}
                  status={status} // 출석 상태 전달
                />
              );
            })
          ) : (
            <p>출석 목록이 없습니다.</p>
          )}
        </S.CardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
