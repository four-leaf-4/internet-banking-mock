import React, { useMemo, useContext } from "react";
import { navigate } from "gatsby";
import { GlobalStateContext } from "~/context/GlobalContextProvider";

export const NavigationGuard = ({ children }) => {
  const { isLoggedIn } = useContext(GlobalStateContext);

  const component = useMemo(() => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      return <div>{children}</div>;
    }
  }, [isLoggedIn]);

  return <>{component}</>;
};
