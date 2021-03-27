import React from "react";
import { Link as Gatsbylink } from "gatsby";
import { Box, Typography, Button } from "@material-ui/core";

export const PasswordComplete = () => {
  return (
    <Box>
      <Typography component="h3" variant="subtitle2">
        <Box mb={3} color="primary.dark">
          再設定完了
        </Box>
      </Typography>
      <Typography align="center" variant="h5">
        再設定が完了しました。
      </Typography>
      <Typography align="center">
        再度ログイン画面からログインしてください
      </Typography>
      <Box display="flex" my={3}>
        <Button
          variant="contained"
          to={"/"}
          component={Gatsbylink}
          color="secondary"
        >
          ログイン画面へ
        </Button>
      </Box>
    </Box>
  );
};
