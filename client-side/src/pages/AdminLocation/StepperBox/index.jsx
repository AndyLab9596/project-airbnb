import { makeStyles, withStyles } from "@material-ui/core";
import SeatIcon from "@material-ui/icons/CallToActionRounded";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PaymentIcon from "@material-ui/icons/Payment";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddCommentIcon from "@material-ui/icons/AddComment";

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     backgroundColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderRadius: 1,
//   },
// }));
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: "22px !important",
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AddCommentIcon />,
    2: <AddAPhotoIcon />,
    3: <CheckCircleIcon />,
  };

  return (
    // <ColorlibStepIconRoot
    //   ownerState={{ completed, active }}
    //   className={className}
    // >
    //   {icons[String(props.icon)]}
    // </ColorlibStepIconRoot>
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? <CheckCircleIcon /> : icons[String(props.icon)]}
    </div>
  );
}

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };
const StepperBox = ({ steps, activeStep }) => {
  // const { activeStep } = useSelector((state) => state.LocationReducer);
  return (
    <Stack sx={{ width: "80%" }} spacing={0}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default StepperBox;
