// 아기사자 출석코드 입력하는 페이지
import react, { useState, useRef } from "react";
import { Header } from "@components/Header";
import * as S from './LionAttNum.styled'
import { Footer } from "@components/Footer";

export const LionAttNum = () => {

    const inputRef = useRef([]);
    const [complete, setComplete] = useState(false); // input 4개에 입력이 다 되었는지를 저장
    const [message, setMessage] = useState('출석코드를 입력해주세요');
    const [att, setAtt] = useState('default'); // 출석 상태를 저장
    const [time, setTime] = useState(null); // 출석 완료 시간을 저장

    const realCode='1234'; // 예시

    const handleInput = (index, event) => {
        const value = event.target.value;

        if (/^\d$/.test(value)) { // 입력값이 한 자리 숫자일 때
            inputRef.current[index].style.backgroundColor = "#FF7710";
            inputRef.current[index].style.color = "#fff";

            if (index < inputRef.current.length-1) {
                inputRef.current[index+1].focus(); // 다음 input으로 포커스를 이동
            }
        } else {
            event.target.value="";
        }
        
        // input 4개에 모두 숫자가 입력되었는지
        if (inputRef.current.every(input=>input.value)) {
            setComplete(true);
        } else {
            setComplete(false);
        }
    }

    const handleButton = () => {
        if (complete) {
            const inputCode = inputRef.current.map(input => input.value).join("");
            if (inputCode === realCode) {
                setMessage("출석 완료");
                const currentTime = new Date();
                setTime(currentTime);
                setAtt("success");
            } else {
                setMessage("출석코드가 일치하지 않아요");
                setAtt("fail");
                inputRef.current.forEach(input => {
                    input.value='';
                    input.style.backgroundColor = "#fff";
                    input.style.color = "#000";
                });
                setComplete(false);
                inputRef.current[0].focus();
            }
        }
    }

    return (
        <S.Wrapper>
            <Header title="출석" />
            <S.Info att={att}>
                {time && att==="success" ? `${time.toLocaleTimeString()} ${message}`:message}
            </S.Info>
            <S.Nums>
                {[0,1,2,3].map((_,index) => (
                    <S.Num
                        key={index}
                        type='text'
                        maxLength='1'
                        ref={(el) => inputRef.current[index]=el}
                        onChange={(e)=>handleInput(index,e)}
                    />
                ))}
            </S.Nums>
            <S.Button complete={complete} onClick={handleButton}>출석하기</S.Button>
            <Footer/>
        </S.Wrapper>
    )
}