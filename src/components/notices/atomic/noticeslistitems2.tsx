import React from "react";
import {
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

export const NoticesListItems = ({ prop }) => {
  const { url, title } = prop;

  return (
    <ListItem
      button
      component={Link}
      href={`/noticesdetail${url}`}
      target="_blank"
    >
      <InfoIcon color="primary" />
      <Typography variant="inherit" color="textPrimary">
        {title}
      </Typography>
    </ListItem>
  );
};
