import { useMediaQuery } from "@mui/material";

import { ColorlibConnector } from "./CartStepperStyle";

const StepperLabel = () => {
  const Tablet = useMediaQuery("(min-width:700px)");
  const Mobile = useMediaQuery("(min-width:500px)");

  return (
    <ColorlibConnector
      sx={{
        width: Tablet === true ? "50px" : "10px",
        display: Mobile === false ? "none" : "inline-block",
      }}
    />
  );
};
export default StepperLabel;
