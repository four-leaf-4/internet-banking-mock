import React, { useContext } from "react";
import { Select, MenuItem } from "@material-ui/core";
import arraybankaccounts from "../../searchbankstatement/arraybankaccounts.json";
import { BankaccountContext } from "../bankaccountContext";
import { mystyles } from "~/styles/makestyles";

export const Selectbankaccount = () => {
  const { bankaccount, handleChange } = useContext(BankaccountContext);

  const data = arraybankaccounts;
  const selectMenu = data.map((elm) => (
    <MenuItem key={elm.id} value={elm.id}>
      {elm.accountType}:{elm.accountNumber}
    </MenuItem>
  ));

  return (
    <Select
      labelId="infobankaccount"
      id="infobankaccount-select"
      value={bankaccount}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    >
      {selectMenu}
    </Select>
  );
};
