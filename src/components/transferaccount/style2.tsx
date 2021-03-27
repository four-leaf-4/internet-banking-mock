import React from "react";
import { Box } from "@material-ui/core";
import { FormTransferAccount } from "./molecular/formtransferaccount";
import { Headline } from "./atomic/headline";

export const Transferaccount = () => {
  return (
    <Box mb={3}>
      <Headline prop={{ title: "振込先口座" }} />
      <FormTransferAccount />
    </Box>
  );
};
