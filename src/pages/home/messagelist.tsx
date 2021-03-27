import React from "react";
import LayoutHome from "~/components/templates/layouthome";
import Seo from "~/components/common/seo";
import { Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import { MessageList } from "../../components/messagelist/style1"; //差分
import { MessageListContextProvider } from "~/components/messagelist/messagelistContext";

export default function PageMessageList({ location }) {
  const { maincolumn, mainarea } = mystyles();

  return (
    <MessageListContextProvider>
      <LayoutHome location={location}>
        <Seo title={"メッセージ一覧"} />
        <Box className={maincolumn} bgcolor="primary.light">
          <Box className={mainarea}>
            <MessageList />
          </Box>
        </Box>
      </LayoutHome>
    </MessageListContextProvider>
  );
}
