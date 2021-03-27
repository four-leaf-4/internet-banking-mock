import React from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const EmailField = ({ prop }) => {
  const { id, label } = prop;
  const { textfield } = mystyles();

  return (
    <Box>
      <TextField
        id={id}
        label={label}
        fullWidth
        variant="outlined"
        className={textfield}
      />
    </Box>
  );
};
