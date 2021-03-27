import React from "react";
import { TableContainer, Table, Paper } from "@material-ui/core";
import { TableHeadLine } from "./molecular/tablehead";
import { TableBodySection } from "./molecular/tablebody";

export const LoginHistoryTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="login history">
        <TableHeadLine />
        <TableBodySection />
      </Table>
    </TableContainer>
  );
};
