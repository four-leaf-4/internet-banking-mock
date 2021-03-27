import React from "react";
import { Box } from "@material-ui/core";
import { Bankaccount } from "../atomic/bankaccount";
import arraybankaccounts from "../../bankaccounts/arraybankaccounts.json";

export const Bankaccountslist = () => {
  const data = arraybankaccounts;
  console.log(data);
  const listitems = data.map((elm) => <Bankaccount key={elm.id} data={elm} />);
  return <Box>{listitems}</Box>;
};
