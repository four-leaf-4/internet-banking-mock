import React, { useState } from "react";
import { TableRow, TableCell } from "@material-ui/core";

export const Bstabletd = (prop) => {
  const { value } = prop;
  return <TableCell align="right">{value}</TableCell>;
};
