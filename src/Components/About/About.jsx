import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Values from "../Home/Values";

const About = () => {
  return (
    <>
      <Box id="about">
        <Box className="about-banner">
          <Typography
            variant="h1"
            color="white"
            sx={{
              position: "absolute",
              top: "38%",
              left: "15%",
              fontSize: {
                xs: "1.4rem",
                sm: "2rem",
                md: "3rem",
              },
            }}
          >
            About Us
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "auto",
            my: 6,
            mb: 8,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
            }}
          >
            Who We Are?{" "}
          </Typography>
          <Typography
            sx={{
              mt: 3,
              textAlign: "justify",
              fontSize: "1rem",
              color: "#000",
              mb: 6,
            }}
          >
            Company IT is a leading Indian IT training institute preparing
            tech-aspirants for flourishing careers in this challenging and
            competitive domain since 2020. We offer flexible online training
            options that allow our students to study conveniently and progress
            on their preferred pace. Teaching at Company IT is supported by
            years of extensive academic and industry experience, innovative
            teaching methodologies, and high-quality educational resources.{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
