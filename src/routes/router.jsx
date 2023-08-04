import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Dogs from "../pages/Dogs";
import NotFound from "../pages/NotFound";

//nested routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dogs" element={<Dogs />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
