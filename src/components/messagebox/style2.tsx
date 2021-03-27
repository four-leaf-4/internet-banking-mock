import React from "react";
import { Box, Paper } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { HeadLine } from "./molecular/headline2";
import { Notices } from "./molecular/notices2";
import { MessageListContextProvider } from "~/components/messagelist/messagelistContext";

export const Messagebox = () => {
  const { messagearea } = mystyles();

  return (
    <MessageListContextProvider>
      <Box mb={3}>
        <HeadLine />
        <Paper>
          <Notices />
        </Paper>
      </Box>
    </MessageListContextProvider>
  );
};
