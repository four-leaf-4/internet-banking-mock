import React from "react";
import { Typography, Button, Box, Grid } from "@material-ui/core";

export const OpenedAccount = () => {
  return (
    <Grid item xs={12}>
      <Box m={10} component="span">
        <Typography variant="subtitle1" component="h3" align="center">
          <Box color="primary.dark">口座開設済みの方</Box>
        </Typography>
        <Button variant="contained" color="secondary">
          IDパスワード登録
        </Button>
      </Box>
    </Grid>
  );
};
