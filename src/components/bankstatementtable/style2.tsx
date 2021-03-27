import React, { useState } from "react";
import { Paper, TableContainer, Table, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { BSTablehead } from "./molecular/tablehead2";
import { BSTablebody } from "./molecular/tablebody2";
import arraystatement from "./arraystatement.json";
import { mystyles } from "../../styles/makestyles";

export const Bankstatementtable = () => {
  const { pagenation } = mystyles();
  const rows = arraystatement;
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <BSTablehead />
          <BSTablebody />
        </Table>
      </TableContainer>
      <Box className={pagenation}>
        <Pagination count={10} size="small" />
      </Box>
    </Box>
  );
};
