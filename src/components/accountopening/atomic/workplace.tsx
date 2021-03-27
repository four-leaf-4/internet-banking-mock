import React, { useContext } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";

export const WorkPlace = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const places = registerinfo.occupation.workplace;

  const field = places.map(({ chara, label, input }) => (
    <Grid item xs={12} sm={6} key={chara}>
      <TextField
        id={`place-${chara}`}
        label={label}
        variant="outlined"
        value={input}
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
