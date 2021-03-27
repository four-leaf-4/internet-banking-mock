import React, { useContext } from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { PostalCode } from "../atomic/postalcode";
import { Prefectures } from "../atomic/prefectures";
import { Municipality } from "../atomic/municipality";
import { mystyles } from "~/styles/makestyles";

export const FormAddress = () => {
  const { subtitle } = mystyles();

  return (
    <Box>
      <Typography className={subtitle}>住所</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <PostalCode />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Prefectures />
        </Grid>
        <Grid item xs={12}>
          <Municipality prop={"municipality"} />
        </Grid>
        <Grid item xs={12}>
          <Municipality prop={"housenumber"} />
        </Grid>
        <Grid item xs={12}>
          <Municipality prop={"buildingname"} />
        </Grid>
      </Grid>
    </Box>
  );
};
