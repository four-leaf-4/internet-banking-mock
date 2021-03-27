import React from "react";
import { Box } from "@material-ui/core";
import { Bankaccountslist } from "./molecular/bankaccountslist";
import { Headline } from "~/components/transferaccount/atomic/headline";

export const Bankaccounts = () => {
  return (
    <Box mt={3}>
      <Headline prop={{ title: "口座残高" }} />
      <Bankaccountslist />
    </Box>
  );
};
