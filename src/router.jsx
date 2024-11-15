import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/accountPage/WelcomePage";
import { SchMainPage } from "@pages/schMainPage/SchMainPage";
import { AdminAttPage } from "@pages/adminAttPage/AdminAttPage";
import { AdminAttRegisterPage } from "@pages/adminAttPage/AdminAttRegisterPage";
import { AdminAttManagePage } from "@pages/adminAttPage/AdminAttManagePage";
import { LionAttNum } from "@pages/lionAttPage/LionAttNum";
import { LoginPage } from "@pages/accountPage/LoginPage";
import { SignupPage } from "@pages/accountPage/SignupPage";
import { KakaoSignupPage } from "@pages/accountPage/KakaoSignupPage";
import { VerificationPage } from "@pages/accountPage/VerificationPage";
import { Loading } from "@components/account/Loading";
import { LionAttInfoPage } from "@pages/lionAttPage/LionAttInfoPage";
import { ChatListPage } from "@pages/chatPage/ChatListPage";
import { ChatPage } from "@pages/chatPage/ChatPage";
import { BePostingPage } from "@pages/mainPostingPage/BePostingPage";
import { DefaultPostingPage } from "@pages/mainPostingPage/DefaultPostingPage";
import { FePostingPage } from "@pages/mainPostingPage/FePostingPage";
import { JoinPostingPage } from "@pages/mainPostingPage/JoinPostingPage";
import { LionPostingPage } from "@pages/mainPostingPage/LionPostingPage";
import { NotiPostingPage } from "@pages/mainPostingPage/NotiPostingPage";
import { PmPostingPage } from "@pages/mainPostingPage/PmPostingPage";
import { QnAPostingPage } from "@pages/schPostingPage/QnAPostinPage";
import { SchDefaultPostingPage } from "@pages/schPostingPage/SchDefaultPostingPage";
import { SchAllBoardPage } from "@pages/schBoardPage/SchAllBoardPage";
import { SchQnaBoardPage } from "@pages/schBoardPage/SchQnaBoardPage";
import { CommuMainPage } from "@pages/commuPage/CommuMainPage";
import { DefaultBoardPage } from "@pages/boardPage/DefaultBoardPage";
import { BeBoardPage } from "@pages/boardPage/BeBoardPage";
import { FeBoardPage } from "@pages/boardPage/FeBoardPage";
import { PmBoardPage } from "@pages/boardPage/PmBoardPage";
import { LionBoardPage } from "@pages/boardPage/LionBoardPage";
import { NotiBoardPage } from "@pages/boardPage/NotiBoardPage";
import { JoinBoardPage } from "@pages/boardPage/JoinBoardPage";
import { MyPage } from "@pages/myPage/MyPage";
import { BePostPage } from "@pages/mainPostPage/BePostPage";
import { DefaultPostPage } from "@pages/mainPostPage/DefaultPostPage";
import { FePostPage } from "@pages/mainPostPage/FePostPage";
import { JoinPostPage } from "@pages/mainPostPage/JoinPostPage";
import { LionPostPage } from "@pages/mainPostPage/LionPostPage";
import { NotiPostPage } from "@pages/mainPostPage/NotiPostPage";
import { PmPostPage } from "@pages/mainPostPage/PmPostPage";
import { QnAPostPage } from "@pages/schPostPage/QnAPostPage";
import { SchDefaultPostPage } from "@pages/schPostPage/SchDefaultPostPage";
import { MyPostPage } from "@pages/myPage/MyPostPage";
import { MyCommentPage } from "@pages/myPage/MyCommentPage";
import { MyScrapPage } from "@pages/myPage/MyScrapPage";
import { LionAttPage } from "@pages/lionAttPage/LionAttPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "", element: <WelcomePage /> },
      { path: "main", element: <MainPage /> },
      { path: "school", element: <SchMainPage /> },
      { path: "adminAtt", element: <AdminAttPage /> },
      { path: "adminAttRegister", element: <AdminAttRegisterPage /> },
      { path: "adminAttManage/:id", element: <AdminAttManagePage /> },
      { path: "lionAtt", element: <LionAttPage /> },
      { path: "lionAttNum", element: <LionAttNum /> },
      { path: "lionAttInfo", element: <LionAttInfoPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "kakaoSignup", element: <KakaoSignupPage /> },
      { path: "verification", element: <VerificationPage /> },
      { path: "loading", element: <Loading /> },
      { path: "chatList", element: <ChatListPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "bePostingPage", element: <BePostingPage /> },
      { path: "defaultPostingPage", element: <DefaultPostingPage /> },
      { path: "fePostingPage", element: <FePostingPage /> },
      { path: "joinPostingPage", element: <JoinPostingPage /> },
      { path: "lionPostingPage", element: <LionPostingPage /> },
      { path: "notiPostingPage", element: <NotiPostingPage /> },
      { path: "pmPostingPage", element: <PmPostingPage /> },
      { path: "qnaPostingPage", element: <QnAPostingPage /> },
      {
        path: "schDefaultPostingPage",
        element: <SchDefaultPostingPage />,
      },
      { path: "schAllBoard", element: <SchAllBoardPage /> },
      { path: "schQnaBoard", element: <SchQnaBoardPage /> },
      { path: "commuMain", element: <CommuMainPage /> },
      { path: "defaultBoard", element: <DefaultBoardPage /> },
      { path: "feBoard", element: <FeBoardPage /> },
      { path: "beBoard", element: <BeBoardPage /> },
      { path: "pmBoard", element: <PmBoardPage /> },
      { path: "lionBoard", element: <LionBoardPage /> },
      { path: "notiBoard", element: <NotiBoardPage /> },
      { path: "joinBoard", element: <JoinBoardPage /> },
      { path: "myPage", element: <MyPage /> },
      { path: "bePostPage/:id", element: <BePostPage /> },
      { path: "defaultPostPage/:id", element: <DefaultPostPage /> },
      { path: "fePostPage/:id", element: <FePostPage /> },
      { path: "joinPostPage/:id", element: <JoinPostPage /> },
      { path: "lionPostPage/:id", element: <LionPostPage /> },
      { path: "notiPostPage/:id", element: <NotiPostPage /> },
      { path: "pmPostPage/:id", element: <PmPostPage /> },
      { path: "qnaPostPage/:id", element: <QnAPostPage /> },
      { path: "schDefaultPostPage", element: <SchDefaultPostPage /> },
      { path: "myPost", element: <MyPostPage /> },
      { path: "myComment", element: <MyCommentPage /> },
      { path: "myScrap", element: <MyScrapPage /> },
    ],
  },
]);
