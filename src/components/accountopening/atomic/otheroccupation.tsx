import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";

export const OtherOccupation = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const other = registerinfo.occupation.other;

  return (
    <TextField
      id={`occupation-other`}
      label={"その他を選択された場合こちらに記入"}
      variant="outlined"
      value={other}
      disabled={isConfirmMode}
      fullWidth
    />
  );
};
