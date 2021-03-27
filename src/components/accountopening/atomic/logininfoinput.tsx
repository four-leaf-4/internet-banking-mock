import React, { useContext } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";

export const LoginInfoInput = ({ prop }) => {
  const { registerinfo, changeLoginInfo, isConfirmMode } = useContext(
    AccountOpeningContext,
  );
  const register = registerinfo.logininfo[prop];

  const field = register.map(({ key, id, label, input }) => (
    <Grid item xs={12} sm={6} key={key}>
      <TextField
        name={"logininfo"}
        id={id}
        label={label}
        variant="outlined"
        value={input}
        onChange={changeLoginInfo("mailaddress")}
        disabled={isConfirmMode}
        fullWidth
      />
    </Grid>
  ));

  return (
    <Box mb={2}>
      <form>
        <Grid container spacing={3}>
          {field}
        </Grid>
      </form>
    </Box>
  );
};
