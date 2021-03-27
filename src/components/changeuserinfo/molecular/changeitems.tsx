import React, { useContext } from "react";
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { ChangeUserInfoContext } from "../changeuserinfoContext";
import { mystyles } from "~/styles/makestyles";

export const ChangeItems = () => {
  const context = useContext(ChangeUserInfoContext);
  const { changeRadio } = context;
  const { changeitems } = context.state;
  const { selectvalue, items } = changeitems;
  const radios = items.map(({ key, label, value }) => (
    <FormControlLabel
      key={key}
      value={value}
      control={<Radio />}
      label={label}
    />
  ));
  const { subtitle } = mystyles();

  return (
    <Box>
      <Typography variant="subtitle2" component="h4" className={subtitle}>
        ご希望の変更項目
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="change-item"
          name="change-item"
          value={selectvalue}
          onChange={changeRadio}
        >
          {radios}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
