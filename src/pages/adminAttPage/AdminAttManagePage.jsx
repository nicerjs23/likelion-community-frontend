//운영진 출석 관리페이지
import * as S from "./AdminAttManagePage.styled";
import { F5Header } from "@components/adminAttManage/F5Header";
import AdminAttInfo from "@components/adminAttManage/AdminAttInfo";
import AttCard from "@components/adminAttManage/AttCard";
import AttCodeTimer from "@components/adminAttManage/AttCodeTimer";
import { useState } from "react";

export const AdminAttManagePage = () => {
  // 출석 데이터를 상태로 관리
  const [attendees, setAttendees] = useState([
    { name: "이동건", details: "12기 프론트엔드", status: "출석" },
    { name: "전해성", details: "12기 백엔드", status: "지각" },
    { name: "윤나경", details: "12기 기획/디자인", status: "결석" },
    { name: "박선우", details: "12기 프론트엔드", status: "결석" },
    { name: "박채현", details: "12기 백엔드", status: "결석" },
  ]);
  const infoData = {
    id: "2",
    date: "2024-11-07",
    time: "18:30",
    place: "신공학과 5147",
    track: "백엔드",
    title: "9주차 세션 쉽게 배포하기",
    description:
      "늦지 않게 와주세요~ 일찍 오신분들은 5143에서 대기해주시면 됩니다.",
    file: "https://example.com/9주차배포자료.pdf",
  };
  // 상태 변경 함수
  const handleStatusChange = (index, newStatus) => {
    const updatedAttendees = [...attendees];
    updatedAttendees[index].status = newStatus;
    setAttendees(updatedAttendees);
    console.log("Updated Attendee:", updatedAttendees[index]);
  };
  return (
    <S.Wrapper>
      <F5Header title="출석 관리" />
      <S.Content>
        <AdminAttInfo
          date={infoData.date}
          time={infoData.time}
          place={infoData.place}
          track={infoData.track}
          title={infoData.title}
          description={infoData.description}
          file={infoData.file}
        />
        <AttCodeTimer
          code={[1, 2, 5, 6]}
          startTime="2024-11-13 20:31"
          lateTime={2} // 30분 지각
          absentTime={1} // 10분 결석
        />
        <S.AttCardWrapper>
          {attendees.map((attendee, index) => (
            <AttCard
              key={index}
              name={attendee.name}
              details={attendee.details}
              status={attendee.status}
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
