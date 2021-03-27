import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { CustomerInfo } from "../../components/customerinfo/style1"; //差分
import { mystyles } from "~/styles/makestyles";

export default function PageCustomerInfoInquiry({ location }) {
  const { maincolumn, mainarea } = mystyles();

  return (
    <LayoutHome location={location}>
      <Seo title={"お客様情報照会"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <CustomerInfo />
        </Box>
      </Box>
    </LayoutHome>
  );
}
