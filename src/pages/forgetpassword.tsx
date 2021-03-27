import React from "react";
import Layout from "~/components/templates/layout";
import Seo from "~/components/common/seo";
import { Box, Typography } from "@material-ui/core";
import { EmailInput } from "../components/emailinput/style1"; //差分
import { mystyles } from "~/styles/makestyles";

export default function PageForgetPassward() {
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
          パスワードをお忘れの方
        </Typography>
      </Box>
      <Box className={mainarea} component="section" bgcolor="primary.light">
        <EmailInput />
      </Box>
    </Layout>
  );
}
