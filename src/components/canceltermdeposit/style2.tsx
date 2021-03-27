import React from "react";
import { Paper, TableContainer, Table, Box } from "@material-ui/core";
import { BankaccountContextProvider } from "~/components/searchbankstatement/bankaccountContext";
import { SearchSection } from "./molecular/searchsection";
import { BSTablehead } from "./molecular/tablehead2";
import { BSTablebody } from "./molecular/tablebody2";

export const CancelTermDepositHome = () => {
  return (
    <BankaccountContextProvider>
      <SearchSection />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <BSTablehead />
          <BSTablebody />
        </Table>
      </TableContainer>
    </BankaccountContextProvider>
  );
};
