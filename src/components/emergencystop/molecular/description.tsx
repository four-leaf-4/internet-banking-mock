import React from "react";
import { Box } from "@material-ui/core";
import { LineDescription } from "../atomic/linedescription";
import jsonText from "../text.json";

export const Description = () => {
  const text = jsonText;
  const description = text
    .split("\n")
    .map((t, i) => <LineDescription text={t} key={i} />);

  return <Box my={1}>{description}</Box>;
};
