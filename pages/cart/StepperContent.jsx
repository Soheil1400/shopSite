import { Grid } from "@mui/material";

const StepperContent = ({ activeStep, steps }) => {
  return (
    <>
      {steps.map((step) =>
        step.id === activeStep ? (
          <Grid item key={step.id}>
            {step.element}
          </Grid>
        ) : (
          ""
        )
      )}
    </>
  );
};
export default StepperContent;
