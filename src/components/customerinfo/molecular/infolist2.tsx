import React from "react";
import { Grid } from "@material-ui/core";
import { ItemBox } from "./itembox2";

export const InfoList = ({ prop }) => {
  let targetarray = [];
  targetarray = prop;

  const items = targetarray.map((elm, index) => (
    <ItemBox prop={elm} key={index} />
  ));
  return <Grid container>{items}</Grid>;
};
