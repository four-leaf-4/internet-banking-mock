import React from "react";
import { Box } from "@material-ui/core";
import { EmailField } from "../atomic/emailfield";

export const EmailForm = () => {
  const fieldsinfo = [
    { id: "email-address", label: "メールアドレス" },
    { id: "confirm-email-address", label: "メールアドレス(確認用)" },
  ];
  console.log(fieldsinfo);
  const fields = fieldsinfo.map((elm) => (
    <EmailField key={elm.id} prop={elm} />
  ));

  return <Box component={"form"}>{fields}</Box>;
};
