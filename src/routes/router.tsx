import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Main_Layout from "../components/Layouts/Main_Layout";
import Login_Layout from "../components/Layouts/Login_Layout";
import Home from "../pages/LoggedOut/Home";
import About from "../pages/LoggedOut/About";
import Dogs from "../pages/LoggedOut/Dogs/Dogs";
import NotFound from "../pages/Shared/NotFound";
import DogDetails from "../pages/LoggedOut/Dogs/DogDetails";
import Dashboard from "../pages/LoggedIn/Dashboard";
import Reviews from "../pages/LoggedIn/Reviews";
import Question from "../pages/SignUp/Question";

//nested routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main_Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="questions" element={<Question name={""} age={""} breed={""} sex={""} owner={""}/>} />
      <Route path="dogs" element={<Dogs />} />
      <Route path="dogs/:id" element={<DogDetails />} />
      <Route path="login" element={<Login_Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
