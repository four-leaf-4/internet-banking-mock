import React from "react";
import { Box, Typography } from "@material-ui/core";
import { FormTransferPrice } from "~/components/common/disabledformtransferprice";
import { TransferFee } from "../atomic/transferfee";
import { Datepicker } from "~/components/common/disableddatepicker";
import { Memo } from "~/components/common/disabledmemo";

export const FormTransferDetail = () => {
  return (
    <Box p={3}>
      <Box mb={3}>
        <Typography variant="subtitle2" component="h4">
          振込金額
        </Typography>
        <FormTransferPrice />
      </Box>
      <Box mb={3} textAlign="right">
        <Typography align="left" variant="subtitle2" component="h4">
          振込手数料
        </Typography>
        <TransferFee />
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle2" component="h4">
          振込指定日
        </Typography>
        <Datepicker />
      </Box>
      <Box mb={3}>
        <Typography variant="subtitle2" component="h4">
          メモ
        </Typography>
        <Memo />
      </Box>
    </Box>
  );
};
