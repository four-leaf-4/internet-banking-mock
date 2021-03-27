import React from "react";
import Layout from "~/components/templates/layout";
import Seo from "~/components/common/seo";
import { AuthsmsContent } from "../components/smsauth/style1"; //差分
import { SMSauthContextProvider } from "~/components/smsauth/smsauthContext";
import { Box, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { LayoutHomeContextProvider } from "~/components/templates/layoutHomeContext";

export default function Authsms({ location }) {
  const { titlearea } = mystyles();

  return (
    <LayoutHomeContextProvider prop={{ location }}>
      <SMSauthContextProvider prop={{ location }}>
        <Layout location={location}>
          <Seo title={"SMS認証"} />
          <Box
            className={titlearea}
            component="section"
            bgcolor="primary.light"
          >
            <Typography
              align="center"
              variant="body1"
              component="h2"
              color="textSecondary"
            >
              SMS認証
            </Typography>
          </Box>
          <AuthsmsContent />
        </Layout>
      </SMSauthContextProvider>
    </LayoutHomeContextProvider>
  );
}
