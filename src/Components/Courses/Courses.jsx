import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Course from "./CourseItem";

const Courses = ({ edit }) => {
  const { courses } = useContext(AuthContext);
  //   const [courses, setCourses] = useState(data);
  return (
    <Box
      sx={{
        mb: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          my: 3,
        }}
      >
        Explore Our Courses
      </Typography>
      <Grid container spacing={2} rowSpacing={3}>
        {courses.map((course, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4} lg={3} sx={{}}>
            <Paper elevation={2}>
              <Course course={course} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
