import React from "react";
import { Box, TextField } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const PasswordField = ({ prop }) => {
  const { id, label } = prop;
  const { textfield } = mystyles();

  return (
    <Box>
      <TextField
        id={id}
        label={label}
        variant={"outlined"}
        className={textfield}
      />
    </Box>
  );
};
