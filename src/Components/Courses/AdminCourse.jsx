import {
  Alert,
  Button,
  Collapse,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useScriptRef from "../../Helpers/useScriptRef";
import { db, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { CloseOutlined } from "@mui/icons-material";
import { doc, setDoc } from "firebase/firestore";
import uniqid from "uniqid";
import { AuthContext } from "../../context/AuthContext";
import Drop from "./DropZone/Drop";
import { data } from "./data";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "video"],
    ["clean"],
  ],
};
const AdminCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [image, setImage] = useState({
    src: "https://cdn1.iconfinder.com/data/icons/rounded-black-basic-ui/139/Photo_Add-RoundedBlack-512.png",
  });
  const [about, setAbout] = useState("");
  const [preReq, setPreReq] = useState("");
  const [learningModules, setLearningModules] = useState("");
  const [rating, setRating] = useState(3);
  const { courses, setCourses } = useContext(AuthContext);

  //   const [downloadCourseContent, setDownloadCourseContent] = useState("");
  const scriptedRef = useScriptRef();

  const navigate = useNavigate();
  useEffect(() => {
    if (courseId && courses.length > 0) {
      console.log("Update Course Page");
      const course = courses.find((course) => course.id === courseId);
      if (course) {
        setCourse(course);
        setRating(course.rating);
        setAbout(course.about);
        setPreReq(course.about);
        setLearningModules(course.about);
        setImage({
          src: course.image,
        });
      } else {
        navigate("/");
      }
    } else {
      setCourse(null);
      setRating(3);
      setAbout("");
      setPreReq("");
      setLearningModules("");
      console.log("Create Course Page");
    }
  }, [courseId, courses]);

  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);

  const handelFormSubmit = async (values) => {
    setLoading(true);
    try {
      const courseObj = {
        ...values,
        about,
        preReq,
        learningModules,
        rating,
      };
      delete courseObj.submit;

      if (image.file) {
        const unid = uniqid();
        let storageRef = ref(storage, unid);

        await uploadBytes(storageRef, image.file);
        console.log("Uploaded a blob or file!");
        const URL = await getDownloadURL(storageRef);
        if (URL) {
          // appendImage(URL, unid);
          courseObj.image = URL;
        } else {
          console.log("Image Failed To Upload");
        }
      } else {
        courseObj.image = image.src;
      }

      if (courseId) {
        courseObj.id = courseId;
        await updateCourse(courseObj);
      } else {
        await createCourse(courseObj);
      }
      console.log(courseObj);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
    setUpdated(true);
  };

  const updateCourse = async (courseObj) => {
    const courseRef = doc(db, "courses", courseId);

    await setDoc(courseRef, courseObj, { merge: true });

    const updatedCourses = courses.map((course) => {
      if (course.id === courseObj.id) {
        return courseObj;
      } else return course;
    });
    setCourses(updatedCourses);
  };

  const createCourse = async (courseObj) => {
    const genratedID = uniqid();
    courseObj.id = genratedID;

    const courseRef = doc(db, "courses", genratedID);
    await setDoc(courseRef, courseObj);

    setCourses((courses) => [...courses, courseObj]);
  };
  // useEffect(() => {
  //   data.forEach((el) => {
  //     createCourse(el);
  //   });
  // }, []);

  return (
    <Box
      sx={{
        py: "20px",
      }}
    >
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography
          sx={{
            textAlign: "center",
          }}
          variant="h1"
          className="test"
          gutterBottom
        >
          {!!courseId ? "Update" : "Create"} Course
        </Typography>
        <Formik
          initialValues={{
            name: course?.name || "",
            price: course?.price || "",
            duration: course?.duration || "",
            link: course?.link || "",
            submit: null,
          }}
          enableReinitialize
          validationSchema={Yup.object().shape({
            name: Yup.string().min(3).max(50).required("Title is required"),
            price: Yup.number().required("Price is required"),
            duration: Yup.number().required("Duration is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              if (scriptedRef.current) {
                setStatus({ success: true });
                setSubmitting(true);
                handelFormSubmit(values);
              }
            } catch (err) {
              console.error(err);
              if (scriptedRef.current) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <FormControl
                fullWidth
                error={Boolean(touched.name && errors.name)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-email-register">
                  Course Name
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-register"
                  type="text"
                  value={values.name}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                />
                {touched.name && errors.name && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
                  >
                    {errors.name}
                  </FormHelperText>
                )}
              </FormControl>

              <Typography variant="h3" sx={{ my: 1 }} component="legend">
                About The Course
              </Typography>
              <ReactQuill
                modules={modules}
                theme="snow"
                onChange={setAbout}
                placeholder="Content goes here..."
                value={about}
              />
              <Typography variant="h3" sx={{ mt: 3, mb: 1 }} component="legend">
                Pre-Requisites
              </Typography>
              <ReactQuill
                modules={modules}
                theme="snow"
                onChange={setPreReq}
                placeholder="Content goes here..."
                value={preReq}
              />
              <Typography variant="h3" sx={{ mt: 3, mb: 1 }} component="legend">
                Learning Modules
              </Typography>
              <ReactQuill
                modules={modules}
                theme="snow"
                onChange={setLearningModules}
                placeholder="Content goes here..."
                value={learningModules}
              />
              <Grid
                container
                columnSpacing={4}
                sx={{
                  my: 2,
                  justifyContent: "flex-start",
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" component="legend">
                    Rating
                  </Typography>

                  <Rating
                    sx={{ width: "100%", ml: 2 }}
                    value={rating}
                    size="large"
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.price && errors.price)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="outlined-adornment-email-register">
                      $ Price
                    </InputLabel>
                    <OutlinedInput
                      type="number"
                      value={values.price}
                      name="price"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.price && errors.price && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text--register"
                      >
                        {errors.price}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl
                    fullWidth
                    error={Boolean(touched.duration && errors.duration)}
                    sx={{ ...theme.typography.customInput }}
                  >
                    <InputLabel htmlFor="outlined-adornment-email-register">
                      Duration
                    </InputLabel>
                    <OutlinedInput
                      type="number"
                      value={values.duration}
                      name="duration"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.duration && errors.duration && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text--register"
                      >
                        {errors.duration}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl
                fullWidth
                error={Boolean(touched.link && errors.link)}
                sx={{ ...theme.typography.customInput }}
              >
                <InputLabel htmlFor="outlined-adornment-email-register">
                  Link
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-register"
                  type="text"
                  value={values.link}
                  name="link"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  inputProps={{}}
                />
                {touched.link && errors.link && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text--register"
                  >
                    {errors.link}
                  </FormHelperText>
                )}
              </FormControl>
              <Drop setImage={setImage} image={image} />
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
              {/* {!!error && (
                <Box sx={{ mt: 2 }}>
                  <FormHelperText
                    sx={{
                      textAlign: "center",
                    }}
                    error
                  >
                    {error}
                  </FormHelperText>
                </Box>
              )} */}
              {loading ? (
                <LinearProgress sx={{ my: 2 }} color="secondary" />
              ) : null}
              <Collapse in={updated}>
                <Alert
                  color="info"
                  action={
                    <IconButton
                      aria-label="close"
                      color="info"
                      size="small"
                      onClick={() => {
                        setUpdated(false);
                      }}
                    >
                      <CloseOutlined fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Course {!!courseId ? "Updated" : "Created"} Successfully!!
                </Alert>
              </Collapse>
              {!updated ? (
                <Stack
                  sx={{ mt: 2, justifyContent: "center" }}
                  spacing={3}
                  direction="row"
                >
                  <Button
                    // disabled
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    {!!courseId ? "Update" : "Create"} Course
                  </Button>
                  <Button
                    // disabled
                    fullWidth
                    size="large"
                    type="button"
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Cancel
                  </Button>
                </Stack>
              ) : (
                <Stack
                  sx={{ mt: 2, justifyContent: "center" }}
                  spacing={3}
                  direction="row"
                >
                  <Button
                    disableElevation
                    // disabled
                    fullWidth
                    size="large"
                    type="button"
                    variant="contained"
                    color="info"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Go Back
                  </Button>
                </Stack>
              )}
            </form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default AdminCourse;
