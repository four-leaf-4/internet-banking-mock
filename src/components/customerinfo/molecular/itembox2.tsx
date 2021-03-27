import React from "react";
import { Grid } from "@material-ui/core";
import { ItemBoxTitle } from "../atomic/itemboxtitle2";
import { ItemBoxValue } from "../atomic/itemboxvalue2";

export const ItemBox = ({ prop }) => {
  const { title, value } = prop;

  return (
    <Grid item xs={12}>
      <ItemBoxTitle prop={title} />
      <ItemBoxValue prop={value} />
    </Grid>
  );
};
