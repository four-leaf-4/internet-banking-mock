import React, { useContext } from "react";
import { Box, Paper } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { HeadLine } from "./molecular/headline";
import { Notices } from "./molecular/notices";
import Pagination from "@material-ui/lab/Pagination";
import { MessageListContext } from "./messagelistContext";

export const MessageList = () => {
  const { state, hundlePageNation } = useContext(MessageListContext);
  const { pagenation } = mystyles();

  return (
    <Box mb={3}>
      <HeadLine />
      <Box component={Paper}>
        <Notices />
      </Box>
      <Box className={pagenation}>
        <Pagination
          count={state.length}
          color="secondary"
          onChange={hundlePageNation}
        />
      </Box>
    </Box>
  );
};
