import React from "react";
import { Box, Typography } from "@material-ui/core";
import { WireTransferSelect } from "../atomic/wiretransferselect";
import { FormTransferPrice as WireTransferPrice } from "~/components/transferdetail/atomic/formtransferprice";

export const FormWireTransferAccount = () => {
  return (
    <Box p={3}>
      <Box mb={3}>
        <Typography variant="subtitle2" component="h4">
          振替先口座
        </Typography>
        <WireTransferSelect />
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle2" component="h4">
          金額
        </Typography>
        <WireTransferPrice />
      </Box>
    </Box>
  );
};
