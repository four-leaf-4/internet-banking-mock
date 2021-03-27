import React from "react";
import { Box, Paper } from "@material-ui/core";
import { FormTransferAccount } from "./molecular/formtransferaccount";
import { Headline } from "./atomic/headline";

export const ConfirmTransferaccount = () => {
  return (
    <Box mb={3}>
      <Headline prop={{ title: "振込先口座" }} />
      <Paper>
        <FormTransferAccount />
      </Paper>
    </Box>
  );
};
