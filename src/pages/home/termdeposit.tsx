import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Routerlinks } from "~/components/routerlinks/style1";
import { TermDepositHeadline } from "~/components/termdepositheadline/style1";
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export default function PageTermDeposit({ location }) {
  const { maincolumn, mainarea } = mystyles();
  return (
    <LayoutHome location={location}>
      <Seo title={"定期預金"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <TermDepositHeadline />
          <Routerlinks prop={"TERMDEPOSIT"} />
        </Box>
      </Box>
    </LayoutHome>
  );
}
