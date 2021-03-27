import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { Totaldeposit } from "../../components/totaldeposit/style1"; //差分
import { Bankaccounts } from "~/components/bankaccounts/style1";
import { mystyles } from "~/styles/makestyles";

export default function Balanceinquiry({ location }) {
  const { maincolumn, mainarea } = mystyles();
  return (
    <LayoutHome location={location}>
      <Seo title={"残高照会"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Totaldeposit />
          <Bankaccounts />
        </Box>
      </Box>
    </LayoutHome>
  );
}
