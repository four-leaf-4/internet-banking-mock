import React, { useState } from "react";
import { TableHead } from "@material-ui/core";
import { Tableheadcells } from "../atomic/tableheadcells2";

export const BSTablehead = () => {
  return (
    <TableHead>
      <Tableheadcells />
    </TableHead>
  );
};
