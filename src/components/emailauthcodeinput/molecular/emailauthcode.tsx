import React, { useContext } from "react";
import { EmailAuthCodeInput } from "../atomic/emailauthcodeinput";
import { EmailAuthContext } from "../emailauthContext";

export const EmailAuthCode = () => {
  const { state } = useContext(EmailAuthContext);
  const codes = state;

  const codesfield = codes.map((elm) => (
    <EmailAuthCodeInput key={elm.id} prop={elm} />
  ));

  return (
    <form noValidate autoComplete="off">
      {codesfield}
    </form>
  );
};
