import React from "react";
import Layout from "~/components/templates/layout";
import Seo from "~/components/common/seo";
import { Box, Typography } from "@material-ui/core";
import { ChangeUserInfoContextProvider } from "~/components/changeuserinfo/changeuserinfoContext";
import { ConfirmUserInfo } from "~/components/confirmuserinfo/style1";
import { mystyles } from "~/styles/makestyles";

export default function PageConfirm() {
  const { titlearea, mainarea } = mystyles();

  return (
    <ChangeUserInfoContextProvider>
      <Layout>
        <Seo title={"メールアドレス・パスワードの変更"} />
        <Box className={titlearea} component="section" bgcolor="primary.light">
          <Typography
            align="center"
            variant="body1"
            component="h2"
            color="textSecondary"
          >
            メールアドレス・パスワードの変更
          </Typography>
        </Box>
        <Box className={mainarea} component="section" bgcolor="primary.light">
          <Typography component="h3" variant="subtitle2">
            <Box mb={3} color="primary.dark">
              変更内容の確認
            </Box>
          </Typography>
          <ConfirmUserInfo />
        </Box>
      </Layout>
    </ChangeUserInfoContextProvider>
  );
}
