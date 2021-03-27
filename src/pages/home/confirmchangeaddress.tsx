import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { ChangeAddressForm } from "~/components/changeaddress/style1"; //差分
import { mystyles } from "~/styles/makestyles";
import { Box } from "@material-ui/core";

export default function PageConfirmChangeAddress({ location }) {
  const { maincolumn, mainarea } = mystyles();
  return (
    <LayoutHome location={location}>
      <Seo title={"住所変更 確認"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <ChangeAddressForm />
        </Box>
      </Box>
    </LayoutHome>
  );
}
