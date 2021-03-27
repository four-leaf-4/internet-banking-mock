import React from "react";
import { Box, Grid } from "@material-ui/core";
import { EmailField } from "../atomic/emailfield";

export const EmailForm = () => {
  const fieldsinfo = [
    { id: "email-address", label: "メールアドレス" },
    { id: "confirm-email-address", label: "メールアドレス(確認用)" },
  ];
  console.log(fieldsinfo);
  const fields = fieldsinfo.map((elm) => (
    <Grid item key={elm.id} xs={12} sm={6}>
      <EmailField prop={elm} />
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
