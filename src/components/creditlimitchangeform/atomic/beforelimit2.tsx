import React from "react";
import { ListItem, Grid, TextField, Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const BeforeLimit = ({ prop }) => {
  const beforelimit = prop;
  const { bold } = mystyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <ListItem>変更前限度額</ListItem>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* <ListItem>{beforelimit}</ListItem> */}
        <Box px={2}>
          <TextField
            id="beforelimit"
            type="number"
            variant="outlined"
            fullWidth
            defaultValue={beforelimit}
            InputLabelProps={{
              shrink: true,
            }}
            disabled
          />
        </Box>
      </Grid>
    </Grid>
  );
};
