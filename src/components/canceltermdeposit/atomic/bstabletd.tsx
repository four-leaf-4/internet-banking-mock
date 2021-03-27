import React from "react";
import { TableCell } from "@material-ui/core";

export const Bstabletd = (prop) => {
  const { value } = prop;
  return <TableCell align="right">{value}</TableCell>;
};
