import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Main_Layout from "../components/Layouts/Main_Layout";
import Login_Layout from "../components/Layouts/Login_Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Dogs from "../pages/Dogs";
import NotFound from "../pages/NotFound";
import DogDetails from "../pages/DogDetails";
import Dashboard from "../pages/Login/Dashboard";
import Reviews from "../pages/Login/Reviews";
import Question from "../pages/Question";

//nested routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main_Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="questions" element={<Question/>} />
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
