import React, { useState } from "react";
import { TableRow } from "@material-ui/core";
import { Bstableth } from "./bstableth";
import { Bstabletd } from "./bstabletd";

export const BSTablerows = (prop) => {
  const { date, withdraw, deposit, description } = prop.data;
  return (
    <TableRow>
      <Bstableth date={date} />
      <Bstabletd value={withdraw} />
      <Bstabletd value={deposit} />
      <Bstabletd value={description} />
    </TableRow>
  );
};
