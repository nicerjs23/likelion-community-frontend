//운영진 출석 관리페이지
import * as S from "./AdminAttManagePage.styled";
import { F5Header } from "@components/adminAttManage/F5Header";
import AdminAttInfo from "@components/adminAttManage/AdminAttInfo";
export const AdminAttManagePage = () => {
  return (
    <S.Wrapper>
      <F5Header title="출석 관리" />
      <S.Content>
        <AdminAttInfo />
        운영진 출석 관리페이지
      </S.Content>
    </S.Wrapper>
  );
};
