import React from "react";
import { FormControl, Box, Grid } from "@material-ui/core";
import { RadioFieldSetTitle } from "../atomic/radiofieldsettitle2";
import { RadioFieldSetRadioGroup } from "../atomic/radiofieldsetradiogroup2";

export const RadioFieldSet = ({ prop }) => {
  const targetarray = prop.values;
  const targetid = prop.id;

  const items = targetarray.map((elm, index) => (
    <Grid key={index} component={FormControl} item sm={6} xs={12}>
      <RadioFieldSetTitle prop={elm.title} />
      <RadioFieldSetRadioGroup prop={{ elm, targetid }} />
    </Grid>
  ));

  return (
    <Box mb={3}>
      <Grid container spacing={3}>
        {items}
      </Grid>
    </Box>
  );
};
