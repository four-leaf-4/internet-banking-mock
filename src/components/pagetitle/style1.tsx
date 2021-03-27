import React from "react";
import { Box, Hidden } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { BreadCrumbs } from "~/components/pagetitle/molecular/breadcrumbs";
import { Title } from "~/components/pagetitle/atomic/title";

export const PageTitle = ({ location }) => {
  console.log(location);
  const { titlearea } = mystyles();

  return (
    <Box
      className={titlearea}
      component="section"
      bgcolor="primary.light"
      style={{ position: "relative", zIndex: 0 }}
    >
      <Hidden smDown>
        <BreadCrumbs />
      </Hidden>
      <Title />
    </Box>
  );
};
