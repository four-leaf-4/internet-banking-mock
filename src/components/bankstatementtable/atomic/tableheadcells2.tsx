import React, { useContext } from "react";
import { TableRow } from "@material-ui/core";
import { Tableheadcell } from "../atomic/tableheadcell2";

export const Tableheadcells = () => {
  const headnames = [
    { id: 1, headname: "日付" },
    { id: 2, headname: "お引出し" },
    { id: 3, headname: "お預かり" },
    { id: 4, headname: "内容" },
  ];
  const tableheadcells = headnames.map((elm) => (
    <Tableheadcell key={elm.id} data={elm} />
  ));
  return <TableRow>{tableheadcells}</TableRow>;
};
