import React from "react";
import { Grid } from "@material-ui/core";
import { HeadLineTitle } from "../atomic/headlinetitle";

export const HeadLine = () => {
  return (
    <Grid container justify="space-between">
      <HeadLineTitle />
    </Grid>
  );
};
