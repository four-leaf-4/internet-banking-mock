import React, { useContext } from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { Occupation } from "../atomic/occupation";
import { OtherOccupation } from "../atomic/otheroccupation";
import { WorkPlace } from "../atomic/workplace";
import { TelNumberWork } from "../atomic/telnumberwork";
import { mystyles } from "~/styles/makestyles";

export const FormOccupation = () => {
  const { subtitle } = mystyles();

  return (
    <Box>
      <Typography className={subtitle}>職業</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Occupation />
        </Grid>
        <Grid item xs={12} sm={6}>
          <OtherOccupation />
        </Grid>
        <Grid item xs={12}>
          <WorkPlace />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TelNumberWork />
        </Grid>
      </Grid>
    </Box>
  );
};
