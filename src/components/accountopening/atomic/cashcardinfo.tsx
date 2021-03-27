import React, { useContext } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";

export const CashCardInfo = () => {
  const { registerinfo, changeRegisterInfo, isConfirmMode } = useContext(
    AccountOpeningContext,
  );
  const places = registerinfo.cashcard;

  const field = places.map(({ id, label, input }) => (
    <Grid item xs={12} sm={6} key={id}>
      <TextField
        type={"number"}
        name={"cashcard"}
        id={id}
        label={label}
        variant="outlined"
        value={input}
        helperText={"4桁の数字を入力してください"}
        onChange={changeRegisterInfo}
        disabled={isConfirmMode}
        fullWidth
      />
    </Grid>
  ));

  return (
    <Box mb={3}>
      <form>
        <Grid container spacing={3}>
          {field}
        </Grid>
      </form>
    </Box>
  );
};
