import React, { useContext } from "react";
import { Typography, Box, TextField, Grid } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

export const FormContactInfo = () => {
  const { subtitle } = mystyles();

  const { registerinfo } = useContext(AccountOpeningContext);
  const contactinfo = registerinfo.contactinfo;

  const field = contactinfo.map(({ key, label, value }) => (
    <Grid item key={key} xs={12} sm={6}>
      <TextField
        id={`telnum-${key}`}
        label={label}
        variant="outlined"
        value={value}
        fullWidth
      />
    </Grid>
  ));
  return (
    <Box mb={2}>
      <Typography className={subtitle}>連絡先</Typography>
      <Grid container spacing={3}>
        {field}
      </Grid>
    </Box>
  );
};
