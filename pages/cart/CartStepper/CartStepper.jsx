import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Theme from "../../../theme/theme";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import FirstStep from "../FirstStep/FirstStep";
const steps = [
  { id: 0, title: "1.Cart", element: <FirstStep/> },
  { id: 1, title: "2.Details", element: "2" },
  { id: 2, title: "3.Payment", element: "3" },
  { id: 3, title: "4.Review", element: "4" },
];
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const CustomStep = styled(Typography)({
    fontSize: "14px",
    fontWeight: "600",
    boxShadow: "none",
    margin: "unset",
    height: "21px",
    textAlign: "center",
    "&:hover": {
      color: "inherit",
      backgroundColor: "inherit",
    },
    "&:active": {
      color: "inherit",
      backgroundColor: "inherit",
    },
  });
  const icons = {
    1: <CustomStep>1. Cart</CustomStep>,
    2: <CustomStep>2. Details</CustomStep>,
    3: <CustomStep>3. Payment</CustomStep>,
    4: <CustomStep>4. Review</CustomStep>,
  };
  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,

  icon: PropTypes.node,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      boxShadow: "none",
      backgroundColor: "rgb(233, 69, 96)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      boxShadow: "none",
      backgroundColor: "rgb(233, 69, 96)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    boxShadow: "none",
    cursor: "unset",
    width: "50px",
    height: "4px",
    padding: "unset",
    margin: "unset",
    backgroundColor: "rgb(255, 225, 230)",
  },
}));

const ColorlibStepIconRoot = styled(Box)(({ ownerState }) => ({
  display: "inline-flex",
  borderRadius: "300px",
  cursor: "not-allowed",
  boxShadow: "unset",
  transition: "all 150ms ease-in-out 0s",
  padding: "0.5rem 1.5rem",
  marginTop: "4px",
  marginBottom: "4px",
  backgroundColor: "rgb(255, 225, 230)",
  color: "rgb(233, 69, 96)",
  ...(ownerState.active && {
    backgroundColor: "rgb(233, 69, 96)",
    color: "white",
  }),
  ...(ownerState.completed && {
    backgroundColor: "rgb(233, 69, 96)",
    color: "white",
  }),
}));

const CartStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const totalSteps = () => {
    return steps.length;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item mb="12px">
        <Stepper activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((step) => (
            <Step
              key={step.id}
              completed={completed[step.id]}
              sx={{ padding: "unset" }}
            >
              <StepLabel
                StepIconComponent={ColorlibStepIcon}
                color="inherit"
                onClick={handleStep(step.id)}
              ></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid container item xs={12}>
        {steps.map((step) => (step.id === activeStep ? <Grid item key={step.id}>{step.element}</Grid> : ""))}
      </Grid>
    </Grid>
  );
};
export default CartStepper;
