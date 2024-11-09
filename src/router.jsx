import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "@layout/DefaultLayout";
import { MainPage } from "@pages/mainPage/MainPage";
import { WelcomePage } from "@pages/loginPage/WelcomePage";
import { SchMainPage } from "@pages/schMainPage/SchMainPage";
import { AdminAttPage } from "@pages/adminAttPage/AdminAttPage";
import { AdminAttRegisterPage } from "@pages/adminAttPage/AdminAttRegisterPage";
import { AdminAttManagePage } from "@pages/adminAttPage/AdminAttManagePage";
import { LionAttNum } from "@pages/lionAttPage/LionAttNum";
import { LionAttInfoPage } from "@pages/lionAttPage/LionAttInfoPage";

import { LoginPage } from "@pages/loginPage/LoginPage";
import { ChatListPage } from "@pages/ChatPage/ChatListPage";
import { ChatPage } from "@pages/ChatPage/ChatPage";

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
      { path: "adminAttManage", element: <AdminAttManagePage /> },
      { path: "lionAttNum", element: <LionAttNum /> },
      { path: "lionAttInfo", element: <LionAttInfoPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "chatList", element: <ChatListPage /> },
      { path: "chat", element: <ChatPage /> },
    ],
  },
]);
