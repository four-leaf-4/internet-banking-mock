import React from "react";
import Layout from "~/components/templates/layout";
import Seo from "~/components/common/seo";
import { Box, Typography } from "@material-ui/core";
import { PasswordComplete } from "~/components/passwordcomplete/style1";
import { mystyles } from "~/styles/makestyles";

export default function PagePasswordComplete({ location }) {
  console.log(location);
  const { titlearea, mainarea } = mystyles();

  return (
    <Layout>
      <Seo title={"完了"} />
      <Box className={titlearea} component="section" bgcolor="primary.light">
        <Typography
          align="center"
          variant="body1"
          component="h2"
          color="textSecondary"
        >
          完了
        </Typography>
      </Box>
      <Box className={mainarea} component="section" bgcolor="primary.light">
        <PasswordComplete />
      </Box>
    </Layout>
  );
}
