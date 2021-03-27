import React from "react";
import { ListItem } from "@material-ui/core";

export const Topic = ({ prop }) => {
  const { key, href, title } = prop;

  return (
    <ListItem key={key} component="a" href={href} target="_blank">
      {title}
    </ListItem>
  );
};
