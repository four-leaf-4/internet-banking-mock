import React from "react";
import { Link, ListItem, Typography, ListItemText } from "@material-ui/core";

export const NoticesListItems = ({ prop }) => {
  const { url, title } = prop;

  return (
    <ListItem
      button
      component={Link}
      href={`/noticesdetail${url}`}
      target="_blank"
    >
      <ListItemText
        primary={
          <Typography variant="caption" color="textPrimary">
            {title}
          </Typography>
        }
      />
    </ListItem>
  );
};
