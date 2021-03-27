import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { BiometricAuth } from "~/components/biometricauth/style1";
import { BiometricContextProvider } from "~/components/biometricauth/biometricContext";
import { mystyles } from "~/styles/makestyles";

export default function PageOneTimePassWord({ location }) {
  const { maincolumn, mainarea } = mystyles();

  return (
    <BiometricContextProvider prop={{ location }}>
      <LayoutHome location={location}>
        <Seo title={"ワンタイムパスワード設定"} />
        <Box className={maincolumn}>
          <Box className={mainarea} bgcolor="primary.light">
            <BiometricAuth />
          </Box>
        </Box>
      </LayoutHome>
    </BiometricContextProvider>
  );
}
