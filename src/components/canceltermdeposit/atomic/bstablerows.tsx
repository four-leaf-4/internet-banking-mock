import React from "react";
import { TableRow } from "@material-ui/core";
import { Bstabletd } from "./bstabletd";
import { CancelBtn } from "./cancelbtn";

export const BSTablerows = (prop) => {
  const {
    date,
    depositNumber,
    deposit,
    term,
    interestRate,
    cancelable,
  } = prop.data;

  return (
    <TableRow>
      <Bstabletd value={depositNumber} />
      <Bstabletd value={deposit} />
      <Bstabletd value={date} />
      <Bstabletd value={term} />
      <Bstabletd value={interestRate} />
      <CancelBtn cancelable={cancelable} />
    </TableRow>
  );
};
