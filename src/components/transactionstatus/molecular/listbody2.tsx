import React, { useState } from "react";
import { Box } from "@material-ui/core";
import arraystatement from "../arraystatement.json";
import { BSLayout } from "../atomic/listitem2";

export const BSstatus = () => {
  const rows = arraystatement;
  const tablebody = rows.map((row) => <BSLayout key={row.key} data={row} />);
  return <Box>{tablebody}</Box>;
};
