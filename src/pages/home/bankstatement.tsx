import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { Searchbankstatement } from "~/components/searchbankstatement/style1";
import { Bankstatementtable } from "~/components/bankstatementtable/style1";
import { mystyles } from "~/styles/makestyles";

export default function Bankstatement({ location }) {
  const { maincolumn, mainarea } = mystyles();
  return (
    <LayoutHome location={location}>
      <Seo title={"出入金明細"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Searchbankstatement />
          <Bankstatementtable />
        </Box>
      </Box>
    </LayoutHome>
  );
}
