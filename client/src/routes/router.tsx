import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Main_Layout from "../components/Layouts/Main_Layout";
import Login_Layout from "../components/Layouts/Login_Layout";
import Home from "../pages/LoggedOut/Home";
import About from "../pages/LoggedOut/About/About";
import DisplayDogs from "../pages/LoggedOut/Dogs/DisplayDogs";
import NotFound from "../pages/Shared/NotFound";
// import DogDetails from "../pages/LoggedOut/Dogs/DogDetails";
import Dashboard from "../pages/LoggedIn/Dashboard";
import Reviews from "../pages/LoggedIn/Reviews";
import Question from "../pages/SignUp/Question";
import Login from "../pages/Login/Login";
import QuestionPage from "../pages/SignUp/QuestionPage";



//nested routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main_Layout />}>
      <Route index element={<Home />} />
      <Route path="dogs" element={<DisplayDogs /> } />
      <Route path="about" element={<About />} />
      <Route path="questions" element={<QuestionPage />} />
      <Route path="login"element={<Login />}/>
      {/* <Route path="dogs/:id" element={<DogDetails />} /> */}
      <Route path="meetdogs" element={<Login_Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
