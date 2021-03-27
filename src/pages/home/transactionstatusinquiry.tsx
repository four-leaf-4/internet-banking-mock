import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Transactionstatus } from "../../components/transactionstatus/style1"; //差分
import { Searchbankstatement } from "../../components/searchbankstatement/style1"; //差分
import { mystyles } from "~/styles/makestyles";
import { Box } from "@material-ui/core";

export default function ExeTransfer({ location }) {
  const { maincolumn, mainarea } = mystyles();

  return (
    <LayoutHome location={location}>
      <Seo title={"取引状況照会"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Searchbankstatement />
          <Transactionstatus />
        </Box>
      </Box>
    </LayoutHome>
  );
}
