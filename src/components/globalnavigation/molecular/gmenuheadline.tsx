import React from "react";
import { Box } from "@material-ui/core";
import { Customername } from "../atomic/customername";
import { Branch } from "../atomic/branch";
import { Account } from "../atomic/account";

export const Gmenuheadline = () => {
  return (
    <Box bgcolor="primary.base" p={1}>
      <Customername />
      <Branch />
      <Account />
    </Box>
  );
};

export default Gmenuheadline;
