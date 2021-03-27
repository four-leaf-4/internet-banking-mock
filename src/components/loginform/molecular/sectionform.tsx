import React from "react";
import { IdField } from "../atomic/idfield";
import { PassWordField } from "../atomic/passwordfield";

export const SectionForm = () => {
  return (
    <form noValidate autoComplete="off">
      <IdField />
      <PassWordField />
    </form>
  );
};
