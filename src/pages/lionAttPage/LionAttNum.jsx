import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import * as S from "./LionAttNum.styled";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken";

export const LionAttNum = () => {
  useFetchCsrfToken();
  const { id } = useParams();
  const inputRef = useRef([]);
  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState("출석코드를 입력해주세요");
  const [att, setAtt] = useState("default");
  const [time, setTime] = useState(null);
  const [buttonText, setButtonText] = useState("출석하기");
  const [code, setCode] = useState(["", "", "", ""]);
  const { goTo } = useCustomNavigate();

  const handleChange = (e, index) => {
    if (att === "success") return; // 출석 완료 상태에서는 입력 불가

    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }

    setComplete(newCode.every((num) => num !== ""));
  };

  const handleKeyDown = (e, index) => {
    if (att === "success") return; // 출석 완료 상태에서는 입력 불가

    if (e.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-input-${index - 1}`).focus();
    }
  };

  const handleButton = async () => {
    if (att === "success" && buttonText === "돌아가기") {
      goTo("/lionAtt"); // 출석글 페이지로 이동
      return;
    }

    if (buttonText === "출석하기" && complete) {
      const inputCode = code.join("");
      console.log(inputCode);
      try {
        const response = await axiosInstance.post(
          `/attendance/${id}/check/`,
          { auth_code: inputCode }
        );

        if (response.status === 200) {
          const currentTime = new Date();
          setMessage("출석이 완료되었습니다.");
          setTime(currentTime);
          setAtt("success");
          setButtonText("돌아가기");

          console.log("입력한 출석코드:", inputCode);
          console.log(
            "출석 완료 시간:",
            currentTime.toLocaleTimeString()
          );
        }
      } catch (error) {
        setMessage("출석코드가 일치하지 않아요");
        setAtt("fail");
        setCode(["", "", "", ""]);
        setComplete(false);
        inputRef.current[0].focus();
        console.error("출석 실패:", error);
      }
    } else if (buttonText === "돌아가기") {
      alert("출석이 완료되었습니다."); // 메시지 표시
      goTo("/lionAtt");
    }
  };

  return (
    <S.Wrapper>
      <Header title="출석" />
      <S.Info att={att}>
        {time && att === "success"
          ? `${time.toLocaleTimeString()} ${message}`
          : message}
      </S.Info>
      <S.Nums>
        {code.map((num, index) => (
          <S.BoxInput
            key={index}
            id={`code-input-${index}`}
            value={num}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            $isFilled={!!num}
            inputMode="numeric"
            ref={(el) => (inputRef.current[index] = el)}
            disabled={att === "success"} // 출석 완료 시 입력 비활성화
          />
        ))}
      </S.Nums>
      <S.Button
        complete={
          buttonText === "돌아가기" || (complete && att !== "success")
        }
        onClick={handleButton}
      >
        {buttonText}
      </S.Button>
      <Footer />
    </S.Wrapper>
  );
};
