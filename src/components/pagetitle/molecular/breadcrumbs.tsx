import React from "react";
import { Breadcrumbs } from "@material-ui/core";
import { useLocation } from "@reach/router";
import { Crumb } from "../atomic/crumb";

export const BreadCrumbs = () => {
  let { pathname } = useLocation();
  const regpath = RegExp(`/home/createtermdeposit/product/\d*`, "g");
  const flag = regpath.test(pathname);
  if (flag) {
    const splitpath = pathname.split("/");
    const lastelm = splitpath.slice(-1)[0];
    pathname = `/home/createtermdeposit/${lastelm}`;
  }

  const splitpath = pathname.split("/");
  if (splitpath[0] === "") {
    splitpath.shift();
  }

  const crumbs = splitpath.map((elm, index, ary) => (
    <Crumb key={index} prop={{ elm, index, ary }} />
  ));

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{
        position: "absolute",
        zIndex: "1",
      }}
    >
      {crumbs}
    </Breadcrumbs>
  );
};
