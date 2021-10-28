import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import * as yup from "yup";
import TextFieldComponent from "../../../components/Login/TextField";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  postUploadImageAction,
  putUpdateLocationAction,
} from "../../../store/action/LocationAction";
import { RESET_DATA_LOCATION } from "../../../store/types/LocationType";
import StepperBox from "../StepperBox";
import queryString from "query-string";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Box } from "@mui/system";
import ButtonSubmit from "../../../components/ButtonSubmit";
import useStyles from "./style";
const schema = yup.object().shape({
  name: yup.string().required("*Name is Required"),
  province: yup.string().required("*Province is Required"),
  country: yup.string().required("*Country is Required"),
  valueate: yup.string().required("*Valueate is Required"),
});

export default function EditLocation(props) {
  const history = useHistory();

  const dispatch = useDispatch();
  const location = useLocation();
  const { locationId } = queryString.parse(location.search);

  const { locations } = useSelector((state) => state.LocationReducer);
  const [image, setImage] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const LocationEdit = locations.filter((user) => user._id === locationId);
  const classes = useStyles({ activeStep, image });

  const formik = useFormik({
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

  const data = {
    name: formik.values.name,
    province: formik.values.province,
    country: formik.values.country,
    valueate: formik.values.valueate,
  };

  const handleChangeFile = async (e) => {
    formik.setFieldValue(e.target.name, e.target.files[0]);
    let file = e?.target?.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImage(e.target.result);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(putUpdateLocationAction(data, locationId));
  };
  const handleImage = async (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    const formData = new FormData();
    formData.append("location", formik.values.image);

    dispatch(
      postUploadImageAction(formData, locationId, () =>
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      )
    );
  };
  const handleClickBack = () => {
    dispatch(createAction(RESET_DATA_LOCATION));
    history.push("/admin/locations");
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const steps = ["CẬP NHẬT VỊ TRÍ", "CẬP NHẬT HÌNH ẢNH", "KẾT QUẢ"];
  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.root}>
        <StepperBox steps={steps} activeStep={activeStep} />
      </div>

      <div className={classes.edit_content}>
        <h1 className={classes.edit_title}>Cập nhật vị trí</h1>
        <div className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextFieldComponent
              {...formik}
              label="Name"
              name="name"
              valueInput={formik.values.name}
              errorInput={formik.errors.name}
              touchedInput={formik.touched.name}
            />
            <TextFieldComponent
              {...formik}
              label="Province"
              name="province"
              valueInput={formik.values.province}
              errorInput={formik.errors.province}
              touchedInput={formik.touched.province}
            />
            <TextFieldComponent
              {...formik}
              label="Country"
              name="country"
              valueInput={formik.values.country}
              errorInput={formik.errors.country}
              touchedInput={formik.touched.country}
            />

            <TextFieldComponent
              {...formik}
              label="Valueate"
              name="valueate"
              valueInput={formik.values.valueate}
              errorInput={formik.errors.valueate}
              touchedInput={formik.touched.valueate}
            />

            <ButtonSubmit text="Cập nhật" />
          </form>
        </div>
      </div>
      {activeStep === 1 && (
        <Fragment>
          <div className={classes.upload__card}>
            <div className={classes.upload__card__content}>
              <label htmlFor="contained-button-file">
                <GetAppIcon className={classes.upload__card__icons} />
              </label>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                name="image"
                onChange={handleChangeFile}
              />
              <label
                className={classes.upload__card__label}
                htmlFor="contained-button-file"
              >
                {image !== null
                  ? "Click change image"
                  : " Click choose a image"}
              </label>
            </div>
          </div>
          <Box className={classes.upload__card__btnContent}>
            <div>
              <Button
                onClick={handleBack}
                className={classes.upload__card__btnReset}
                color="primary"
              >
                Quay lại
              </Button>
            </div>
            <div>
              <ButtonSubmit handleSubmit={handleImage} text="Cập nhật" />
            </div>
          </Box>
        </Fragment>
      )}
      {activeStep === 2 && (
        <div>
          <div className={classes.completed}>Thêm phòng thành công</div>

          <div className={classes.completedAdd}>
            <div>
              <Button
                onClick={handleReset}
                className={classes.upload__card__btnReset}
                color="primary"
              >
                Reset
              </Button>
            </div>
            <div>
              <ButtonSubmit handleSubmit={handleClickBack} text="Hoàn thành" />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
