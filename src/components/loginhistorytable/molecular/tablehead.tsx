import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
import arrayheadline from "../headlineinfo.json";

export const TableHeadLine = () => {
  const headlineinfo = arrayheadline;

  const rows = headlineinfo.map((elm) => (
    <TableRow key={elm.id}>
      <TableCell>{elm.datetitle}</TableCell>
      <TableCell>{elm.timestamp}</TableCell>
      <TableCell>{elm.devicetitle}</TableCell>
    </TableRow>
  ));

  return <TableHead>{rows}</TableHead>;
};
