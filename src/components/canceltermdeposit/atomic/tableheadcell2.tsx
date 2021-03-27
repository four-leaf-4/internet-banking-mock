import React, { useState } from "react";
import { TableHead, TableRow, TableCell, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Tableheadcell = (prop) => {
  const { tableheadlabel } = mystyles();
  return (
    <TableCell key={prop.data.id}>
      <Typography className={tableheadlabel}>{prop.data.headname}</Typography>
    </TableCell>
  );
};
