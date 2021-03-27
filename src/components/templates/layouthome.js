import React from "react";
import Layout from "./layout";
import { PageTitle } from "~/components/pagetitle/style2";
import GlobalNavigation from "~/components/globalnavigation/style2"; //差分切り替え
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { LayoutHomeContextProvider } from "./layoutHomeContext";

export default function LayoutHome(props) {
  const { children, location } = props;
  const { responsivebox } = mystyles();

  return (
    <LayoutHomeContextProvider prop={{ location }}>
      <Layout location={location}>
        <PageTitle location={location} />
        <Box className={responsivebox}>
          <GlobalNavigation />
          {children}
        </Box>
      </Layout>
    </LayoutHomeContextProvider>
  );
}
