import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Values from "../Home/Values";
import AboutImg from "../../assets/pictures/about.svg";
import { Mail, Phone } from "@mui/icons-material";

const About = () => {
  return (
    <>
      <Box
        sx={{
          mt: {
            xs: 3,
          },
          mb: 3,
          minHeight: "70vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid container>
          <Grid
            item
            md={6}
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <img loading="lazy" src={AboutImg} alt="About" width={"65%"} />
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  textAlign: "center",
                  color: "#000",
                  mt: 3,
                  fontSize: {
                    xs: "2rem",
                    sm: "4rem",
                    md: "4rem",
                    lg: "4.5rem",
                  },
                }}
              >
                About Us
              </Typography>
              <hr
                style={{
                  height: "clamp(.5rem, .9vw, 1rem)",
                  width: "50%",
                  background: "#2196f3",
                }}
              />
              <Typography
                gutterBottom
                sx={{
                  mt: 3,
                  textAlign: "justify",
                  fontSize: "1rem",
                  color: "#000",
                }}
              >
                LTB Info Tech (Learn the best) is a leading software institure
                providing software training, Project Guidance, Application
                development and servies. We offer flexible Online trainings that
                allow students and working professionals to learn the new
                technologies. Our mission is to educate and train our candidates
                to be learn the real time work and technologies. All the
                trainers in LTB Info Techare working as IT Professionals oin
                various MNCs. The traching menthology is beyond the industry
                standards,
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  my: 2,
                  textAlign: "justify",
                  fontSize: "1rem",
                  color: "#000",
                }}
              >
                We have trained many people across the world
                (USA,UK,Pakisthan,Chaina,India,etc) The training is completely
                industry oriented and interview oriented. Trainees will give the
                confidence that the students can get through any difficult
                interview or any tough job. All the concepts will be taught with
                realtime examples and in an easy way.
              </Typography>

              <a
                href="tel:+91 9398262808"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "clamp(1rem, 2.5vw, 2rem)",

                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <Phone
                  sx={{
                    color: "#2196f3",
                    fontSize: "3rem",
                    mr: 2,
                  }}
                />{" "}
                +91 9398262808
              </a>
              <br />
              <a
                href="mailto:ltbedutech@gmail.com"
                style={{
                  // mt: 3,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "clamp(1rem, 2.5vw, 2rem)",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <Mail
                  sx={{
                    color: "#2196f3",
                    fontSize: "3rem",
                    mr: 2,
                  }}
                />{" "}
                ltbedutech@gmail.com
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
