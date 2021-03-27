import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Routerlinks } from "../../components/routerlinks/style1"; //差分
import { TermDepositHeadline } from "~/components/termdepositheadline/style1";

import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export default function PageTransfer({ location }) {
  const { maincolumn, mainarea } = mystyles();
  return (
    <LayoutHome location={location}>
      <Seo title={"振込・振替"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <TermDepositHeadline />
          <Routerlinks prop={"TRANSFER"} />
        </Box>
      </Box>
    </LayoutHome>
  );
}
