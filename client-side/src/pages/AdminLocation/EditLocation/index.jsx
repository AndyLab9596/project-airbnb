import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
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
import { useFormik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  postUploadImageAction,
  putUpdateLocationAction,
} from "../../../store/action/LocationAction";
import { RESET_DATA_LOCATION } from "../../../store/types/LocationType";
// import { UpdateUserAction } from "../../redux/actions/UserAction";
import useStyles from "./style";
const schema = yup.object().shape({
  name: yup.string().required("*Name is Required"),
  province: yup.string().required("*Province is Required"),
  country: yup.string().required("*Country is Required"),
  valueate: yup.string().required("*Valueate is Required"),
});

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#3f51b5",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#3f51b5",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SeatIcon />,
    2: <PaymentIcon />,
    3: <CheckCircleIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
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
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["CẬP NHẬT VỊ TRÍ", "CẬP NHẬT HÌNH ẢNH", "KẾT QUẢ"];

export default function EditLocation(props) {
  console.log(props);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const userId = props.match.params.userId;
  console.log(userId);
  const { locations } = useSelector((state) => state.LocationReducer);
  const { activeStep } = useSelector((state) => state.LocationReducer);
  const LocationEdit = locations.filter((user) => user._id === userId);

  console.log(LocationEdit);

  const {
    handleChange,
    values,
    setFieldValue,
    errors,
    isValid,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: LocationEdit[0]?.name,
      province: LocationEdit[0]?.province,
      country: LocationEdit[0]?.country,
      valueate: LocationEdit[0]?.valueate,
    },
    validationSchema: schema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  console.log(values);

  const data = {
    name: values.name,
    province: values.province,
    country: values.country,
    valueate: values.valueate,
  };

  const handleChangeFile = async (event) => {
    setFieldValue(event.target.name, event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    dispatch(putUpdateLocationAction(data, userId));
  };
  const handleImage = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    const formData = new FormData();
    formData.append("location", values.image);
    console.log(formData.get("location"));
    dispatch(postUploadImageAction(formData, userId));
  };
  const handleClickBack = () => {
    dispatch(createAction(RESET_DATA_LOCATION));
    history.push("/admin/locations");
  };

  return (
    <Container component="main" maxWidth="lg">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #DDDDDD",
          paddingBottom: 25,
        }}
      >
        <Stack sx={{ width: "80%" }} spacing={0}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  classes={{ root: classes.label }}
                  StepIconComponent={ColorlibStepIcon}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </div>

      <div style={{ display: activeStep !== 0 ? "none" : "block" }}>
        <h1 style={{ margin: "10px 0" }}>Cập nhật vị trí</h1>
        <div className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
            />
            {touched.name && <p className={classes.hyperText}>{errors.name}</p>}
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.province}
              className={classes.textfield}
              variant="outlined"
              required
              fullWidth
              name="province"
              label="Province"
              id="province"
            />
            {touched.province && (
              <p className={classes.hyperText}>{errors.province}</p>
            )}
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
              className={classes.textfield}
              name="country"
              variant="outlined"
              required
              fullWidth
              id="country"
              label="Country"
            />
            {touched.country && (
              <p className={classes.hyperText}>{errors.country}</p>
            )}
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.valueate}
              className={classes.textfield}
              name="valueate"
              variant="outlined"
              required
              fullWidth
              id="valueate"
              label="Valueate"
            />
            {touched.valueate && (
              <p className={classes.hyperText}>{errors.valueate}</p>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cập nhật
            </Button>
          </form>
        </div>
      </div>
      {activeStep === 1 && (
        <div>
          <h1 style={{ margin: "10px 0" }}>Thêm hình ảnh</h1>
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            name="image"
            onChange={handleChangeFile}
          />
          <label htmlFor="raised-button-file">
            <Button
              fullWidth
              variant="contained"
              component="span"
              className={classes.button}
            >
              Upload
            </Button>
          </label>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleImage}
          >
            Thêm hình
          </Button>
        </div>
      )}
      {activeStep === 2 && (
        <div>
          <h1 style={{ margin: "10px 0" }}>
            Thêm vị trí và hình ảnh thành công
          </h1>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClickBack}
          >
            Quay về
          </Button>
        </div>
      )}
    </Container>
  );
}
