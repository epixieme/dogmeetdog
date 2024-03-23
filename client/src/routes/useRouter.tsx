import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { RootState } from "store/types";
import Main_Layout from "../Layouts/Home_Layout";
import Login_Layout from "../Layouts/Dashboard_Layout";
import Home from "pages/HomePage/Home";
import About from "../pages/LoggedOut/About/About";
import DisplayDogs from "../pages/LoggedOut/Dogs/DisplayDogs";
import NotFound from "shared/NotFound";
import Dashboard from "pages/LoggedIn/DashBoard/Dashboard";
import QuestionPage from "../pages/SignUp/QuestionPage";
import AuthRequired from "features/auth/components/AuthRequired";
import { useSelector } from "react-redux";
import AccountModal from "pages/LoggedIn/AccountModal";

import LoginPage from "../pages/LoginPage/LoginPage";
import Reviews from "pages/LoggedIn/Reviews";
import Dashboard_Layout from "../Layouts/Dashboard_Layout";
import Home_Layout from "../Layouts/Home_Layout";

//nested routes

export default function useRouter() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={isAuthenticated ? <Dashboard_Layout /> : <Home_Layout />}
      >
        <Route index element={isAuthenticated ? <Dashboard /> : <Home />} />
        <Route path="meetdogs" element={<DisplayDogs />} />
        <Route path="about" element={<About />} />
        <Route path="questions" element={<QuestionPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<AuthRequired isAuthenticated={isAuthenticated} />}>
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
