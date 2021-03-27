import React from "react";
import { Link as gatsbylink } from "gatsby";
import { ListItemText, ListItem } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Infolinkslistitem = (prop) => {
  const { linkitem } = mystyles();
  return (
    <ListItem
      button
      color="primary"
      component={gatsbylink}
      to={prop.data.to}
      className={linkitem}
    >
      <ListItemText primary={prop.data.title} />
    </ListItem>
  );
};

export default Infolinkslistitem;
