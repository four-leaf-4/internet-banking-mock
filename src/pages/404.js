import React from "react";
import Layout from "~/components/templates/layout";
import { Box, Typography } from "@material-ui/core";
import IMG from "~/images/simany_001.png";

export default function Home() {
  return (
    <Layout>
      <Box width="1" textAlign="center" m={3}>
        <img src={IMG} alt="icon" width="120vw" />
        <Typography variant="h6" component="h3">
          お探しのページが見つかりません
        </Typography>
        <Typography variant="body2">
          大変申し訳ございません。お客さまがお探しのページが見つかりませんでした。
        </Typography>
      </Box>
    </Layout>
  );
}
