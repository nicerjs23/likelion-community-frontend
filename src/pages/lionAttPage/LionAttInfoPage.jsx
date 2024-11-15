// 아기사자 출석 정보 확인 페이지
import { useState } from "react";
import { Header } from "@components/Header";
import * as S from "./LionAttInfoPage.styled";
import LionAttInfo from "@components/lionAttPage/LionAttInfo";
import LionAttTimer from "@components/lionAttPage/LionAttTimer";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
export const LionAttInfoPage = () => {
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
    status: "",
  };
  const { goTo } = useCustomNavigate();
  return (
    <S.Wrapper>
      <Header title="출석 정보" />
      <S.Content>
        <LionAttInfo
          date={infoData.date}
          time={infoData.time}
          place={infoData.place}
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
              bgColor={
                infoData.status === "출석"
                  ? "rgba(162, 255, 154, 0.50)"
                  : "none"
              }
              fontColor={
                infoData.status === "출석" ? "#51804D" : "#000000"
              }
            >
              <S.AttBoxText
                textColor={
                  infoData.status === "출석" ? "#8CBB88" : "#767676"
                }
              >
                출석
              </S.AttBoxText>
              3회
            </S.AttBox>

            <S.AttBox
              bgColor={
                infoData.status === "지각"
                  ? "rgba(255, 243, 154, 0.50)"
                  : "none"
              }
              fontColor={
                infoData.status === "지각" ? "#80794D" : "#000000"
              }
            >
              <S.AttBoxText
                textColor={
                  infoData.status === "지각" ? "#BBB488" : "#767676"
                }
              >
                지각
              </S.AttBoxText>
              2회
            </S.AttBox>

            <S.AttBox
              bgColor={
                infoData.status === "결석"
                  ? "rgba(255, 154, 154, 0.50)"
                  : "none"
              }
              fontColor={
                infoData.status === "결석" ? "#804D4D" : "#000000"
              }
            >
              <S.AttBoxText
                textColor={
                  infoData.status === "결석" ? "#BB8888" : "#767676"
                }
              >
                결석
              </S.AttBoxText>
              1회
            </S.AttBox>
          </S.AttScoreBody>
        </S.AttScore>
        <LionAttTimer
          sessionDate="2024-11-15"
          sessionTime="17:53"
          lateTime={1}
          absentTime={2}
        />
        <S.AttSubmitBtn onClick={() => goTo("/lionAttNum")}>
          출석하러 가기
        </S.AttSubmitBtn>
      </S.Content>
    </S.Wrapper>
  );
};

export default LionAttInfoPage;
