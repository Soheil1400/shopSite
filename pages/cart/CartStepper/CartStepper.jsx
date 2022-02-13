import { useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";

import { Grid, Stepper, Step, StepLabel } from "@mui/material";

import {
  ColorlibStepIconMobile,
  ColorlibStepIcon,
  ColorlibConnector,
} from "./CartStepperStyle";
import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const CartStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const Tablet = useMediaQuery("(min-width:700px)");
  const Mobile = useMediaQuery("(min-width:500px)");

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const steps = [
    {
      id: 0,
      title: "1.Cart",
      element: <FirstStep handleNext={handleNext} />,
    },
    {
      id: 1,
      title: "2.Details",
      element: <SecondStep handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      id: 2,
      title: "3.Payment",
      element: <SecondStep handleNext={handleNext} handleBack={handleBack} />,
    },
    {
      id: 3,
      title: "4.Review",
      element: <SecondStep />,
    },
  ];
  return (
    <Grid container>
      <Grid item container mb="12px" justifyContent="flex-start">
        <Stepper
          activeStep={activeStep}
          connector={
            <ColorlibConnector
              sx={{
                width: Tablet === true ? "50px" : "10px",
                display: Mobile === false ? "none" : "inline-block",
              }}
            />
          }
        >
          {steps.map((step) => (
            <Step
              key={step.id}
              completed={completed[step.id]}
              sx={{ padding: "unset" }}
            >
              <StepLabel
                StepIconComponent={
                  Mobile === false ? ColorlibStepIconMobile : ColorlibStepIcon
                }
                color="inherit"
                onClick={handleStep(step.id)}
              ></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item xs={12}>
        {steps.map((step) =>
          step.id === activeStep ? (
            <Grid item key={step.id}>
              {step.element}
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
    </Grid>
  );
};
export default CartStepper;
