import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Loadable from "../Helpers/Loadable";
import MinimalLayout from "../layout/MinimalLayout";
import MainLayout from "../layout/MainLayout";
import Courses from "../Components/Courses/Courses";
import Course from "../Components/Courses/Course";
import About from "../Components/About/About";
import Dashboard from "../Components/Dashboard/Dashboard";
import AdminCourse from "../Components/Courses/AdminCourse";
const Home = Loadable(lazy(() => import("../Components/Home/Home")));

export default function ROUTES() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/courses/:id" element={<Course />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/admin"
          element={
            <MinimalLayout>
              <Dashboard />
            </MinimalLayout>
          }
        />
        <Route
          exact
          path="/admin/course"
          element={
            <MinimalLayout>
              <AdminCourse />
            </MinimalLayout>
          }
        />
        <Route
          exact
          path="/admin/course/:courseId"
          element={
            <MinimalLayout>
              <AdminCourse />
            </MinimalLayout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
