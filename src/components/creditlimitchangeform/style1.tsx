import React, { useContext, useEffect } from "react";
import { Box } from "@material-ui/core";
import { CreditLimitChangeForm } from "./molecular/creditlimitchangeform";
import { LimitChangeBtn } from "./atomic/limitchangebtn";
import { CreditLimitContext } from "./creditlimitContext";
import { Caution } from "~/components/caution/style1";

export const CreditLimitChange = () => {
  const { changeconfirm } = useContext(CreditLimitContext);

  useEffect(() => {
    console.log("unmount!");
    changeconfirm(false);
  }, []);

  return (
    <Box>
      <Caution />
      <CreditLimitChangeForm />
      <LimitChangeBtn />
    </Box>
  );
};
