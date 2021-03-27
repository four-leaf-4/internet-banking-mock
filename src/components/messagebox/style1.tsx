import React from "react";
import { Box, Paper } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { HeadLine } from "./molecular/headline";
import { Notices } from "./molecular/notices";
import { MessageListContextProvider } from "~/components/messagelist/messagelistContext";

export const Messagebox = () => {
  const { messagearea } = mystyles();

  return (
    <MessageListContextProvider>
      <Box className={messagearea} component={Paper} mb={3}>
        <HeadLine />
        <Notices />
      </Box>
    </MessageListContextProvider>
  );
};
