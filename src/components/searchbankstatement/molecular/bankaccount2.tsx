import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { Selectbankaccount } from "../atomic/selectbankaccount";
import { mystyles } from "~/styles/makestyles";

export const Bankaccount = () => {
  const { subtitle } = mystyles();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <Typography variant="caption" component="h4" className={subtitle}>
        口座情報
      </Typography>
      <Selectbankaccount />
    </Box>
  );
};
