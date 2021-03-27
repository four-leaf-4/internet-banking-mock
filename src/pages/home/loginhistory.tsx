import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box, Typography } from "@material-ui/core";
import { LoginHistoryTable } from "~/components/loginhistorytable/style1";
import { mystyles } from "~/styles/makestyles";

export default function PageLoginHistory({ location }) {
  const { maincolumn, mainarea, subtitle } = mystyles();

  return (
    <LayoutHome location={location}>
      <Seo title={"ログイン履歴"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Typography className={subtitle}>ログイン履歴</Typography>
          <LoginHistoryTable />
        </Box>
      </Box>
    </LayoutHome>
  );
}
