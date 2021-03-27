import React from "react";
import { Box, Hidden } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { BreadCrumbs } from "./molecular/breadcrumbs";
import { Title } from "./atomic/title";

export const PageTitle = ({ location }) => {
  console.log(location);
  const { titlearea } = mystyles();

  return (
    <Box
      className={titlearea}
      component="section"
      bgcolor="primary.light"
      position="releative"
    >
      <Hidden xsDown>
        <BreadCrumbs />
      </Hidden>
      <Title />
    </Box>
  );
};
