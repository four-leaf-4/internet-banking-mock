import React from "react";
import { Link as gatsbylink } from "gatsby";
import { ListItem, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Infolinkslistitem = (prop) => {
  const { linkitem2 } = mystyles();
  return (
    <ListItem component={gatsbylink} to={prop.data.to} className={linkitem2}>
      <Typography color="textPrimary" variant="subtitle2">
        {prop.data.title}
      </Typography>
    </ListItem>
  );
};

export default Infolinkslistitem;
