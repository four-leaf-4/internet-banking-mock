import React, { useContext } from "react";
import LayoutHome from "~/components/templates/layouthome";
import { Accountbalance } from "../components/accountbalance/style1"; //差分
import { Withdrawhistory } from "../components/withdrawhistory/style1"; //差分
import { Messagebox } from "../components/messagebox/style1"; //差分
import { SimpleSlider } from "~/components/simpleslider/style1";
import { Newslinkslist } from "../components/newslinkslist/style1"; //差分
import Seo from "~/components/common/seo";
import { Typography, Box, Grid } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { NavigationGuard } from "~/guard/navigationguard";
import { TermDepositHeadline } from "~/components/termdepositheadline/style1";

export const PageHome = ({ location }) => {
  const { maincolumn, mainarea, status } = mystyles();

  return (
    <NavigationGuard>
      <LayoutHome location={location}>
        <Seo title={"ホーム"} />
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
            </Grid>
            <SimpleSlider />
            <Newslinkslist />
          </Box>
        </Box>
      </LayoutHome>
    </NavigationGuard>
  );
};

export default PageHome;
