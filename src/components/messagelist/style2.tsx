import React, { useContext } from "react";
import { Box, Paper } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { HeadLine } from "./molecular/headline2";
import { Notices } from "./molecular/notices2";
import Pagination from "@material-ui/lab/Pagination";
import { MessageListContext } from "./messagelistContext";

export const MessageList = () => {
  const { state, hundlePageNation } = useContext(MessageListContext);
  const { pagenation } = mystyles();

  return (
    <Box mb={3}>
      <Box mb={1}>
        <HeadLine />
      </Box>
      <Box component={Paper}>
        <Notices />
      </Box>
      <Box className={pagenation}>
        <Pagination count={state.length} onChange={hundlePageNation} />
      </Box>
    </Box>
  );
};
