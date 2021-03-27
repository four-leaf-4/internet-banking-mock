import React, { useContext } from "react";
import { InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

export const Sex = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const sex = registerinfo.personalinfo.sex;
  const { selectarea } = mystyles();

  const handleChange = (e) => {
    console.log(e);
  };

  const array = [
    { key: 1, title: "男性", value: "male" },
    { key: 2, title: "女性", value: "female" },
  ];

  const menus = array.map(({ key, title, value }) => (
    <MenuItem key={key} value={value}>
      {title}
    </MenuItem>
  ));

  return (
    <FormControl className={selectarea}>
      <InputLabel id="demo-simple-select-helper-label">性別</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={sex}
        onChange={handleChange}
        disabled={isConfirmMode}
        variant="outlined"
        fullWidth
      >
        <MenuItem value="">
          <em>選択してください</em>
        </MenuItem>
        {menus}
      </Select>
    </FormControl>
  );
};
