import React from "react";
import { Box } from "@material-ui/core";
import { PasswordField } from "../atomic/passwordfield";

export const PasswordForm = () => {
  const fieldsinfo = [
    { id: "new-password", label: "新しいパスワード" },
    { id: "confirm-new-password", label: "新しいパスワード（確認）" },
  ];

  const fields = fieldsinfo.map((elm) => (
    <PasswordField key={elm.id} prop={elm} />
  ));

  return <Box component={"form"}>{fields}</Box>;
};
