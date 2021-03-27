import React from "react";
import { Link as gatsbylink } from "gatsby";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Newregister = () => {
  const { responsivebox } = mystyles();
  return (
    <Box p={2} my={2} component="section" bgcolor="primary.light">
      <Typography align="center" variant="h6" component="h2">
        <Box color="primary.dark">
          初めてご利用になる方(TrustIDを登録済みの方)
        </Box>
      </Typography>
      <Box className={responsivebox}>
        <Grid item xs={12}>
          <Box m={10} component="span">
            <Typography variant="subtitle1" component="h3" align="center">
              <Box color="primary.dark">口座をお持ちでない方</Box>
            </Typography>
            <Box display="flex">
              <Button
                variant="contained"
                color="secondary"
                component={gatsbylink}
                to={"/accountopening"}
              >
                口座開設＋TrustID連携
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box m={10} component="span">
            <Typography variant="subtitle1" component="h3" align="center">
              <Box color="primary.dark">口座開設済みの方</Box>
            </Typography>
            <Box display="flex">
              <Button
                variant="contained"
                color="secondary"
                component={gatsbylink}
                to={"/"}
              >
                TrustID連携
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
