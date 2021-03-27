import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { Typography, Button, Box, Grid, Link } from "@material-ui/core";

export const NoAccount = () => {
  const toPath = "/accountopening";
  return (
    <Grid item xs={12}>
      <Box m={10} component="span">
        <Typography variant="subtitle1" component="h3" align="center">
          <Box color="primary.dark">口座をお持ちでない方</Box>
        </Typography>
        <Button variant="contained" color="secondary">
          <Link component={Gatsbylink} to={toPath}>
            口座開設＋IDパスワード登録
          </Link>
        </Button>
      </Box>
    </Grid>
  );
};
