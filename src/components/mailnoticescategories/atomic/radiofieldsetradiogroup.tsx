import React, { useContext } from "react";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { MailNoticesContext } from "../mailnoticesContext";

export const RadioFieldSetRadioGroup = ({ prop }) => {
  const { id, value } = prop.elm;
  const targetid = prop.targetid;

  const context = useContext(MailNoticesContext);
  const handleChange = context.handleChange;
  console.log(context);

  return (
    <RadioGroup
      aria-label={id}
      name={id}
      value={value}
      onChange={handleChange(targetid)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FormControlLabel value={"OFF"} control={<Radio />} label="OFF" />
      <FormControlLabel value={"ON"} control={<Radio />} label="ON" />
    </RadioGroup>
  );
};
