import React from "react";

import { Box, Grid, Typography } from "@mui/material";
const Values = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        my: 10,
        width: "80%",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
        }}
      >
        The Bright Place to Build The Best Career Value
      </Typography>
      <Typography
        sx={{
          mb: 3,
          textAlign: "center",
          fontSize: "1.15rem",
          mt: 0.5,
        }}
      >
        Best Opportunity To Learn From Currently Working Professionals
      </Typography>
      <Box>
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
              style={{
                background: "#35cc57",
              }}
              className="main-item box-bg1"
            >
              <span className="icon feature_box_col_one">
                <img
                  data-src="https://www.ashokitech.com/assets/frontend/images/classroom-training.png"
                  alt="classroom-training"
                  className="center serviceImg lazyloaded"
                  loading="lazy"
                  src="https://www.ashokitech.com/assets/frontend/images/classroom-training.png"
                />
              </span>
              <div className="ml-3">
                <h3>Online Training</h3>
              </div>
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
              style={{
                background: "#4589c1",
              }}
              className="main-item box-bg2"
            >
              <span className="icon feature_box_col_two">
                <img
                  data-src="https://www.ashokitech.com/assets/frontend/images/on-campus-training.png"
                  alt="classroom-training"
                  className="center serviceImg lazyloaded"
                  loading="lazy"
                  src="https://www.ashokitech.com/assets/frontend/images/on-campus-training.png"
                />
              </span>
              <div className="ml-3">
                <h3>Classroom Training</h3>
              </div>
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
              style={{
                background: "#e25118",
              }}
              className="main-item box-bg3"
            >
              <span className="icon feature_box_col_three">
                <img
                  data-src="https://www.ashokitech.com/assets/frontend/images/corporate-training.png"
                  alt="classroom-training"
                  className="center serviceImg lazyloaded"
                  loading="lazy"
                  src="https://www.ashokitech.com/assets/frontend/images/corporate-training.png"
                />
              </span>
              <div className="ml-3">
                <h3>Corporate Training</h3>
              </div>
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
              style={{
                background: "#8864c3",
              }}
              className="main-item box-bg4"
            >
              <span className="icon feature_box_col_four">
                <img
                  data-src="https://www.ashokitech.com/assets/frontend/images/conference.png"
                  alt="conference"
                  className="center serviceImg lazyloaded"
                  loading="lazy"
                  src="https://www.ashokitech.com/assets/frontend/images/conference.png"
                />
              </span>
              <div className="ml-3">
                <h3>Weekend Workshops</h3>
              </div>
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
              style={{
                background: "#e25118",
              }}
              className="main-item box-bg5"
            >
              <span className="icon feature_box_col_five">
                <img
                  data-src="https://www.ashokitech.com/assets/frontend/images/recruitment.png"
                  alt="recruitment"
                  className="center serviceImg lazyloaded"
                  loading="lazy"
                  src="https://www.ashokitech.com/assets/frontend/images/recruitment.png"
                />
              </span>
              <div className="ml-4">
                <h3>Placement</h3>
              </div>
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
              className="main-item box-bg6"
              style={{
                background: "#27ab9b",
              }}
            >
              <span className="icon feature_box_col_six">
                <img
                  data-src="https://www.ashokitech.com/assets/frontend/images/expert.png"
                  alt="expert"
                  className="center serviceImg lazyloaded"
                  loading="lazy"
                  src="https://www.ashokitech.com/assets/frontend/images/expert.png"
                />
              </span>
              <div className="ml-3">
                <h3>Internships</h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Values;
