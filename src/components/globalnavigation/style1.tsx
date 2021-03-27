import React from "react";
import { mystyles } from "~/styles/makestyles";
import { Box, Hidden } from "@material-ui/core";
import { Globalmenulist } from "./molecular/gmenulist";
import { Gmenuheadline } from "./molecular/gmenuheadline";
import { Gmenunotices } from "./molecular/gmenunotices";
import { Btnlogout } from "~/components/header/atomic/btnlogout";

export const Globalmenu = ({ isSP }) => {
  const { root, globalnavigation } = mystyles();
  const classgmenu = isSP ? root : globalnavigation;
  return (
    <Box className={classgmenu} bgcolor="primary.light" p={1}>
      <Gmenuheadline />
      <Globalmenulist />
      <Gmenunotices />
      <Hidden smUp>
        <Btnlogout />
      </Hidden>
    </Box>
  );
};

export default Globalmenu;
