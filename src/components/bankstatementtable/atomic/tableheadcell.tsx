import React, { useState } from "react";
import { TableCell } from "@material-ui/core";

export const Tableheadcell = (prop) => {
  return <TableCell key={prop.data.id}>{prop.data.headname}</TableCell>;
};
