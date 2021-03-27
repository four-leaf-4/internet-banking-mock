import React, { useContext } from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { BirthDay } from "../atomic/birthday";
import { Sex } from "../atomic/sex";
import { Names } from "../atomic/names";
import { mystyles } from "~/styles/makestyles";

export const FormPersonalInfo = () => {
  const { subtitle } = mystyles();

  return (
    <Box mb={3}>
      <Typography className={subtitle}>お客様情報</Typography>
      <Names />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <BirthDay />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Sex />
        </Grid>
      </Grid>
    </Box>
  );
};
