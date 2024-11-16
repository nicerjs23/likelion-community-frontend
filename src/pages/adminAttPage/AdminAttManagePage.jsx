import * as S from "./AdminAttManagePage.styled";
import { F5Header } from "@components/adminAttManage/F5Header";
import AdminAttInfo from "@components/adminAttManage/AdminAttInfo";
import AttCard from "@components/adminAttManage/AttCard";
import AttCodeTimer from "@components/adminAttManage/AttCodeTimer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";

export const AdminAttManagePage = () => {
  useFetchCsrfToken();
  const { id } = useParams();
  const [attendance, setAttendance] = useState(null);
  const [attendanceStatuses, setAttendanceStatuses] = useState([]);
  const [code, setCode] = useState([]);

  useEffect(() => {
    const fetchAttendanceDetail = async () => {
      try {
        const response = await axiosInstance.get(
          `/attendance/detail/${id}/`
        );
        console.log("API 응답 데이터:", response.data);

        const attendanceData = response.data.attendance;
        setAttendance(attendanceData);
        setAttendanceStatuses(response.data.attendance_statuses);

        if (attendanceData?.auth_code) {
          const codeArray = attendanceData.auth_code
            .split("")
            .map(Number);
          setCode(codeArray);
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
      }
    };

    if (id) fetchAttendanceDetail();
  }, [id]);

  const handleStatusChange = async (index, newStatus) => {
    const updatedStatuses = [...attendanceStatuses];
    const statusId = updatedStatuses[index].id;

    updatedStatuses[index].status = newStatus;
    setAttendanceStatuses(updatedStatuses);

    try {
      const response = await axiosInstance.patch(
        `/attendance/status/${statusId}/update/`,
        { status: newStatus }
      );
      console.log("출석 상태 변경 성공:", response.data);
    } catch (error) {
      console.error("출석 상태 변경 실패:", error);
      alert("출석 상태 변경에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  const startTime = attendance
    ? `${attendance.date} ${attendance.time}`
    : "";

  return (
    <S.Wrapper>
      <F5Header title="출석 관리" />
      <S.Content>
        {attendance && (
          <AdminAttInfo
            id={id} // ID prop 추가
            date={attendance.date}
            time={attendance.time}
            place={attendance.place}
            track={attendance.track}
            title={attendance.title}
            description={attendance.description}
            file={attendance.file}
          />
        )}
        <AttCodeTimer
          code={code}
          startTime={startTime}
          lateTime={attendance?.late_threshold}
          absentTime={attendance?.absent_threshold}
        />
        <S.AttCardWrapper>
          {attendanceStatuses.map((status, index) => (
            <AttCard
              key={index}
              name={status.user_name}
              details={`${status.membership_term}기 ${status.user_track}`}
              status={status.status}
              onStatusChange={(newStatus) =>
                handleStatusChange(index, newStatus)
              }
            />
          ))}
        </S.AttCardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
