import React, { useState } from "react";
import { TableBody } from "@material-ui/core";
import arraystatement from "../arraystatement.json";
import { BSTablerows } from "../atomic/bstablerows";
import { mystyles } from "~/styles/makestyles";

export const BSTablebody = () => {
  const { table } = mystyles();
  const rows = arraystatement;
  const tablebody = rows.map((row) => <BSTablerows key={row.key} data={row} />);
  return <TableBody className={table}>{tablebody}</TableBody>;
};
