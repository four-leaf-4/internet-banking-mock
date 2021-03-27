import React from "react";
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { EmergencyStopBtn } from "./atomic/emergencystopbtn";
import { Description } from "./molecular/description";

export const Emergencystop = () => {
  const { emergencystoparea } = mystyles();

  return (
    <Box className={emergencystoparea} bgcolor="primary.light" p={1}>
      <EmergencyStopBtn />
      <Description />
    </Box>
  );
};
