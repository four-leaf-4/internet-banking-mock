import React, { useContext } from "react";
import { TableRow } from "@material-ui/core";
import { Tableheadcell } from "../atomic/tableheadcell2";

export const Tableheadcells = () => {
  const headnames = [
    { id: 1, headname: "預入番号" },
    { id: 2, headname: "積立金額" },
    { id: 3, headname: "満期" },
    { id: 4, headname: "預入期間" },
    { id: 5, headname: "金利" },
    { id: 6, headname: "解約可否" },
  ];
  const tableheadcells = headnames.map((elm) => (
    <Tableheadcell key={elm.id} data={elm} />
  ));
  return <TableRow>{tableheadcells}</TableRow>;
};
