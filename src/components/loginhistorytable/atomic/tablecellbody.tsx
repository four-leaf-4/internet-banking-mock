import React from "react";
import { TableCell } from "@material-ui/core";

export const TableCellBody = ({ prop }) => {
  const value = prop;
  return <TableCell>{value}</TableCell>;
};
