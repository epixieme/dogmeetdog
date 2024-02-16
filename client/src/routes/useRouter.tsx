import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import Main_Layout from "../Layouts/Main_Layout";
import Login_Layout from "../Layouts/Login_Layout";
import Home from "../pages/LoggedOut/Home";
import About from "../pages/LoggedOut/About/About";
import DisplayDogs from "../pages/LoggedOut/Dogs/DisplayDogs";
import NotFound from "../pages/Shared/NotFound";
// import DogDetails from "../pages/LoggedOut/Dogs/DogDetails";
import Dashboard from "../pages/LoggedIn/Dashboard";
import Reviews from "../pages/LoggedIn/Reviews";
import Login from "../pages/Login/Login";
import QuestionPage from "../pages/SignUp/QuestionPage";
import AuthRequired from "features/auth/components/AuthRequired";
import { useSelector } from "react-redux";

//nested routes

export default function useRouter() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
        <Route path="login" element={<Login />} />
        <Route element={<AuthRequired />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
          {/* </Route> */}
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    )
  );
  return router;
}
