import React, { useEffect, useContext } from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { CreditLimitChange } from "../../components/creditlimitchangeform/style1"; //差分
import { CreditLimitContextProvider } from "~/components/creditlimitchangeform/creditlimitContext";
import { mystyles } from "~/styles/makestyles";
import { Box } from "@material-ui/core";

export default function PageCreditLimitChange({ location }) {
  const { maincolumn, mainarea } = mystyles();

  return (
    <CreditLimitContextProvider>
      <LayoutHome location={location}>
        <Seo title={"限度額変更"} />
        <Box className={maincolumn}>
          <Box className={mainarea} bgcolor="primary.light">
            <CreditLimitChange />
          </Box>
        </Box>
      </LayoutHome>
    </CreditLimitContextProvider>
  );
}
