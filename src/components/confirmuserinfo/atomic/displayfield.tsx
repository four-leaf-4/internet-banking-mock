import React from "react";
import { TextField } from "@material-ui/core";

export const DisplayField = ({ prop }) => {
  const { id, label, value } = prop;

  return (
    <TextField
      id={id}
      label={label}
      value={value}
      variant={"outlined"}
      fullWidth
      InputProps={{
        readOnly: true,
      }}
    />
  );
};
