import {useState} from "react";
import PropTypes from "prop-types";
import {styled} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";

import {
    Grid,
    Box,
    Stepper,
    Step,
    StepLabel,
    Typography,
    StepConnector,
} from "@mui/material";
import {stepConnectorClasses} from "@mui/material/StepConnector";

import FirstStep from "../FirstStep/FirstStep";
import SecondStep from "../SecondStep/SecondStep";

const steps = [
    {id: 0, title: "1.Cart", element: <FirstStep/>},
    {id: 1, title: "2.Details", element: <SecondStep/>},
    {id: 2, title: "3.Payment", element: <SecondStep/>},
    {id: 3, title: "4.Review", element: <SecondStep/>},
];
const ColorlibStepIconRootMobile = styled(Box)(({ownerState}) => ({
    display: "inline-flex",
    borderRadius: "300px",
    cursor: "not-allowed",
    boxShadow: "unset",
    transition: "all 150ms ease-in-out 0s",
    marginTop: "4px",
    padding:"7px",
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
const ColorlibStepIconRoot = styled(ColorlibStepIconRootMobile)(({ownerState}) => ({
    padding: "0.5rem 1.5rem",
}));
function ColorlibStepIconMobile(props) {
    const {active, completed, className} = props;
    const CustomStep = styled(Typography)({
        fontSize: "9px",
        boxShadow: "none",
        margin: "unset",
        height: "21px",
        padding:"5px",
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
        <ColorlibStepIconRootMobile ownerState={{completed, active}}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRootMobile>
    );
}
function ColorlibStepIcon(props) {
    const {active, completed, className} = props;
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
        <ColorlibStepIconRoot ownerState={{completed, active}}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const ColorlibConnector = styled(StepConnector)(({theme}) => ({
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
        height: "4px",
        padding: "unset",
        marginLeft: "-8px",
        backgroundColor: "rgb(255, 225, 230)",
    },
}));



const CartStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const Tablet = useMediaQuery("(min-width:700px)");
    const Mobile=useMediaQuery("(min-width:500px)")
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
    return (
        <Grid container>
            <Grid item container mb="12px" justifyContent="flex-start">
                <Stepper activeStep={activeStep}
                         connector={<ColorlibConnector sx={{width: Tablet === true ? "50px" : "10px",display:Mobile===false?"none":"inline-block"}}/>}>
                    {steps.map((step) => (
                        <Step
                            key={step.id}
                            completed={completed[step.id]}
                            sx={{padding: "unset"}}
                        >
                            <StepLabel
                                StepIconComponent={Mobile===false? ColorlibStepIconMobile:ColorlibStepIcon}
                                color="inherit"
                                onClick={handleStep(step.id)}
                            >

                            </StepLabel>
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
