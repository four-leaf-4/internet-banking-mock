import React from "react";
import { Grid } from "@material-ui/core";
import { ItemBoxTitle } from "../atomic/itemboxtitle";
import { ItemBoxValue } from "../atomic/itemboxvalue";

export const ItemBox = ({ prop }) => {
  const { title, value } = prop;

  return (
    <Grid item xs={12} sm={6}>
      <ItemBoxTitle prop={title} />
      <ItemBoxValue prop={value} />
    </Grid>
  );
};
