import React, { useContext } from "react";
import { TableBody } from "@material-ui/core";
import { BSTablerows } from "../atomic/bstablerows2";
import { mystyles } from "~/styles/makestyles";
import { LayoutHomeContext } from "~/components/templates/layoutHomeContext";
import arraylist from "../arraylist.json";
import arraygenerallist from "../arraygenerallist.json";

export const BSTablebody = () => {
  const { table } = mystyles();

  const path = useContext(LayoutHomeContext);
  console.log(path.currentpath);
  const currentpath = path.currentpath;

  let rows = [];

  switch (currentpath) {
    case "/home/cancelgeneraldeposit":
      rows = arraygenerallist;
      break;
    case "/home/canceltermdeposit":
      rows = arraylist;
      break;
    default:
      break;
  }

  const tablebody = rows.map((row) => <BSTablerows key={row.key} data={row} />);
  return <TableBody className={table}>{tablebody}</TableBody>;
};
