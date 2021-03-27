import React from "react";
import { Box } from "@material-ui/core";
import { Aboutstoptime } from "../atomic/aboutstoptime";
import { Contact } from "../atomic/contact";

export const Gmenunotices = () => {
  return (
    <Box>
      <Aboutstoptime />
      <Contact />
    </Box>
  );
};

export default Gmenunotices;
