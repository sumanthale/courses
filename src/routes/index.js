import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Loadable from "../Helpers/Loadable";
import MinimalLayout from "../layout/MinimalLayout";
import MainLayout from "../layout/MainLayout";
import Courses from "../Components/Courses/Courses";
import Course from "../Components/Courses/Course";
const Home = Loadable(lazy(() => import("../Components/Home/Home")));

export default function ROUTES() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course" element={<Courses />} />
        <Route exact path="/course/:id" element={<Course />} />
      </Route>
      <Route path="/" element={<MinimalLayout />}>
        <Route exact path="/login" element={<div>Login</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
