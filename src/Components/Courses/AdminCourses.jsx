import { Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box, Rating } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { deleteCourse } from "../../api/api";
const AdminCourses = ({ edit }) => {
  const { courses, setCourses } = useContext(AuthContext);

  return (
    <Box
      sx={{
        my: 3,
      }}
    >
      <Grid container spacing={2} rowSpacing={3}>
        {courses.map((course, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={2}>
              <CourseItem course={course} setCourses={setCourses} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminCourses;

function CourseItem({ course, setCourses }) {
  const navigate = useNavigate();
  const handelDelete = async (id) => {
    if (
      window.confirm("Are you sure you want to delete this course?") === true
    ) {
      const data = await deleteCourse(course.id);
      if (data) {
        setCourses((courses) => courses.filter((crs) => crs.id !== course.id));
      }
    }
  };
  return (
    <Card
      sx={{
        maxWidth: "100%",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={course.image}
      />
      <CardContent
        sx={{
          p: 2,
          pb: 0,
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "39.5px",
          }}
        >
          {course.name}
          <Rating value={course.rating} readOnly />
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Duration: {course.duration} Months
        </Typography>
        <Typography variant="h3">
          ₹ {course.price}
          {"  "} &nbsp;
          <span
            style={{
              textDecoration: "line-through",
              color: "red",
              fontSize: "1.6rem",
            }}
          >
            ₹ {course.price + (20 / 100) * course.price}
          </span>
        </Typography>
      </CardContent>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<Edit />}
          sx={{
            mb: 2,
          }}
          onClick={() => {
            navigate("/admin/course/" + course.id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          fullWidth
          startIcon={<Delete />}
          onClick={handelDelete}
        >
          Delete
        </Button>
      </Box>
    </Card>
  );
}
