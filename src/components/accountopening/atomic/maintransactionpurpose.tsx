import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

export const MainTransactionPurpose = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const purpose = registerinfo.transactionpurpose.select;
  const { selectarea } = mystyles();

  const handleChange = (e) => {
    console.log(e);
  };

  const array = [
    { key: 1, title: "生活費", value: "costofliving" },
    { key: 2, title: "送金", value: "send" },
    { key: 3, title: "その他", value: "other" },
  ];

  const menus = array.map(({ key, title, value }) => (
    <MenuItem key={key} value={value}>
      {title}
    </MenuItem>
  ));
  return (
    <FormControl className={selectarea}>
      <InputLabel id="occupation-select-helper-label">主な取引目的</InputLabel>
      <Select
        labelId="occupation-select-helper-label"
        id="occupation-select"
        value={purpose}
        variant="outlined"
        onChange={handleChange}
        disabled={isConfirmMode}
        fullWidth
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menus}
      </Select>
    </FormControl>
  );
};
