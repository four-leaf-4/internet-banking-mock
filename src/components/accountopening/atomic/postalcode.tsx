import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";

export const PostalCode = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const pcode = registerinfo.address.postalcode;

  return (
    <TextField
      id={"postalcode"}
      label={"郵便番号"}
      variant="outlined"
      value={pcode}
      disabled={isConfirmMode}
      fullWidth
    />
  );
};
