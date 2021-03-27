import React, { useContext } from "react";
import { Grid, List } from "@material-ui/core";
import { FinancialProductsListItem } from "./financialproductslistitem2";
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
    <Grid item xs={12} sm={6} key={elm.id}>
      <FinancialProductsListItem prop={elm} />
    </Grid>
  ));
  return (
    <Grid container spacing={1}>
      {financialproductslist}
    </Grid>
  );
};
