import React, { useContext } from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Button, Link } from "@material-ui/core";
import { CreditLimitContext } from "../creditlimitContext";

export const LimitChangeBtn = () => {
  const { changeconfirm, creditlimit } = useContext(CreditLimitContext);
  const isConfirmed = creditlimit.confirm;

  let toPath;
  if (isConfirmed) {
    toPath = "/home/confirmcreditlimitchange";
  } else {
    toPath = "/home/creditlimitchange";
  }

  const onClickLink = () => {
    if (!isConfirmed) {
      changeconfirm(true);
    }
  };

  const onClick = () => {};

  return (
    <Box display="flex">
      <Button
        variant="contained"
        color="secondary"
        href={toPath}
        onClick={onClickLink}
      >
        入力内容を確認する
      </Button>
    </Box>
  );
};
