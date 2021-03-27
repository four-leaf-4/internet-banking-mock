import React from "react";
import Layout from "~/components/templates/layout";
import { Box, Typography } from "@material-ui/core";
import { PasswordInput } from "../components/passwordinput/style1"; //差分
import Seo from "~/components/common/seo";
import { mystyles } from "~/styles/makestyles";

export default function PageReRegisterPassword() {
  const { titlearea, mainarea } = mystyles();

  return (
    <Layout>
      <Seo title={"パスワード再設定"} />
      <Box className={titlearea} component="section" bgcolor="primary.light">
        <Typography
          align="center"
          variant="body1"
          component="h2"
          color="textSecondary"
        >
          パスワード再登録
        </Typography>
      </Box>
      <Box className={mainarea} component="section" bgcolor="primary.light">
        <PasswordInput />
      </Box>
    </Layout>
  );
}
