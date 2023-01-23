import React from "react";
import Courses from "../Courses/Courses";
import Slider from "../Slider/Slider";
import Students from "../Slider/Students";
import Training from "./Training";
import Values from "./Values";

const Home = () => {
  return (
    <>
      <Slider />
      <Courses />
      <Values />
      <Training />
      <Students />
    </>
  );
};

export default Home;
