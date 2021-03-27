import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { Formbankstatement } from "./molecular/formbankstatement";
import { BankaccountContextProvider } from "./bankaccountContext";

export const Searchbankstatement = () => {
  return (
    <BankaccountContextProvider>
      <Formbankstatement />
    </BankaccountContextProvider>
  );
};
