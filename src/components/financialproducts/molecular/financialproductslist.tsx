import React, { useContext } from "react";
import { List } from "@material-ui/core";
import { FinancialProductsListItem } from "./financialproductslistitem";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";
import termdepositlist from "./termdepositlist.json";
import generaldepositlist from "./generaldepositlist.json";

export const FinancialProductsList = () => {
  const { currentpath } = useContext(LayoutHomeContext);

  let array = [];
  switch (currentpath) {
    case "/home/creategeneraldeposit":
      array = generaldepositlist;
      break;
    case "/home/createtermdeposit":
      array = termdepositlist;
      break;
    default:
      break;
  }

  const financialproductslist = array.map((elm) => (
    <FinancialProductsListItem key={elm.id} prop={elm} />
  ));
  return <List>{financialproductslist}</List>;
};
