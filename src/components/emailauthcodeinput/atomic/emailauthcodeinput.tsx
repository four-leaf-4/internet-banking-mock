import React, { useContext } from "react";
import { InputBase } from "@material-ui/core";
import { EmailAuthContext } from "../emailauthContext";
import { mystyles } from "~/styles/makestyles";

export const EmailAuthCodeInput = ({ prop }) => {
  const { id } = prop;
  const { changehundle } = useContext(EmailAuthContext);
  const { pinkey } = mystyles();
  return (
    <InputBase
      id={`code-${id}`}
      // label={`Code-${id}`}
      type={"number"}
      // InputProps={{ inputProps: { min: 0, max: 9 } }}
      onChange={changehundle(id)}
      className={pinkey}
    />
  );
};
