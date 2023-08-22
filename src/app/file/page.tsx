import React from "react";
import Navbar from "./navbar";
import { Box } from "@mui/material";
import MainLab from "./main";

const MainFile = () => {
  return (
    <>
      <Box className="main_file">
        <Navbar />
        <MainLab />
      </Box>
    </>
  );
};

export default MainFile;
