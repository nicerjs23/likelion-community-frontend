//카카오추가정보입력 페이지
import * as S from "./KakaoSignupPage.styled";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import useFetchCsrfToken from "@hooks/useFetchCsrfToken"; // 우리가 만든 훅 가져오기
import { Header } from "@components/Header";
import { Button } from "@components/account/Button";
import { InputBox } from "@components/account/InputBox";
import { LionClass } from "@components/account/LionClass";
import { Loading } from "@components/account/Loading";
import axiosInstance from "../../apis/axiosInstance";
import sampleImg from "@assets/images/verification_sample.svg";
import img from "@assets/icons/img.svg";

export const KakaoSignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { goTo } = useCustomNavigate();

  // 우리가 만든 CSRF 훅 사용
  useFetchCsrfToken();

  const [form, setForm] = useState({
    name: "",
    nickname: "",
    class: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [fileName, setFileName] = useState(""); // 파일명 상태 추가

  const isFormComplete = form.name && form.nickname && form.class;

  // URL에서 닉네임 가져오기
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const nickname = params.get("nickname");
    if (nickname) {
      setForm((prev) => ({ ...prev, nickname }));
    }
  }, [location.search]);

  const InputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setFileName(file ? file.name : ""); // 파일명 설정
    console.log("선택된 이미지 파일:", file);
  };

  const handleCheck = async () => {
    if (!imageFile) {
      alert("사진을 먼저 업로드해주세요.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("verification_photo", imageFile);

    try {
      const response = await axiosInstance.post(
        "/signup/photo_validation/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      if (response.data.is_valid) {
        setIsVerified(true);
        alert("유효한 사진입니다.");
      } else {
        alert("사진이 유효하지 않습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error(
        "사진 유효성 검사 실패:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    if (!isFormComplete || !isVerified) {
      alert("모든 정보를 입력하고 사진 유효성 검사를 완료해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("nickname", form.nickname);
    formData.append("membership_term", form.class);
    if (imageFile) {
      formData.append("verification_photo", imageFile);
    }

    // FormData 내용 출력
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axiosInstance.post(
        "/signup/complete_profile/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("회원가입 성공:", response.data.message);
      navigate("/main", { state: form });
    } catch (error) {
      console.error(
        "회원가입 실패:",
        error.response?.data || error.message
      );
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.Wrapper>
      <Header title="회원가입" />
      <S.ContentWrap>
        <InputBox
          title="이름"
          value={form.name}
          onChange={InputChange("name")}
        />
        <InputBox
          title="닉네임"
          value={form.nickname}
          onChange={InputChange("nickname")}
          disabled
        />
        <LionClass
          value={form.class}
          onChange={InputChange("class")}
        />
      </S.ContentWrap>

      <S.ContentWrap>
        <S.Text>회원 인증하기</S.Text>
        <S.SampleImg>
          <p>예시 이미지</p>
          <img src={sampleImg} alt="예시 이미지" />
          <p className="Notice">
            멋쟁이사자처럼 공식 홈페이지에서 회원 정보 페이지를 <br />
            로고와 개인정보가 나오도록 전체캡쳐해서 업로드 해주세요!!
          </p>
        </S.SampleImg>
      </S.ContentWrap>

      <S.ContentWrap>
        <S.Text>회원인증</S.Text>
        <S.InputWrap>
          <S.InputBox>
            <S.InputImg img={img}>
              <S.FileInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <S.FileName>
                {fileName || "파일을 선택해주세요"}
              </S.FileName>
            </S.InputImg>
          </S.InputBox>
          <S.Confirm onClick={handleCheck}>검사</S.Confirm>
        </S.InputWrap>
        {isLoading && <Loading />}
        {isVerified && (
          <S.CompleteMessage>
            유효한 회원 인증 이미지입니다.
          </S.CompleteMessage>
        )}
      </S.ContentWrap>

      <S.ContentWrap>
        <Button
          btnName="회원가입"
          onClick={handleSignup}
          disabled={!isFormComplete || !isVerified}
        />
        <S.LogIn>
          <span className="text">이미 회원이신가요?</span>
          <span className="underline" onClick={() => goTo("/login")}>
            로그인
          </span>
        </S.LogIn>
      </S.ContentWrap>
    </S.Wrapper>
  );
};
