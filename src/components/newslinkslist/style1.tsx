import React from "react";
import { List, Box } from "@material-ui/core";
import { mystyles } from "~/styles/makestyles";
import slidesdata from "~/components/simpleslider/slidesdata.json";
import { Topic } from "./atomic/topic";

export const Newslinkslist = () => {
  const { topicsarea } = mystyles();
  const arrayid = slidesdata;
  const topics = arrayid.map((elm) => <Topic key={elm.key} prop={elm} />);

  return (
    <Box className={topicsarea} bgcolor="primary.light">
      <List aria-label="main mailbox folders">{topics}</List>
    </Box>
  );
};
