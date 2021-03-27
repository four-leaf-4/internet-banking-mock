import React from "react";
import { TextField } from "@material-ui/core";

export const Memo = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="input-transfer-memo"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        disabled
      />
    </form>
  );
};
