import React, { useContext } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";

export const Municipality = ({ prop }) => {
  const target = prop;
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const targetvaluse = registerinfo.address[target];

  const field = targetvaluse.map(({ chara, input, label }) => (
    <Grid item xs={12} sm={6} key={chara}>
      <TextField
        id={`${target}-${chara}`}
        label={label}
        variant="outlined"
        value={input}
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
