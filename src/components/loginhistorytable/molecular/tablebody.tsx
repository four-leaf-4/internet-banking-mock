import React from "react";
import { TableBody } from "@material-ui/core";
import arrayhistory from "../historyinfo.json";
import { TableBodyRow } from "./tablebodyrow";

export const TableBodySection = () => {
  const historyinfo = arrayhistory;

  const history = historyinfo.map((elm) => (
    <TableBodyRow key={elm.id} prop={elm} />
  ));

  return <TableBody>{history}</TableBody>;
};
