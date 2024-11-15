import { useState, useEffect } from "react";
import styled from "styled-components";

const calculateRemainingTime = (
  sessionDate,
  sessionTime,
  absentTime
) => {
  const sessionDateTime = new Date(
    `${sessionDate}T${sessionTime}:00`
  );
  const absenceTime = new Date(
    sessionDateTime.getTime() + absentTime * 60000
  );
  const currentTime = new Date();
  const remainingTime = Math.max(absenceTime - currentTime, 0);

  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  return { minutes, seconds };
};

const LionAttInfoPage = ({
  sessionDate,
  sessionTime,
  lateTime,
  absentTime,
}) => {
  const [timeLeft, setTimeLeft] = useState(
    calculateRemainingTime(sessionDate, sessionTime, absentTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(
        calculateRemainingTime(sessionDate, sessionTime, absentTime)
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionDate, sessionTime, absentTime]);

  // 남은 시간이 지각 시간보다 적을 경우 색상을 빨간색으로 설정
  const isLate = timeLeft.minutes < lateTime;

  return (
    <AttTimer style={{ color: isLate ? "#ff6f69" : "#57BB00" }}>
      남은시간: {String(timeLeft.minutes).padStart(2, "0")}:
      {String(timeLeft.seconds).padStart(2, "0")}
    </AttTimer>
  );
};

export default LionAttInfoPage;

const AttTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  width: 100%;
  min-height: 74px;
  background-color: #ffffff;
  color: #57bb00;
  font-size: 25px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;
