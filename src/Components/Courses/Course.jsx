import { ExpandMore, LiveTv, Visibility } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Course = () => {
  const { id } = useParams();
  const { courses } = useContext(AuthContext);

  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id && courses.length > 0) {
      const course = courses.find((el) => el.id === id);
      if (course) {
        setCourse(course);
      } else {
        navigate("/");
      }
    }
  }, [id, courses]);

  return (
    <>
      {!!course && (
        <>
          <Box
            sx={{
              height: {
                sm: "50vh",
                md: "40vh",
              },
              background:
                "url(https://images.unsplash.com/photo-1617634795446-b58c985ec639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              p: 3,
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Grid item sm={12} md={7} sx={{ mb: 2 }}>
                <Typography gutterBottom variant="h1" color={"white"}>
                  {course.name}
                </Typography>

                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <LiveTv /> &nbsp;&nbsp;<Typography>Live Course </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    <Visibility />
                    &nbsp;&nbsp;
                    <Typography>Free Preview Available</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm={12}
                md={5}
                sx={{
                  height: "70%",
                  width: {
                    lg: "400px",
                  },
                  boxShadow: `rgb(0 0 0 / 35%) 0px 5px 15px`,
                  background: "#6c6c6c",
                  color: "#FFF",
                  display: "flex",
                  p: 3,
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Stack>
                  <Typography gutterBottom>
                    Duration: {course.duration} Months
                  </Typography>
                  <Typography gutterBottom>Price: ₹ {course.price}</Typography>
                  <Rating value={course.rating} readOnly />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      my: 1,
                    }}
                  >
                    Watch Demo Class
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    sx={{
                      my: 1,
                    }}
                  >
                    Download Course Content
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Typography
            variant="h1"
            sx={{
              my: 3,
              textAlign: "center",
            }}
          >
            About Course
          </Typography>

          <Box
            sx={{
              p: 3,
            }}
          >
            <Accordion
              sx={{
                background: "#eee",
                outline: "1px solid #eee",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>About The Course</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#fff",
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: course.about }}></div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#eee",
                outline: "1px solid #eee",
                mt: 2,
                "::before": {
                  background: "transparent",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Pre-Requisites</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#fff",
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: course.preReq }}></div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#eee",
                outline: "1px solid #eee",
                mt: 2,
                "::before": {
                  background: "transparent",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Learning Modules</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#fff",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: course.learningModules }}
                ></div>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Typography
            variant="h1"
            sx={{
              my: 3,
              textAlign: "center",
            }}
          >
            Training Features
          </Typography>

          <Box sx={{}}>
            <Grid container spacing={2}>
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="item box-bg1"
                  style={{
                    background: "#a1c163",
                  }}
                >
                  {" "}
                  <span className="icon feature_box_col_four">
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/learn_from_home.png"
                      alt="learn from home"
                    />
                  </span>
                  <Typography gutterBottom variant="h3" color="white">
                    Learn from home
                  </Typography>
                  <Typography>Stay safe indoors.</Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="item box-bg2"
                  style={{
                    background: "#759cbc",
                  }}
                >
                  {" "}
                  <span className="icon feature_box_col_four">
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/beginner_friendly.png"
                      alt="beginner friendly"
                    />
                  </span>
                  <Typography gutterBottom variant="h3" color="white">
                    Beginner friendly
                  </Typography>
                  <Typography>No prior knowledge required</Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="item box-bg3"
                  style={{
                    background: "#dbba5d",
                  }}
                >
                  {" "}
                  <span className="icon feature_box_col_four">
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/doubt_clearing.png"
                      alt="doubt clearing"
                    />
                  </span>
                  <Typography gutterBottom variant="h3" color="white">
                    Doubt clearing
                  </Typography>
                  <Typography>Through Q&amp;A forum</Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="item box-bg4"
                  style={{
                    background: "#698296",
                  }}
                >
                  {" "}
                  <span className="icon feature_box_col_four">
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/projects.png"
                      alt="projects"
                    />
                  </span>
                  <Typography gutterBottom variant="h3" color="white">
                    Build a projects
                  </Typography>
                  <Typography>For hands-on practice.</Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="item box-bg5"
                  style={{
                    background: "#dd967a",
                  }}
                >
                  {" "}
                  <span className="icon feature_box_col_four">
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/downloadable_content.png"
                      alt="downloadable content"
                    />
                  </span>
                  <Typography gutterBottom variant="h3" color="white">
                    Downloadable content
                  </Typography>
                  <Typography>With lifetime access</Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="item box-bg6"
                  style={{
                    background: "#5abfb3",
                  }}
                >
                  {" "}
                  <span className="icon feature_box_col_four">
                    <img
                      src="https://www.ashokitech.com/assets/frontend/images/beginner_friendly-1.png"
                      alt="beginner friendly1"
                    />
                  </span>
                  <Typography gutterBottom variant="h3" color="white">
                    Course Completion Certificate
                  </Typography>
                  <Typography>from Company IT</Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Typography
            variant="h1"
            sx={{
              my: 3,
              textAlign: "center",
            }}
          >
            Frequently asked questions
          </Typography>
          <Box
            sx={{
              p: 3,
            }}
          >
            <Accordion
              sx={{
                background: "#eee",
                outline: "1px solid #eee",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>How can I practise?</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#fff",
                }}
              >
                <div>
                  Students can benefit from our State of the art lab
                  infrastructure facilities at all our training centers across
                  the city. Our lab facilities are available through the day on
                  all working days. For our online students, they can connect to
                  our servers and other lab facilities over the internet and
                  practice. These facilities are available 24X7
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#eee",
                outline: "1px solid #eee",
                mt: 2,
                "::before": {
                  background: "transparent",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What if I miss one (or) more class?</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#fff",
                }}
              >
                <div>
                  If the student misses out of attending any session, he or she
                  can re-attend the session by:
                  <ol>
                    <li>
                      Attending the same session in another batch if student is
                      attending classroom based session.
                    </li>
                    <li>
                      For online sessions, recording of the classes can be
                      accessed by the student at all time to help revisit and
                      listen the sessions missed out
                    </li>
                  </ol>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#eee",
                outline: "1px solid #eee",
                mt: 2,
                "::before": {
                  background: "transparent",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  What are the modes of training for this course
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#fff",
                }}
              >
                <div>
                  All training programs conducted by Quality Thought are
                  available in 3 modes, instructor based classroom programs,
                  instructor based live online training and self-paced video
                  based training. Students can choose
                </div>
              </AccordionDetails>
            </Accordion>
          </Box>
        </>
      )}
    </>
  );
};

export default Course;
