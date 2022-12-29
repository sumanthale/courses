import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Course from "./CourseItem";
import { data } from "./data";

const Courses = () => {
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
        {data.map((course, idx) => (
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
