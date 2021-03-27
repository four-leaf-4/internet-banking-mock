import React, { useContext } from "react";
import { Box, Grid, TextField } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";

export const Names = () => {
  const { registerinfo, isConfirmMode } = useContext(AccountOpeningContext);
  const names = registerinfo.personalinfo.name;

  const field = names.map(({ chara, first, last, labelfirst, labellast }) => (
    <Grid key={chara} item xs={12} sm={6}>
      <Box mb={2}>
        <TextField
          id={`name-${chara}-first`}
          label={labelfirst}
          variant="outlined"
          value={first}
          disabled={isConfirmMode}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <TextField
          id={`name-${chara}-last`}
          label={labellast}
          variant="outlined"
          value={last}
          disabled={isConfirmMode}
          fullWidth
        />
      </Box>
    </Grid>
  ));

  return (
    <form>
      <Grid container spacing={3}>
        {field}
      </Grid>
    </form>
  );
};
