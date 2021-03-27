import React from "react";
import { Box, Grid } from "@material-ui/core";
import { PasswordField } from "../atomic/passwordfield";

export const PasswordForm = () => {
  const fieldsinfo = [
    { id: "new-password", label: "新しいパスワード" },
    { id: "confirm-new-password", label: "新しいパスワード（確認）" },
  ];

  const fields = fieldsinfo.map((elm) => (
    <Grid item key={elm.id} xs={12} sm={6}>
      <PasswordField key={elm.id} prop={elm} />
    </Grid>
  ));

  return (
    <Box component={"form"}>
      <Grid container spacing={3}>
        {fields}
      </Grid>
    </Box>
  );
};
