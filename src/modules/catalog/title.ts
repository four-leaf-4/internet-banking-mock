import React from "react";
import { useLocation } from "@reach/router";
import { titleArray } from "~/modules/catalog/titlearray";

function isDynamicPath(pathname) {
  return !!DynamicPaths.find((dynamicPath) => pathname.startsWith(dynamicPath));
}

function removeEndNumber(path) {
  return path.replace(/\/\d+$/, "");
}

function formatPath(pathname) {
  if (isDynamicPath(pathname)) {
    return removeEndNumber(pathname);
  }
  return pathname;
}

function findTarget(formated) {
  return titleArray.find(({ path }) => path === formated);
}

const DynamicPaths = [
  "/home/createtermdeposit/product",
  "/home/applygeneraldeposit",
];

export const getTitle = () => {
  const { pathname } = useLocation();
  const formated = formatPath(pathname);
  const target = findTarget(formated);
  if (!target) {
    return "No title";
  }
  return target.title;
};

export const crumbJp = (elm) => {
  const target = titleArray.find(({ id }) => id === elm);
  if (!target) {
    return elm;
  } else {
    return target.title;
  }
};
