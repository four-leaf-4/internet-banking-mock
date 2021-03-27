import React, { useState } from "react";
import { MenuItem, Select, Box, Typography, Grid } from "@material-ui/core";
import arrays from "./arrays.json";

export const Selectfinancial = ({ prop }) => {
  const { value } = prop;
  const banks = arrays.arraybanks;
  const bankbranch = arrays.arraybankbranch;
  const accountsTitles = arrays.arrayaccountsTitles;
  const accountNumber = arrays.arrayaccountNumber;

  let targetarray;
  switch (value) {
    case "金融機関":
      targetarray = banks;
      break;
    case "支店":
      targetarray = bankbranch;
      break;
    case "科目":
      targetarray = accountsTitles;
      break;
    case "口座番号":
      targetarray = accountNumber;
      break;
    default:
      break;
  }

  const stateDefault = targetarray[0].value;

  const [bank, setBank] = useState(stateDefault);

  const handleChange = (event) => {
    setBank(event.target.value);
  };

  const menus = targetarray.map((elm) => (
    <MenuItem key={elm.id} value={elm.value}>
      {elm.title}
    </MenuItem>
  ));

  return (
    <Box pb={3}>
      <Grid container justify="space-between">
        <Grid item xs={3}>
          <Typography variant="subtitle2" component="h4">
            {value}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Select
            id="financial-select"
            value={bank}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            disabled
          >
            {menus}
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
};
