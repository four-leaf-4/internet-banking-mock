import React, { useContext } from "react";
import { Box, Typography, TextField, Grid, Paper } from "@material-ui/core";
import { ChangeUserInfoContext } from "../changeuserinfoContext";
import { mystyles } from "~/styles/makestyles";

export const CurrentInfo = () => {
  const context = useContext(ChangeUserInfoContext);
  const { currentinfo } = context.state;
  const fields = currentinfo.map(({ key, id, label, value }) => (
    <Grid item key={key} xs={12} sm={6}>
      <TextField
        id={id}
        label={label}
        value={value}
        variant={"outlined"}
        fullWidth
        InputProps={{
          readOnly: false,
        }}
      />
    </Grid>
  ));
  const { subtitle } = mystyles();

  return (
    <Box>
      <Typography variant="subtitle2" component="h4" className={subtitle}>
        現在の登録情報
      </Typography>
      <Box component={Paper} p={3}>
        <Grid container spacing={3}>
          {fields}
        </Grid>
      </Box>
    </Box>
  );
};
