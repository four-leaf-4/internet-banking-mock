import React from "react";
import { FormLabel } from "@material-ui/core";

export const RadioFieldSetTitle = ({ prop }) => {
  const title = prop;

  return <FormLabel component="label">{title}</FormLabel>;
};
