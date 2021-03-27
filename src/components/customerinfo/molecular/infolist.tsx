import React from "react";
import { Grid } from "@material-ui/core";
import { ItemBox } from "./itembox";

export const InfoList = ({ prop }) => {
  let targetarray = [];
  targetarray = prop;

  const items = targetarray.map((elm, index) => (
    <ItemBox prop={elm} key={index} />
  ));
  return (
    <Grid container spacing={1}>
      {items}
    </Grid>
  );
};
