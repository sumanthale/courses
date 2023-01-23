import { Divider, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  console.log(location);
  if (location.pathname.includes("admin")) return null;
  else
    return (
      <>
        <Box
          sx={{
            background: "#14181d",
            py: 4,
          }}
        >
          <Box
            sx={{
              width: "85%",
              height: "100%",
              margin: "auto",
              color: "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    height: "50px",
                    width: "100%",
                    background: "#fff",
                    mb: 3,
                  }}
                ></Box>
                <Typography>
                  is a leading Indian IT training institute preparing
                  tech-aspirants for flourishing careers in this challenging and
                  competitive domain since 2020.
                </Typography>
              </Grid>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <Stack sx={{}} spacing={1}>
                  <Typography variant="h2" color="primary">
                    QUICK LINKS
                  </Typography>
                  <Typography>About us</Typography>
                  <Typography>Online Batches</Typography>
                  <Typography>Classroom Batches</Typography>
                  <Typography>Weekend Workshops</Typography>
                  <Typography>Contact Us</Typography>
                </Stack>
              </Grid>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <Stack sx={{}} spacing={1}>
                  <Typography variant="h2" color="primary">
                    QUICK LINKS
                  </Typography>
                  <Typography>About us</Typography>
                  <Typography>Online Batches</Typography>
                  <Typography>Classroom Batches</Typography>
                  <Typography>Weekend Workshops</Typography>
                  <Typography>Contact Us</Typography>
                </Stack>
              </Grid>
              <Grid item lg={2} md={4} sm={6} xs={12}>
                <Stack sx={{}} spacing={1}>
                  <Typography variant="h2" color="primary">
                    QUICK LINKS
                  </Typography>
                  <Typography>About us</Typography>
                  <Typography>Online Batches</Typography>
                  <Typography>Classroom Batches</Typography>
                  <Typography>Weekend Workshops</Typography>
                  <Typography>Contact Us</Typography>
                </Stack>
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Stack sx={{}} spacing={1}>
                  <Typography variant="h2" color="primary">
                    Contact us
                  </Typography>
                  <Typography>About us</Typography>
                  <Typography>Online Batches</Typography>
                  <Typography>Classroom Batches</Typography>
                  <Typography>Weekend Workshops</Typography>
                  <Typography>Contact Us</Typography>
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 6, mb: 3, borderColor: "#333333" }} />
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              © {new Date().getFullYear()} Company Name. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </>
    );
};

export default Footer;
