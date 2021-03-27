import React, { useState } from "react";
import { TableCell, Typography } from "@material-ui/core";

export const Tableheadcell = (prop) => {
  return (
    <TableCell key={prop.data.id}>
      <Typography variant="subtitle2">{prop.data.headname}</Typography>
    </TableCell>
  );
};
