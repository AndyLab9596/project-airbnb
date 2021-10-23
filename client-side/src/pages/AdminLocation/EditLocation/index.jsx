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
// import { UpdateUserAction } from "../../redux/actions/UserAction";

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
    marginTop: 25,
  },
}));

export default function EditLocation(props) {
  console.log(props);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const userId = props.match.params.userId;
  console.log(userId);
  const { locations } = useSelector((state) => state.LocationReducer);
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
  // const updateSuccess = () => {
  //   message.success({
  //     content: "Cập nhật người dùng thành công",
  //     style: { marginTop: "20px", color: "blue" },
  //     duration: 1.5,
  //   });
  // };

  // const updateError = () => {
  //   message.error({
  //     content: "Vui lòng nhập đúng thông tin ",
  //     style: { marginTop: "20px", color: "red" },
  //     duration: 1.5,
  //   });
  // };
  const newPage = () => {
    history.push("/admin/users");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(UpdateUserAction(values, updateSuccess, updateError, newPage));
  };

  return (
    <Container component="main" maxWidth="lg">
      <h2>Cập nhật vị trí</h2>
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
          {/* <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.matKhau}
            className={classes.textfield}
            variant="outlined"
            required
            fullWidth
            name="matKhau"
            label="Mật khẩu"
            type="password"
            id="matKhau"
            autoComplete="current-password"
          />
          {touched.matKhau && (
            <p className="text-danger  text-left m-0">{errors.matKhau}</p>
          )} */}
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.province}
            className={classes.textfield}
            name="province"
            variant="outlined"
            required
            fullWidth
            id="province"
            label="Province"
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
            variant="outlined"
            required
            fullWidth
            id="valueate"
            label="Valueate"
            name="valueate"
            autoComplete="valueate"
          />
          {touched.valueate && (
            <p className="text-danger  text-left m-0">{errors.valueate}</p>
          )}

          {/* <TextField
            className={classes.textfield}
            id="outlined-select-currency-native"
            name="maLoaiNguoiDung"
            select
            label="Loại người dùng"
            fullWidth
            value={values.maLoaiNguoiDung}
            onChange={(e) => setFieldValue("maLoaiNguoiDung", e.target.value)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            
          </TextField> */}
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
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
          {/* {touched.valueate && (
            <p className="text-danger  text-left m-0">{errors.valueate}</p>
          )} */}
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
    </Container>
  );
}
