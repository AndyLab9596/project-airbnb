import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import TextFieldComponent from "../../../components/Login/TextField";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  CreateLocationAction,
  postUploadImageAction,
} from "../../../store/action/LocationAction";
import { RESET_DATA_LOCATION } from "../../../store/types/LocationType";
import StepperBox from "../StepperBox";
import useStyles from "./style";

const schema = yup.object().shape({
  name: yup.string().required("*Name is Required"),
  province: yup.string().required("*Province is Required"),
  country: yup.string().required("*Country is Required"),
  valueate: yup.string().required("*Valueate is Required"),
});

export default function AddLocation(props) {
  const history = useHistory();

  const dispatch = useDispatch();
  const { createLocation } = useSelector((state) => state.LocationReducer);
  const { activeStep } = useSelector((state) => state.LocationReducer);
  const classes = useStyles({ activeStep });

  const formik = useFormik({
    initialValues: {
      name: "",
      province: "",
      country: "",
      valueate: "",
      image: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const data = {
    name: formik.values.name,
    province: formik.values.province,
    country: formik.values.country,
    valueate: formik.values.valueate,
  };

  const handleChangeFile = (event) => {
    formik.setFieldValue(event.target.name, event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    dispatch(CreateLocationAction(data));
  };
  const handleImage = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    const formData = new FormData();
    formData.append("location", formik.values.image);

    dispatch(postUploadImageAction(formData, createLocation._id));
  };
  const handleClickBack = () => {
    dispatch(createAction(RESET_DATA_LOCATION));
    history.push("/admin/locations");
  };
  const steps = ["THÊM VỊ TRÍ", "THÊM HÌNH ẢNH", "KẾT QUẢ"];
  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.root}>
        <StepperBox steps={steps} />
      </div>

      <div className={classes.add_content}>
        <h1 className={classes.add_title}>Thêm vị trí</h1>
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Thêm
            </Button>
          </form>
        </div>
      </div>
      {activeStep === 1 && (
        <div>
          <h1 className={classes.add_title}>Thêm hình ảnh</h1>
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
          <h1 className={classes.add_title}>
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
