import React from "react";
import { Grid } from "@material-ui/core";
import { HeadLineTitle } from "../atomic/headlinetitle";
import { ToSeeAll } from "../atomic/toseeall";

export const HeadLine = () => {
  return (
    <Grid container justify="space-between">
      <Grid item xs={12} sm={8}>
        <HeadLineTitle />
      </Grid>
      <Grid item>
        <ToSeeAll />
      </Grid>
    </Grid>
  );
};
