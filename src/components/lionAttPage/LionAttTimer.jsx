// 타이머 컴포넌트
import { useState, useEffect } from "react";
import styled from "styled-components";

// 남은 시간을 계산하는 함수
const calculateRemainingTime = (
  sessionDate,
  sessionTime,
  absentTime
) => {
  if (
    !sessionDate ||
    !sessionTime ||
    typeof absentTime !== "number"
  ) {
    return { minutes: 0, seconds: 0 };
  }

  const sessionDateTime = new Date(`${sessionDate}T${sessionTime}`);
  if (isNaN(sessionDateTime.getTime())) {
    return { minutes: 0, seconds: 0 };
  }

  const absenceTime = new Date(
    sessionDateTime.getTime() + absentTime * 60000
  );
  const currentTime = new Date();
  const remainingTime = Math.max(absenceTime - currentTime, 0);

  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  return { minutes, seconds, isActive: remainingTime > 0 };
};

const LionAttTimer = ({
  sessionDate,
  sessionTime,
  lateTime,
  absentTime,
  setIsTimerActive,
}) => {
  const [timeLeft, setTimeLeft] = useState(
    calculateRemainingTime(sessionDate, sessionTime, absentTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateRemainingTime(
        sessionDate,
        sessionTime,
        absentTime
      );
      setTimeLeft(newTimeLeft);
      setIsTimerActive(newTimeLeft.isActive); // 타이머 활성화 여부 설정
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionDate, sessionTime, absentTime, setIsTimerActive]);

  const isLate = timeLeft.minutes < lateTime;

  return (
    <AttTimer style={{ color: isLate ? "#ff6f69" : "#57BB00" }}>
      남은시간: {String(timeLeft.minutes).padStart(2, "0")}:
      {String(timeLeft.seconds).padStart(2, "0")}
    </AttTimer>
  );
};

export default LionAttTimer;

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
