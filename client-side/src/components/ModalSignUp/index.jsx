import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { useFormik } from "formik";
import moment from "moment";
import React, { Fragment } from "react";
import useStyles from "./style";
import * as yup from "yup";

const schemaValidation = yup.object().shape({
  name: yup.string().required("*FulName is required"),
  password: yup.string().required("*Password is required"),
  email: yup.string().required("*Email is required").email("*Email is Invalid"),
  phone: yup
    .number()
    .required("*Phone is required")
    .min(8, "Phone must have 8-11 characters")
    .max(11, "Phone must have 8-11 characters"),
  address: yup.string().required("*Address is required"),
});

const ModalSignUp = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(touched);

    if (!inValid) return;
  };
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    inValid,
    setFieldValue,
    touched,
  } = useFormik({
    validateOnMount: true,
    validationSchema: schemaValidation,
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      gender: "",
      address: "",
      birthday: "",
    },
  });

  const handleChangeDate = (e) => {
    setFieldValue("birthday", moment(e.target.value).format("YYYY/MM/DD"));
  };
  const handleChangeGender = (e) => {
    setFieldValue("gender", e.target.value);
  };
  const classes = useStyles();
  return (
    <Fragment>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.root}>
          <div className={classes.modal__content}>
            <div className={classes.modal__header}>
              <IconButton>
                <CloseIcon />
              </IconButton>
              <Typography variant="body2">
                Chào mừng bạn đến với Airbnb
              </Typography>
              <div></div>
            </div>
            <div className={classes.modal__detail}>
              <Typography variant="h3">Đăng Ký</Typography>
              <form onSubmit={handleSubmitForm}>
                <TextField
                  variant="outlined"
                  label="Email"
                  className={classes.form__input}
                  InputLabelProps={{
                    style: { fontSize: 13 },
                  }}
                  name="email"
                  onChange={handleChange}
                  onBLur={handleBlur}
                  value={values.email}
                />

                {touched.email && (
                  <Typography variant="body2"> {errors.email}</Typography>
                )}

                <TextField
                  type="password"
                  variant="outlined"
                  label="Password"
                  className={classes.form__input}
                  InputLabelProps={{
                    style: { fontSize: 13 },
                  }}
                  name="password"
                  onChange={handleChange}
                  onBLur={handleBlur}
                  value={values.password}
                />

                {touched.password && (
                  <Typography variant="body2">{errors.password}</Typography>
                )}

                <TextField
                  variant="outlined"
                  label="Full Name"
                  className={classes.form__input}
                  InputLabelProps={{
                    style: { fontSize: 13 },
                  }}
                  name="name"
                  onChange={handleChange}
                  onBLur={handleBlur}
                  value={values.name}
                />

                {touched.name && (
                  <Typography variant="body2">{errors.name}</Typography>
                )}
                <TextField
                  type="number"
                  variant="outlined"
                  label="Phone"
                  className={classes.form__input}
                  InputLabelProps={{
                    style: { fontSize: 13 },
                  }}
                  name="phone"
                  onChange={handleChange}
                  onBLur={handleBlur}
                  value={values.phone}
                />
                {touched.phone && (
                  <Typography variant="body2"> {errors.phone}</Typography>
                )}

                <TextField
                  type="date"
                  variant="outlined"
                  label="Birthday"
                  className={classes.form__input}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="birthday"
                  onChange={handleChangeDate}
                  onBLur={handleBlur}
                />
                <RadioGroup
                  className={classes.form__radio}
                  onChange={handleChangeGender}
                >
                  <Box display="flex" alignItems="center">
                    <FormLabel>Gender : </FormLabel>
                    <FormControlLabel
                      control={<Radio color="primary" />}
                      label="Male"
                      name="male"
                      value="true"
                    />

                    <FormControlLabel
                      control={<Radio />}
                      label="Fermale"
                      name="fermale"
                      value="false"
                    />
                  </Box>
                </RadioGroup>
                <TextField
                  variant="outlined"
                  label="Address"
                  className={classes.form__input}
                  InputLabelProps={{
                    style: { fontSize: 13 },
                  }}
                  name="address"
                  onChange={handleChange}
                  onBLur={handleBlur}
                  value={values.address}
                />
                {touched.address && (
                  <Typography variant="body2"> {errors.address}</Typography>
                )}
                <Button type="submit" className={classes.form__btnSubmit}>
                  Tiếp tục
                </Button>
                <Box textAlign="center">
                  <Typography variant="span">
                    Already have an account?
                    <Typography
                      variant="span"
                      className={classes.form__textLogin}
                    >
                      Login Here
                    </Typography>
                  </Typography>
                </Box>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};
export default ModalSignUp;
