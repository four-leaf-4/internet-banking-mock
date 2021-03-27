import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { Link } from "@material-ui/core";

export const ToSeeAll = () => {
  return (
    <Link
      variant="caption"
      component={Gatsbylink}
      to="messagelist"
      color="textPrimary"
    >
      全てのお知らせを見る
    </Link>
  );
};
