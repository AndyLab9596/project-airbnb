import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { CreateLocationAction } from "../../../store/action/LocationAction";
// import {
//   AddUserAction,
//   UpdateUserAction,
// } from "../../redux/actions/UserAction";

const schema = yup.object().shape({
  // taiKhoan: yup.string().required("*UserName is Required"),
  // matKhau: yup.string().required("*Password is Required"),
  // email: yup.string().required("*Email is Required").email("*Email is Invalid"),
  // soDt: yup
  //   .string()
  //   .required()
  //   .matches(/^[0-9]+$/, "*Phone is Invalid"),
  // maNhom: yup.string().required("*GroupID is Required"),
  // hoTen: yup.string().required("*FullName is Required"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textfield: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: 8,
  },
}));

export default function AddLocation(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { createLocation } = useSelector((state) => state.LocationReducer);
  console.log("createLocation", createLocation);
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
      name: "",
      province: "",
      country: "",
      valueate: "",
      image: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });
  console.log(values);
  // const addSuccess = () => {
  //   message.success({
  //     content: "Thêm người dùng thành công",
  //     style: { marginTop: "20px", color: "blue" },
  //     duration: 1.5,
  //   });
  // };

  // const addError = () => {
  //   message.error({
  //     content: "Tài khoản hoặc gmail đã có người sử dụng",
  //     style: { marginTop: "20px", color: "red" },
  //     duration: 1.5,
  //   });
  // };
  // const newPage = () => {
  //   history.push("/admin/users");
  // };
  const handleChangeFile = (event) => {
    setFieldValue(event.target.name, event.target.files[0]);
    // file là array mỗi lần chọn đúng 1 hình nên chọn index [0]
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    dispatch(CreateLocationAction(values));
  };

  return (
    <Container component="main" maxWidth="lg">
      <h1>Thêm vị trí</h1>
      <CssBaseline />
      <div className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            variant="outlined"
            autoFocus
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
          />
          {touched.name && (
            <p className="text-danger  text-left m-0">{errors.name}</p>
          )}
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
            autoComplete="current-password"
          />
          {touched.province && (
            <p className="text-danger  text-left m-0">{errors.province}</p>
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
            <p className="text-danger  text-left m-0">{errors.country}</p>
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
            <p className="text-danger  text-left m-0">{errors.valueate}</p>
          )}
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
    </Container>
  );
}
