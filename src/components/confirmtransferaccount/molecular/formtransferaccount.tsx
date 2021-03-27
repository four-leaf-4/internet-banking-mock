import React from "react";
import { Box } from "@material-ui/core";
import { Selectfinancial } from "../atomic/selectfinancial";

export const FormTransferAccount = () => {
  return (
    <Box p={3}>
      <Selectfinancial prop={{ value: "金融機関" }} />
      <Selectfinancial prop={{ value: "支店" }} />
      <Selectfinancial prop={{ value: "科目" }} />
      <Selectfinancial prop={{ value: "口座番号" }} />
    </Box>
  );
};
