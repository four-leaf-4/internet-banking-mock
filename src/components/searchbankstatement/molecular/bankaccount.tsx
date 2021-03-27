import React, { useState } from "react";
import { FormControl, Box, Typography } from "@material-ui/core";
// import { Labelbankaccount } from "../atomic/labelbankaccount"
import { Selectbankaccount } from "../atomic/selectbankaccount";

export const Bankaccount = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <Typography variant="subtitle2" component="h4">
        口座情報
      </Typography>
      <Selectbankaccount />
    </Box>
  );
};
