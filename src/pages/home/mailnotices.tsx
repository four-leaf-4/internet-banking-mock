import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { MailNoticesCategories } from "~/components/mailnoticescategories/style1";
import { MailNoticesContextProvider } from "~/components/mailnoticescategories/mailnoticesContext";
import { mystyles } from "~/styles/makestyles";

export default function PageMailNotices({ location }) {
  const { maincolumn, mainarea } = mystyles();

  return (
    <MailNoticesContextProvider>
      <LayoutHome location={location}>
        <Seo title={"メール通知設定"} />
        <Box className={maincolumn}>
          <Box className={mainarea} bgcolor="primary.light">
            <MailNoticesCategories />
          </Box>
        </Box>
      </LayoutHome>
    </MailNoticesContextProvider>
  );
}
