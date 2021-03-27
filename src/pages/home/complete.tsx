import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { ApplyComplete } from "~/components/applycomplete/style1";
import { mystyles } from "~/styles/makestyles";

export default function PageComplete({ location }) {
  const { maincolumn, mainarea } = mystyles();
  console.log(location);
  return (
    <LayoutHome location={location}>
      <Seo title={"完了"} />
      <Box className={maincolumn}>
        <Box className={mainarea} bgcolor="primary.light">
          <ApplyComplete />
        </Box>
      </Box>
    </LayoutHome>
  );
}
