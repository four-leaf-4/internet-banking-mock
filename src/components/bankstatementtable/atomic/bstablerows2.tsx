import React, { useState } from "react";
import { TableRow } from "@material-ui/core";
import { Bstableth } from "./bstableth";
import { Bstabletd } from "./bstabletd";
import { mystyles } from "~/styles/makestyles";

export const BSTablerows = (prop) => {
  const { date, withdraw, deposit, description } = prop.data;
  const { bordertable } = mystyles();
  return (
    <TableRow className={bordertable}>
      <Bstableth date={date} />
      <Bstabletd value={withdraw} />
      <Bstabletd value={deposit} />
      <Bstabletd value={description} />
    </TableRow>
  );
};
