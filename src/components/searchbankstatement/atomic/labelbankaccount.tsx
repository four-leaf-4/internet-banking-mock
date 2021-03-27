import React, { useState } from "react";
import { InputLabel } from "@material-ui/core";

export const Labelbankaccount = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return <InputLabel id="infobankaccount">口座情報</InputLabel>;
};
