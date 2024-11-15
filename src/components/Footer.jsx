import React, { useState, useEffect } from "react";
import styled from "styled-components";
import home from "@assets/icons/home.svg";
import board from "@assets/icons/board.svg";
import chat from "@assets/icons/chat.svg";
import school from "@assets/icons/school.svg";
import homeClick from "@assets/icons/homeClick.svg";
import boardClick from "@assets/icons/boardClick.svg";
import chatClick from "@assets/icons/chatClick.svg";
import schoolClick from "@assets/icons/schoolClick.svg";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
    const location = useLocation();

    // 경로에 해당하는 id
    const path = {
        '/main': 1,
        '/commuMain': 2,
        '/chatList': 3,
        '/school': 4,
    };

    const [clickedIndex, setClickedIndex] = useState(() => {
        // sessionStorage에서 clickedIndex를 가져오기
        const storedIndex = sessionStorage.getItem('clickedIndex');
        return storedIndex !== null ? Number(storedIndex) : path[location.pathname];
    });

    useEffect(() => {
        const index = path[location.pathname]; // 경로에 해당하는 id 가져오기
        
        // undefined인 경우에는 clickedIndex 변경하지 않기 때문에
        // 이전에 활성화된 아이콘의 색상이 유지
        
        if (index !== undefined) {
            setClickedIndex(index);
        }
    }, [location.pathname]);

    useEffect(() => {
        // sessionStorage에 변경된 clickedIndex를 저장
        if (clickedIndex !== undefined) {
        sessionStorage.setItem('clickedIndex', clickedIndex);
        }
    }, [clickedIndex]);

    return (
        <Wrapper>
        <Button>
            <Link to="/main">
            <Icon
                src={clickedIndex === 1 ? homeClick : home}
                alt="home icon"
                isClick={clickedIndex === 1}
                onClick={() => setClickedIndex(1)}
            />
            </Link>
        </Button>
        <Button>
            <Link to="/commuMain">
            <Icon
                src={clickedIndex === 2 ? boardClick : board}
                alt="board icon"
                isClick={clickedIndex === 2}
                onClick={() => setClickedIndex(2)}
            />
            </Link>
        </Button>
        <Button>
            <Link to="/chatList">
            <Icon
                src={clickedIndex === 3 ? chatClick : chat}
                alt="chat icon"
                isClick={clickedIndex === 3}
                onClick={() => setClickedIndex(3)}
            />
            </Link>
        </Button>
        <Button>
            <Link to="/school">
            <Icon
                src={clickedIndex === 4 ? schoolClick : school}
                alt="school icon"
                isClick={clickedIndex === 4}
                onClick={() => setClickedIndex(4)}
            />
            </Link>
        </Button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 540px;
    height: 89px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    transform: translateX(-50%);
    left: 50%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.12));
    display: flex;
`;

const Button = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
`;
