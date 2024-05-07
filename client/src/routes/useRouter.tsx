import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { RootState } from "store/types";
import HomePage from "pages/LoggedOut/HomePage/page/HomePage";
import About from "pages/LoggedOut/About/page/About";
import DisplayDogs from "pages/LoggedOut/Dogs/page/DisplayDogs";
import NotFound from "shared/NotFound";
import Dashboard from "pages/LoggedIn/DashBoard/page/Dashboard";
import QuestionPage from "../pages/LoggedOut/SignUp/page/QuestionPage";
import AuthRequired from "features/Auth/components/AuthRequired";
import { useSelector } from "react-redux";
import LoginPage from "../pages/LoggedOut/LoginPage/page/LoginPage";
import Dashboard_Layout from "Layouts/Dashboard/components/Dashboard_Layout";
import Nearby from "pages/LoggedIn/Nearby/page/Nearby";
import Home_Layout from "Layouts/Landing/components/Home_Layout";
import ManageAccountPage from "pages/LoggedIn/ManageAccount/page/ManageAccountPage";

//nested routes

export default function useRouter() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Home_Layout />} // need to remove this and just call it home layout
      >
        <Route index element={isAuthenticated ? <Dashboard /> : <HomePage />} />

        {/* not authenticated */}
        <Route element={<AuthRequired isAuthenticated={!isAuthenticated} />}>
          <Route path="meetdogs" element={<DisplayDogs />} />
          <Route path="about" element={<About />} />
          <Route path="questions" element={<QuestionPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* authenticated */}
        <Route element={<AuthRequired isAuthenticated={isAuthenticated} />}>
          <Route path="manage-account" element={<ManageAccountPage />} />
          <Route path="nearby" element={<Nearby />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    )
  );
  return router;
}
