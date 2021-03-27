import React from "react";
import { TableCell } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Bstabletd = (prop) => {
  const { value } = prop;
  const { bold } = mystyles();
  return (
    <TableCell align="center" className={bold}>
      {value}
    </TableCell>
  );
};
