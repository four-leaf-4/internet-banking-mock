import React from "react";
import { Box } from "@material-ui/core";
import { Bankaccount } from "~/components/searchbankstatement/molecular/bankaccount";
import { DisplayBtn } from "../atomic/displaybtn";

export const SearchSection = () => {
  return (
    <Box mb={3}>
      <Bankaccount />
      <DisplayBtn />
    </Box>
  );
};
