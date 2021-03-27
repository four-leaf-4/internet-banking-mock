import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { CancelTermDepositHome } from "../../components/canceltermdeposit/style1";
import { mystyles } from "~/styles/makestyles";

export default function PageCancelTermDeposit({ location }) {
  const { maincolumn, mainarea } = mystyles();

  return (
    <LayoutHome location={location}>
      <Seo title={"解約"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <CancelTermDepositHome />
        </Box>
      </Box>
    </LayoutHome>
  );
}
