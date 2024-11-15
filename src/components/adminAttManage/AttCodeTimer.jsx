import { useEffect, useState } from "react";
import styled from "styled-components";

const AttCodeTimer = ({ code, startTime, lateTime, absentTime }) => {
  const [remainingTime, setRemainingTime] = useState(null);
  const [isLate, setIsLate] = useState(false);

  useEffect(() => {
    const start = new Date(startTime); // 세션 시작 시간
    const now = new Date();
    const lateLimit = lateTime * 60; // 지각 시간 (초 단위)
    const absentLimit = absentTime * 60; // 결석 시간 (초 단위)

    if (now < start) {
      // 세션 시작 전이라면 타이머 초기화
      setRemainingTime(lateLimit);
    } else {
      const interval = setInterval(() => {
        const timePassed = Math.floor((new Date() - start) / 1000); // 경과 시간 (초 단위)
        const timeLeft = lateLimit - timePassed;

        if (timeLeft <= 0) {
          clearInterval(interval);
          setRemainingTime(0);
        } else {
          setRemainingTime(timeLeft);
          setIsLate(timeLeft <= absentLimit); // 남은 시간이 결석 한도에 도달하면 빨간색으로 변경
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTime, lateTime, absentTime]);

  // 남은 시간을 MM:SS 형식으로 변환
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      secs
    ).padStart(2, "0")}`;
  };

  return (
    <Wrapper>
      <CodeTextWrapper>
        <Text>출석코드:</Text>
        <CodeContainer>
          {code.map((digit, index) => (
            <Code key={index}>{digit}</Code>
          ))}
        </CodeContainer>
      </CodeTextWrapper>
      <Timer $isLate={isLate}>{formatTime(remainingTime)}</Timer>
    </Wrapper>
  );
};

export default AttCodeTimer;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 10px 22px;
  border-radius: 32px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const CodeTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;
const Text = styled.div`
  display: flex;
  font-size: 15px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`;
const CodeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Code = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #ff7710;
  color: #fff;
  font-size: 22px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardBold["font-family"]};

  border-radius: 10px;
  /* margin: 0 3px; */
`;

const Timer = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ $isLate }) =>
    $isLate ? "#ff6f69" : "#4CAF50"}; /* 빨간색 또는 초록색 */
`;
