import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { FormTransferDetail } from "./molecular/formtransferdetail";
import { mystyles } from "~/styles/makestyles";

export const ConfirmTransferDetail = () => {
  const { subtitle } = mystyles();

  return (
    <Box mb={3}>
      <Typography className={subtitle}>振込内容</Typography>
      <Paper>
        <FormTransferDetail />
      </Paper>
    </Box>
  );
};
