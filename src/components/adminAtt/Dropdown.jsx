import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import dropdown from "@assets/icons/dropdown.svg";

export const Dropdown = ({ props, onChange }) => {
  const list = props.data;
  const [currentValue, setCurrentValue] = useState(list[0]);
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null); // 드롭다운을 감싸는 요소에 참조를 설정

  // 기본값을 부모 컴포넌트로 전달 (한 번만)
  useEffect(() => {
    if (onChange) {
      onChange(list[0]); // 부모 컴포넌트에 기본값 전달
    }
  }, []); // 빈 의존성 배열을 사용해 한 번만 실행되도록 설정

  const handleOnChangeSelectValue = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    const value = e.target.getAttribute("value");
    setCurrentValue(value);
    setShowOptions(false); // 선택 후 드롭다운 닫기

    // 부모 컴포넌트로 값 전달
    if (onChange) {
      onChange(value);
    }
  };
  // 바깥 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowOptions(false); // 바깥 클릭 시 드롭다운 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <SelectBox
      ref={dropdownRef}
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <Label>
        <DropText>{currentValue}</DropText>
        <DownIcon src={dropdown} alt="dropdownIcon" />
      </Label>
      <SelectOptions $show={showOptions}>
        {list.map((data, index) => (
          <Option
            key={index}
            value={data}
            onClick={handleOnChangeSelectValue} // 여기에 이벤트 전파 방지 적용
          >
            {data}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

// 드롭다운 전체를 감싸는 컨테이너
const SelectBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  min-width: 100px; /* 최소 너비를 100px로 고정 */
  height: 33px;

  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  cursor: pointer;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  font-size: 14px;
  color: #999999;
`;

const DropText = styled.div`
  display: flex;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};

  color: "#999999";
`;

// 아이콘 자리 표시용 컴포넌트
const DownIcon = styled.img`
  display: flex;
  justify-content: flex-end;
  /* 아이콘은 여기에서 추가해 주세요 */
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
  max-height: ${(props) => (props.$show ? "150px" : "0")};
  overflow-y: auto;
  border: ${(props) => (props.$show ? "1px solid #cccccc" : "none")};
  border-radius: 8px;
  background-color: #ffffff;
  z-index: 1;
  transition: max-height 0.2s ease-in-out;
`;

const Option = styled.li`
  display: flex;
  font-size: 14px;
  font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
  padding: 8px;
  color: #999999;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #f2f2f2;
  }
`;
