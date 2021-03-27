import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";

export const Withdrawlistitem = ({ prop }) => {
  const { dt, dd } = prop;
  return (
    <Box p={3}>
      <Grid container>
        <Grid item xs={6}>
          <Box component={"dt"}>{dt}</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component={"dd"} textAlign="right">
            {dd}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
