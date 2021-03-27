import React from "react";
import { Box, Grid } from "@material-ui/core";
import { HeadLineTitle } from "../atomic/headlinetitle2";
import { ToSeeAll } from "../atomic/toseeall2";

export const HeadLine = () => {
  return (
    <Box my={1}>
      <Grid container justify="space-between">
        <Grid item sm={6}>
          <HeadLineTitle />
        </Grid>
        <Grid item sm={3}>
          <ToSeeAll />
        </Grid>
      </Grid>
    </Box>
  );
};
