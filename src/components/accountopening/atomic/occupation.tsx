import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

export const Occupation = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const occupation = registerinfo.occupation.select;
  const { selectarea } = mystyles();

  const handleChange = (e) => {
    console.log(e);
  };

  const array = [
    { key: 1, title: "会社員", value: "kaisyain" },
    { key: 2, title: "公務員", value: "koumuin" },
    { key: 3, title: "その他", value: "other" },
  ];

  const menus = array.map(({ key, title, value }) => (
    <MenuItem key={key} value={value}>
      {title}
    </MenuItem>
  ));

  return (
    <FormControl className={selectarea}>
      <InputLabel id="occupation-select-helper-label">職業</InputLabel>
      <Select
        labelId="occupation-select-helper-label"
        id="occupation-select"
        value={occupation}
        onChange={handleChange}
        disabled={isConfirmMode}
        fullWidth
        variant="outlined"
      >
        <MenuItem value="">
          <em>選択してください</em>
        </MenuItem>
        {menus}
      </Select>
    </FormControl>
  );
};
