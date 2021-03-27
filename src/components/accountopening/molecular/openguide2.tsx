import React, { useContext } from "react";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import { AccountOpeningContext } from "../accountopeningContext";
import { mystyles } from "~/styles/makestyles";

export const OpenGuide = () => {
  const { stepwrapper, steplabel } = mystyles();
  const { step, arraysteps } = useContext(AccountOpeningContext);
  const guide = arraysteps.map((label, index) => {
    const stepProps = {};
    const labelProps = {};
    return (
      <Step key={label} {...stepProps}>
        <StepLabel {...labelProps}>
          <Typography component="p" className={steplabel}>
            {label}
          </Typography>
        </StepLabel>
      </Step>
    );
  });

  return (
    <Stepper activeStep={step} className={stepwrapper}>
      {guide}
    </Stepper>
  );
};
