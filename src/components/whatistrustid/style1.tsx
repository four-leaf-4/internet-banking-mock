import React from "react";
import { Typography, Box, Button } from "@material-ui/core";

export const WhatisTrust = () => {
  return (
    <Box my={2} p={2} component="section" bgcolor="primary.light">
      <Typography variant="subtitle2">TrustIDとは？</Typography>
      <Typography variant="body2">
        TrustID（トラストアイディー）とは・・・
        テキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキスト
      </Typography>
      <Box display="flex" my={2}>
        <Button
          component="a"
          href="/dummy"
          color="secondary"
          variant="contained"
        >
          TrustIDのご登録はこちら
        </Button>
      </Box>
    </Box>
  );
};
