import * as S from "./AdminAttManagePage.styled";
import { F5Header } from "@components/adminAttManage/F5Header";
import AdminAttInfo from "@components/adminAttManage/AdminAttInfo";
import AttCard from "@components/adminAttManage/AttCard";
import AttCodeTimer from "@components/adminAttManage/AttCodeTimer";
import { useState, useEffect, useRef } from "react"; // useRef 추가
import { useParams } from "react-router-dom";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";

export const AdminAttManagePage = () => {
  useFetchCsrfToken();
  const { id } = useParams();
  const [attendance, setAttendance] = useState(null); // 출석 정보
  const [users, setUsers] = useState([]); // 회원 목록
  const [code, setCode] = useState([]); // 출석 코드
  const [error, setError] = useState(null); // 에러 상태
  const socketRef = useRef(null); // WebSocket 연결 저장
  const [loading, setLoading] = useState(true); // 로딩 상태

  // WebSocket 연결 설정
  useEffect(() => {
    const socketUrl = `wss://everion.store/ws/attendance/${id}/`;
    socketRef.current = new WebSocket(socketUrl);

    socketRef.current.onopen = () => {
      console.log("WebSocket 연결 성공");
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === data.user.id
            ? { ...user, attendance_status: data.status }
            : user
        )
      );
    };

    socketRef.current.onclose = (event) => {
      console.log("WebSocket 연결 종료", event);
    };

    return () => {
      socketRef.current.close(); // 컴포넌트 언마운트 시 WebSocket 연결 종료
    };
  }, [id]);

  // 데이터 가져오기: 새로고침 시 호출
  useEffect(() => {
    const fetchAttendanceDetail = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/attendance/detail/${id}/`
        );
        console.log("출석 상세 데이터:", response.data);

        // 상태 업데이트
        setAttendance(response.data.attendance || null);
        setUsers(response.data.users || []);

        // 출석 코드 분리
        if (response.data.attendance?.auth_code) {
          setCode(
            response.data.attendance.auth_code.split("").map(Number)
          );
        }
      } catch (err) {
        console.error(
          "출석 상세 데이터를 불러오는 데 실패했습니다.",
          err
        );
        setError("출석 상세 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchAttendanceDetail();
  }, [id]);

  // 출석 상태 변경 처리
  const handleStatusChange = async (userId, newStatus, statusId) => {
    try {
      // 요청을 보내기 전 상태를 미리 업데이트
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId
            ? { ...user, attendance_status: newStatus }
            : user
        )
      );

      // 서버에 상태 변경 요청
      const response = await axiosInstance.patch(
        `/attendance/status/${statusId}/update/`,
        {
          user_id: userId,
          attendance_id: id,
          status: newStatus,
        }
      );

      console.log("출석 상태 변경 성공:", response.data);

      // WebSocket으로 메시지 전송
      if (socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send(
          JSON.stringify({
            status: newStatus,
            user: userId,
          })
        );
      }
    } catch (error) {
      console.error("출석 상태 변경 실패:", error);
      alert("출석 상태 변경에 실패했습니다.");

      // 실패 시 상태를 복구
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId
            ? { ...user, attendance_status: "결석" } // 실패 시 기본값 복구
            : user
        )
      );
    }
  };

  const startTime = attendance
    ? `${attendance.date} ${attendance.time}`
    : "";

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <S.Wrapper>
      <F5Header title="출석 관리" />
      <S.Content>
        {/* 출석 정보 */}
        {attendance && (
          <AdminAttInfo
            id={attendance.id}
            date={attendance.date}
            time={attendance.time}
            place={attendance.place || "장소 정보 없음"} // 장소 기본값 처리
            title={attendance.title}
            file={attendance.file}
            description={attendance.description}
            track={attendance.track}
          />
        )}

        {/* 출석 코드 타이머 */}
        <AttCodeTimer
          code={code}
          startTime={startTime}
          lateTime={attendance?.late_threshold}
          absentTime={attendance?.absent_threshold}
        />

        {/* 회원 출석 상태 목록 */}
        <S.AttCardWrapper>
          {users.length > 0 ? (
            users.map((user) => (
              <AttCard
                key={user.id}
                name={user.name}
                details={`${user.membership_term}기 ${user.track}`} // user에서 값을 가져옴
                status={user.attendance_status}
                onStatusChange={(newStatus) =>
                  handleStatusChange(
                    user.id,
                    newStatus,
                    user.status_id
                  )
                }
              />
            ))
          ) : (
            <p>회원 목록이 없습니다.</p>
          )}
        </S.AttCardWrapper>

        {/* 에러 처리 */}
        {error && <p>{error}</p>}
      </S.Content>
    </S.Wrapper>
  );
};
