import React from "react";
import { Box } from "@material-ui/core";
import { NoticesHeadLine } from "./atomic/noticesheadline";
import { NoticesList } from "./molecular/noticeslist2";

export const Notices = () => {
  return (
    <Box p={1} my={2} component="section" bgcolor="primary.light">
      <NoticesHeadLine />
      <NoticesList />
    </Box>
  );
};
