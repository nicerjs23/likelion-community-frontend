//운영진 출석 등록페이지
import * as S from "./AdminAttRegisterPage.styled";
import { Header } from "@components/Header";
import { AdminNameCard } from "@components/adminAttRegister/AdminNameCard";
import { AdminAttPost } from "@components/adminAttRegister/AdminAttPost";
import { SubmitBtn } from "@components/adminAttRegister/SubmitBtn";
import AdminAttCode from "@components/adminAttRegister/AdminAttCode";
import { useState, useEffect } from "react";

export const AdminAttRegisterPage = () => {
  const [formData, setFormData] = useState({
    code: ["", "", "", ""],
    dropdownValue: "",
    title: "",
    date: "",
    time: "",
    body: "",
    file: null,
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const allFieldsFilled = checkAllFields();
    // 상태가 변경될 필요가 있을 때만 업데이트
    if (isActive !== allFieldsFilled) {
      setIsActive(allFieldsFilled);
    }
  }, [formData, isActive]);

  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // 현재 입력된 데이터를 콘솔에 출력
    console.log("Form data to send:", formData);

    if (!isActive) {
      alert("모든 내용을 작성해 주세요.");
    }
  };

  const checkAllFields = () => {
    return (
      formData.code.every((digit) => digit !== "") &&
      formData.dropdownValue &&
      formData.title &&
      formData.date &&
      formData.time &&
      formData.body &&
      formData.file
    );
  };

  return (
    <S.Wrapper>
      <Header title="출석 등록" />
      <S.Content>
        <AdminNameCard adminName="이동건" adminYear="11" />
        <AdminAttCode
          code={formData.code}
          setCode={(value) => handleFieldChange("code", value)}
        />
        <AdminAttPost
          setDropdownValue={(value) =>
            handleFieldChange("dropdownValue", value)
          }
          setTitle={(value) => handleFieldChange("title", value)}
          setDate={(value) => handleFieldChange("date", value)}
          setTime={(value) => handleFieldChange("time", value)}
          setBody={(value) => handleFieldChange("body", value)}
          setFile={(file) => handleFieldChange("file", file)}
        />
        <SubmitBtn isActive={isActive} onClick={handleSubmit} />
      </S.Content>
    </S.Wrapper>
  );
};
