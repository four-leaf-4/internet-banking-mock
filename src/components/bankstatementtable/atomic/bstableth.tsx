import React, { useState } from "react";
import { TableRow, TableCell } from "@material-ui/core";

export const Bstableth = (prop) => {
  const { date } = prop;
  return (
    <TableCell component="th" scope="row">
      {date}
    </TableCell>
  );
};
