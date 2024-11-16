import * as S from "./AdminAttRegisterPage.styled";
import { Header } from "@components/Header";
import { AdminNameCard } from "@components/adminAttRegister/AdminNameCard";
import { AdminAttPost } from "@components/adminAttRegister/AdminAttPost";
import { SubmitBtn } from "@components/adminAttRegister/SubmitBtn";
import AdminAttCode from "@components/adminAttRegister/AdminAttCode";
import { useState, useEffect } from "react";
import axiosInstance from "@apis/axiosInstance";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken"; // 커스텀 훅 가져오기
import { useCustomNavigate } from "@hooks/useCustomNavigate"; // 커스텀 네비게이션 훅 가져오기

export const AdminAttRegisterPage = () => {
  useFetchCsrfToken();
  const { goTo } = useCustomNavigate(); // 커스텀 네비게이션 훅 사용

  const [formData, setFormData] = useState({
    code: ["", "", "", ""],
    dropdownValue: "",
    title: "",
    date: "",
    time: "",
    place: "",
    body: "",
    file: null,
    lateTime: "",
    absentTime: "",
  });

  const [isActive, setIsActive] = useState(false);

  const [adminData, setAdminData] = useState({
    profile_image: "",
    nickname: "",
    membership_term: "",
  });

  useEffect(() => {
    // API 호출로 데이터 가져오기
    const fetchAdminData = async () => {
      try {
        const response = await axiosInstance.get(
          "/attendance/creator-info/"
        );
        setAdminData(response.data);
        console.log("GET Admin Data:", response.data); // API 응답 데이터 출력
      } catch (error) {
        if (error.response) {
          console.error("Error:", error.response.data);
        } else {
          console.error("Error:", error.message);
        }
      }
    };

    fetchAdminData();
  }, []);

  useEffect(() => {
    const allFieldsFilled = checkAllFields();
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

  const handleSubmit = async () => {
    if (!isActive) {
      alert("모든 내용을 작성해 주세요.");
      return;
    }

    // FormData 객체 생성
    const formDataToSend = new FormData();
    const codeString = formData.code.join(""); // 배열을 문자열로 변환

    formDataToSend.append("date", formData.date);
    formDataToSend.append("time", formData.time);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("auth_code", codeString);
    formDataToSend.append("description", formData.body);
    if (formData.file) {
      // 파일이 있을 경우에만 추가
      formDataToSend.append("file", formData.file);
    }
    formDataToSend.append("track", formData.dropdownValue);
    formDataToSend.append("late_threshold", formData.lateTime);
    formDataToSend.append("absent_threshold", formData.absentTime);

    try {
      // axios를 이용해 POST 요청 전송
      const response = await axiosInstance.post(
        "/attendance/set/",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // FormData 전송 시 헤더 설정
          },
        }
      );
      console.log("POST 성공:", response.data); // 성공 시 응답 출력
      alert("출석이 성공적으로 등록되었습니다!");
      goTo("/adminAtt"); // 출석 등록이 성공하면 /adminAtt로 이동
    } catch (error) {
      if (error.response) {
        console.error("POST 실패:", error.response.data);
        alert("출석 등록에 실패했습니다. 다시 시도해 주세요.");
      } else {
        console.error("Error:", error.message);
        alert("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  const checkAllFields = () => {
    return (
      formData.code.every((digit) => digit !== "") &&
      formData.dropdownValue &&
      formData.title &&
      formData.date &&
      formData.time &&
      formData.place &&
      formData.body &&
      formData.lateTime &&
      formData.absentTime
    );
  };

  return (
    <S.Wrapper>
      <Header title="출석 등록" />
      <S.Content>
        <AdminNameCard
          profile_image={adminData.profile_image}
          nickname={adminData.nickname}
          membership_term={adminData.membership_term}
        />
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
          setPlace={(value) => handleFieldChange("place", value)}
          setBody={(value) => handleFieldChange("body", value)}
          setFile={(file) => handleFieldChange("file", file)}
          setLateTime={(value) =>
            handleFieldChange("lateTime", value)
          }
          setAbsentTime={(value) =>
            handleFieldChange("absentTime", value)
          }
        />
        <SubmitBtn isActive={isActive} onClick={handleSubmit} />
      </S.Content>
    </S.Wrapper>
  );
};
