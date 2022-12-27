import { Box, Button, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import React from "react";
import Header from "../Header/Header";
import { ColorModeContext } from "../../themes/colorModeContext";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
