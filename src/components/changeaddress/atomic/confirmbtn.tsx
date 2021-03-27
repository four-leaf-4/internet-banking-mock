import React, { useContext } from "react";
import { Link as Gatsbylink } from "gatsby";
import { Box, Button } from "@material-ui/core";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";

export const ConfirmBtn = () => {
  const path = useContext(LayoutHomeContext);
  let toPath, title;
  switch (path.currentpath) {
    case "/home/changeaddress":
      toPath = "/home/confirmchangeaddress";
      title = "入力内容を確認する";
      break;
    case "/home/confirmchangeaddress":
      toPath = "/home/complete";
      title = "実行";
      break;
    default:
      toPath = "/home";
      title = "完了";
      break;
  }

  return (
    <Box display="flex" my={3}>
      <Button
        variant="contained"
        component={Gatsbylink}
        to={toPath}
        color="secondary"
      >
        {title}
      </Button>
    </Box>
  );
};
