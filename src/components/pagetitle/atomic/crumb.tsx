import React from "react";
import { LastCrumb } from "./lastcrumb";
import { LinkableCrumb } from "./linkablecrumb";
import { crumbJp } from "~/modules/catalog/title.ts";

export const Crumb = ({ prop }) => {
  const { index, ary, elm } = prop;
  const crumbtitlejp = crumbJp(elm);

  const isLast = index === ary.length - 1;

  const crumbcomponent = () => {
    if (isLast) {
      return <LastCrumb prop={{ crumbtitlejp }} />;
    } else {
      const sliceary = ary.slice(0, index + 1);
      const linkpath = `/${sliceary.join("/")}`;
      return <LinkableCrumb prop={{ crumbtitlejp, linkpath }} />;
    }
  };

  const component = crumbcomponent();

  return <>{component}</>;
};
