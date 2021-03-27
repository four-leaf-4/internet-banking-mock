import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Bankaccountslist } from "./molecular/bankaccountslist2";
import { Headline } from "~/components/transferaccount/atomic/headline";

export const Bankaccounts = () => {
  return (
    <Box mt={3}>
      <Headline prop={{ title: "口座残高" }} />
      <Bankaccountslist />
    </Box>
  );
};
