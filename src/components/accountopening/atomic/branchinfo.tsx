import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

export const BranchInfo = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const branch = registerinfo.branch.select;

  const handleChange = (e) => {
    console.log(e);
  };

  const array = [
    { key: 1, title: "新橋支店", value: "shinbashi" },
    { key: 2, title: "赤坂支店", value: "akasaka" },
    { key: 3, title: "品川支店", value: "shinagawa" },
  ];

  const menus = array.map(({ key, title, value }) => (
    <MenuItem key={key} value={value}>
      {title}
    </MenuItem>
  ));
  const { selectarea } = mystyles();

  return (
    <FormControl className={selectarea}>
      <InputLabel id="branch-select-helper-label">支店</InputLabel>
      <Select
        labelId="branch-select-helper-label"
        id="branch-select"
        value={branch}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        disabled={isConfirmMode}
      >
        <MenuItem value="">
          <em>選択してください</em>
        </MenuItem>
        {menus}
      </Select>
    </FormControl>
  );
};
