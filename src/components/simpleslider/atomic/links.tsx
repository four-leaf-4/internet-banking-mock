import React from "react";
import { Link } from "@material-ui/core";
import Sl_img from "~/images/sl_img.png";

export const Links = ({ prop }) => {
  const { key, href, alt } = prop;

  return (
    <Link href={href} target="_blank">
      <img src={Sl_img} alt={alt} width="100%" />
    </Link>
  );
};
