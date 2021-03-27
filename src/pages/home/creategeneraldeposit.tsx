import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { Headline } from "~/components/transferaccount/atomic/headline";
import { FinancialProducts } from "../../components/financialproducts/style1"; //差分
import { mystyles } from "~/styles/makestyles";

export default function PageCreateGeneralDeposit({ location }) {
  const { maincolumn, mainarea } = mystyles();

  return (
    <LayoutHome location={location}>
      <Seo title={"general term deposit"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <Headline prop={{ title: "商品一覧" }} />
          <FinancialProducts />
        </Box>
      </Box>
    </LayoutHome>
  );
}
