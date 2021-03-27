import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { ListItem } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Gmenulistitem = (prop) => {
  const { data } = prop;
  const { to, title } = data;

  return (
    <ListItem component={Gatsbylink} to={to}>
      {title}
    </ListItem>
  );
};

export default Gmenulistitem;
