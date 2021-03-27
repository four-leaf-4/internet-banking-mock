import React, { useState } from "react";
import { Box, MenuItem, Select } from "@material-ui/core";
import arrays from "./arrays.json";

export const WireTransferSelect = () => {
  const targetarray = arrays;

  const [bank, setBank] = useState(targetarray[0].id);

  const handleChange = (event) => {
    setBank(event.target.value);
  };

  const menus = targetarray.map((elm) => (
    <MenuItem key={elm.id} value={elm.id}>
      {elm.title}:{elm.accountNumber}
    </MenuItem>
  ));

  return (
    <Box>
      <Select
        labelId="financial-select-label"
        id="financial-select"
        value={bank}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        disabled
      >
        {menus}
      </Select>
    </Box>
  );
};
