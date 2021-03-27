import React from "react";
import { TableRow } from "@material-ui/core";
import { TableCellBody } from "../atomic/tablecellbody";

export const TableBodyRow = ({ prop }) => {
  delete prop.id;
  const cells = Object.entries(prop).map(([key, value]) => (
    <TableCellBody key={key} prop={value} />
  ));

  return <TableRow>{cells}</TableRow>;
};
