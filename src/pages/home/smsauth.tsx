import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { AuthsmsContent } from "~/components/smsauth/style1";
import { SMSauthContextProvider } from "~/components/smsauth/smsauthContext";
import { mystyles } from "~/styles/makestyles";

export default function PageSmsAuth({ location }) {
  const { maincolumn, mainarea } = mystyles();
  console.log(location);
  return (
    <SMSauthContextProvider prop={{ location }}>
      <LayoutHome location={location}>
        <Seo title={"termdeposit"} />
        <Box className={maincolumn}>
          <Box className={mainarea} bgcolor="primary.light">
            <AuthsmsContent />
          </Box>
        </Box>
      </LayoutHome>
    </SMSauthContextProvider>
  );
}
