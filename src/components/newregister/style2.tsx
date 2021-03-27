import React from "react";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Newregister = () => {
  const { responsivebox } = mystyles();
  return (
    <Box p={2} my={2} component="section" bgcolor="primary.light">
      <Typography align="center" variant="h6" component="h2">
        初めてご利用になる方
      </Typography>
      <Box className={responsivebox}>
        <Grid item xs={12}>
          <Box m={10} component="span">
            <Typography variant="subtitle1" component="h3" align="center">
              口座をお持ちでない方
            </Typography>
            <Button variant="contained" color="secondary">
              口座開設＋IDパスワード登録
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={10} component="span">
            <Typography variant="subtitle1" component="h3" align="center">
              口座開設済みの方
            </Typography>
            <Button variant="contained" color="secondary">
              IDパスワード登録
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
