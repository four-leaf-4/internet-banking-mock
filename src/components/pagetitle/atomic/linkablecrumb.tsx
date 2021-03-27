import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { Typography, Link } from "@material-ui/core";

export const LinkableCrumb = ({ prop }) => {
  const { crumbtitlejp, linkpath } = prop;

  return (
    <Link to={linkpath} component={Gatsbylink}>
      <Typography variant="caption" component="span">
        {crumbtitlejp}
      </Typography>
    </Link>
  );
};
