import React from "react";
import { mystyles } from "~/styles/makestyles";
import { Box, Hidden, Paper } from "@material-ui/core";
import { Globalmenulist } from "./molecular/gmenulist";
import { Gmenuheadline } from "./molecular/gmenuheadline";
import { Gmenunotices } from "./molecular/gmenunotices";
import { Btnlogout } from "~/components/header/atomic/btnlogout";

export const Globalmenu = ({ isSP }) => {
  const classes = mystyles();
  const classgmenu = isSP ? classes.root : classes.globalnavigation;
  return (
    <Box className={classgmenu} bgcolor="primary.light" p={1}>
      <Gmenuheadline />
      <Globalmenulist />
      <Hidden smDown>
        <Box component={Paper} p={2}>
          <Gmenunotices />
        </Box>
      </Hidden>
      <Hidden smUp>
        <Gmenunotices />
      </Hidden>

      <Hidden smUp>
        <Btnlogout />
      </Hidden>
    </Box>
  );
};

export default Globalmenu;
