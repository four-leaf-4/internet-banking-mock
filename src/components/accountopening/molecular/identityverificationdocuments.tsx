import React from "react";
import { List, ListItem, Box, Typography } from "@material-ui/core";

export const IdentityVerificationDocuments = ({ prop }) => {
  const docs = [
    { key: 1, title: "運転免許証", by: "both" },
    { key: 2, title: "マイナンバーカード", by: "both" },
    { key: 3, title: "在留証明書", by: "online" },
    { key: 4, title: "健康保険証", by: "mail" },
    { key: 5, title: "運転経歴証明書", by: "mail" },
    { key: 6, title: "パスポート", by: "mail" },
  ];
  const howto = prop;
  const filterd = docs.filter((elm) => elm.by === howto || elm.by === "both");
  const lists = filterd.map(({ key, title }) => (
    <ListItem key={key}>{title}</ListItem>
  ));

  return (
    <Box textAlign="left" m={3}>
      <Typography variant="subtitle1" component="h6">
        本人確認書類として認められるもの
      </Typography>
      <List>{lists}</List>
    </Box>
  );
};
