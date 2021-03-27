import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { Box, Button, Link } from "@material-ui/core";

export const ToSeeAll = () => {
  return (
    <Button
      variant="contained"
      color="secondary"
      component={Gatsbylink}
      to="messagelist"
      size="small"
    >
      <Box textAlign="center">全てのお知らせを見る</Box>
    </Button>
  );
};
