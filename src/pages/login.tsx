import React from "react";
import Layout from "~/components/templates/layout";
import { Authentication } from "~/components/authentication/style1";
import Seo from "~/components/common/seo";
import { Box, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { BiometricContextProvider } from "~/components/biometricauth/biometricContext";
import { LayoutHomeContextProvider } from "~/components/templates/layoutHomeContext";

export default function Login({ location }) {
  const { titlearea, mainarea } = mystyles();

  return (
    <Layout location={location}>
      <LayoutHomeContextProvider prop={{ location }}>
        <BiometricContextProvider prop={{ location }}>
          <Seo title={"生体認証"} />
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
              生体認証
            </Typography>
          </Box>
          <Box className={mainarea} component="section" bgcolor="primary.light">
            <Authentication />
          </Box>
        </BiometricContextProvider>
      </LayoutHomeContextProvider>
    </Layout>
  );
}
