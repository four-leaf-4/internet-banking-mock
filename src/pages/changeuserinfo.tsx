import React from "react";
import Layout from "~/components/templates/layout";
import { Box, Typography } from "@material-ui/core";
import Seo from "~/components/common/seo";
import { ChangeUserInfo } from "../components/changeuserinfo/style1"; //差分
import { ChangeUserInfoContextProvider } from "~/components/changeuserinfo/changeuserinfoContext";
import { mystyles } from "~/styles/makestyles";

export default function PageChangeUserInfo() {
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
              ユーザー情報の入力
            </Box>
          </Typography>
          <ChangeUserInfo />
        </Box>
      </Layout>
    </ChangeUserInfoContextProvider>
  );
}
