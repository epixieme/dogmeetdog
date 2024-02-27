import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import Main_Layout from "../Layouts/Main_Layout";
import Login_Layout from "../Layouts/Login_Layout";
import Home from "pages/HomePage/Home";
import About from "../pages/LoggedOut/About/About";
import DisplayDogs from "../pages/LoggedOut/Dogs/DisplayDogs";
import NotFound from "shared/NotFound";
import Dashboard from "pages/LoggedIn/DashBoard/Dashboard";
import Login from "../pages/LoginPage/LoginPage";
import QuestionPage from "../pages/SignUp/QuestionPage";
import AuthRequired from "features/auth/components/AuthRequired";
import { useSelector } from "react-redux";
import AccountModal from "pages/LoggedIn/AccountModal";
import { RootState } from "store/store";
import { useEffect } from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import Reviews from "pages/LoggedIn/Reviews";

//nested routes

export default function useRouter() {
  const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated);

  // const isAuthenticatedLocalStorage = localStorage.getItem("isAuthenticated");
  // useEffect(() => {
  //   localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  // }, [isAuthenticated]);
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={isAuthenticated ? <Login_Layout /> : <Main_Layout />}
      >
        <Route index element={<Home />} />
        <Route path="dogs" element={<DisplayDogs />} />
        <Route path="about" element={<About />} />
        <Route path="questions" element={<QuestionPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<AuthRequired isAuthenticated={isAuthenticated} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="myaccount" element={<AccountModal />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    )
  );
  return router;
}
