import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { BSstatus } from "./molecular/listbody2";
import arraystatement from "./arraystatement.json";
import { mystyles } from "~/styles/makestyles";

export const Transactionstatus = () => {
  const { pagenation } = mystyles();
  const rows = arraystatement;
  return (
    <Box>
      <BSstatus />
      <Box className={pagenation}>
        <Pagination count={10} size="small" />
      </Box>
    </Box>
  );
};
