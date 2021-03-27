import React, { useContext } from "react";
import { Typography, Box } from "@material-ui/core";
import { CashCardInfo } from "../atomic/cashcardinfo";
import { mystyles } from "~/styles/makestyles";

export const FormCashcardInfo = () => {
  const { subtitle } = mystyles();

  return (
    <Box>
      <Typography className={subtitle}>キャッシュカード</Typography>
      <CashCardInfo />
    </Box>
  );
};
