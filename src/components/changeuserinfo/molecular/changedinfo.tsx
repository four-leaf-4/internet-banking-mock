import React, { useContext } from "react";
import { Box, Typography, TextField, Grid } from "@material-ui/core";
import { ChangeUserInfoContext } from "../changeuserinfoContext";
import { mystyles } from "~/styles/makestyles";

export const ChangedInfo = () => {
  const context = useContext(ChangeUserInfoContext);
  const { hundleInput } = context;
  const { changedinfo } = context.state;
  const fields = changedinfo.map(({ key, id, label, value }) => (
    <Grid item key={key} xs={12} sm={6}>
      <TextField
        onChange={hundleInput}
        id={id}
        label={label}
        value={value}
        variant={"outlined"}
        fullWidth
      />
    </Grid>
  ));
  const { subtitle } = mystyles();

  return (
    <Box>
      <Typography variant="subtitle2" component="h4" className={subtitle}>
        変更後の登録情報
      </Typography>
      <Grid container spacing={3}>
        {fields}
      </Grid>
    </Box>
  );
};
