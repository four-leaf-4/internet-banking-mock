import React from "react";
import { TextField } from "@material-ui/core";

export const Memo = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="input-transfer-memo"
        // label="Memo"
        multiline
        rows={4}
        defaultValue=""
        fullWidth
        variant="outlined"
      />
    </form>
  );
};
