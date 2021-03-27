import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";

export const TelNumberWork = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const telnumber = registerinfo.occupation.telnumber;

  return (
    <TextField
      id={"telnumber-work"}
      label={"勤務先もしくは学校の電話番号"}
      variant="outlined"
      value={telnumber}
      disabled={isConfirmMode}
      fullWidth
    />
  );
};
