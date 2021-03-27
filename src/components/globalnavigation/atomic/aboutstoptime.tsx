import React from "react";
import { Box, Typography } from "@material-ui/core";

export const Aboutstoptime = () => {
  return (
    <Box>
      <Typography variant="subtitle2" component="h4">
        <Box component="span" display="inline-block">
          サービス休止日・
        </Box>
        <Box component="span" display="inline-block">
          停止時間帯
        </Box>
      </Typography>
      <Typography variant="caption" component="p">
        毎日 23：00～翌6：00
      </Typography>
      <Typography variant="caption" component="p">
        また、上記時間以外にもシステム更新などのためにサービスを休止させていただく場合がございます。
      </Typography>
    </Box>
  );
};

export default Aboutstoptime;
