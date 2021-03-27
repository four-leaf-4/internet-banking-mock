import React from "react";
import Layout from "~/components/templates/layout";
import { Box, Typography } from "@material-ui/core";
import Seo from "~/components/common/seo";
import { EmailAuth } from "~/components/emailauthcodeinput/style1";
import { EmailAuthContextProvider } from "~/components/emailauthcodeinput/emailauthContext";
import { mystyles } from "~/styles/makestyles";

export default function PageEmailAuth() {
  const { titlearea, mainarea } = mystyles();
  return (
    <EmailAuthContextProvider>
      <Layout>
        <Seo title={"パスワードをお忘れの方"} />
        <Box className={titlearea} component="section" bgcolor="primary.light">
          <Typography
            align="center"
            variant="body1"
            component="h2"
            color="textSecondary"
          >
            メール認証
          </Typography>
        </Box>
        <Box className={mainarea} component="section" bgcolor="primary.light">
          <Typography component="h3" variant="subtitle2">
            <Box mb={3} color="primary.dark">
              メール認証
            </Box>
          </Typography>
          <EmailAuth />
        </Box>
      </Layout>
    </EmailAuthContextProvider>
  );
}
