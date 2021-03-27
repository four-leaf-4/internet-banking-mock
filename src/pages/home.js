import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import { Accountbalance } from "~/components/accountbalance/style2";
import { Withdrawhistory } from "~/components/withdrawhistory/style2";
import { Messagebox } from "~/components/messagebox/style1";
import { SimpleSlider } from "~/components/simpleslider/style1";
import { Newslinkslist } from "~/components/newslinkslist/style1";
import { TermDepositHeadline } from "~/components/termdepositheadline/style1";

import Seo from "~/components/common/seo";
import { Typography, Box, Grid } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export default function Home({ location, data }) {
  console.log(location);
  console.log(data);
  const { maincolumn, mainarea, status } = mystyles();
  return (
    <LayoutHome location={location}>
      <Seo title={"home"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Box className={status} mb={3}>
            <Typography variant="caption" component="p">
              前回ログイン xxxx年xx月xx日
            </Typography>
            <TermDepositHeadline />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Accountbalance />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Withdrawhistory />
            </Grid>
            <Grid item xs={12}>
              <Messagebox />
            </Grid>
          </Grid>
          <SimpleSlider />
          <Newslinkslist />
        </Box>
      </Box>
    </LayoutHome>
  );
}
