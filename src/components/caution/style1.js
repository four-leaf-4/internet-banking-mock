import React from "react";
import { Box, Typography } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";

export const Caution = () => {
  const { cautionarea } = mystyles();
  return (
    <Box
      className={cautionarea}
      mb={3}
      p={3}
      component="section"
      bgcolor="primary.base"
    >
      <Typography variant="body2">注意事項</Typography>
      <Typography variant="body2">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </Typography>
    </Box>
  );
};
