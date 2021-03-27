import React from "react";
import { TableRow } from "@material-ui/core";
import { TableCellBody } from "../atomic/tablecellbody";
import { mystyles } from "~/styles/makestyles";

export const TableBodyRow = ({ prop }) => {
  delete prop.id;

  const { bordertable } = mystyles();

  const cells = Object.entries(prop).map(([key, value]) => (
    <TableCellBody key={key} prop={value} />
  ));

  return <TableRow className={bordertable}>{cells}</TableRow>;
};
