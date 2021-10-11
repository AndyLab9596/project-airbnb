import { Button, IconButton, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { useFormik } from "formik";
import React, { Fragment } from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { createAction } from "../../../store/action/createAction/createAction";
import { HIDE_MODAL_SIGNIN } from "../../../store/types/AuthType";
import TextFieldComponent from "../TextField";
import useStyles from "./style";

const schemaValidation = yup.object().shape({
  password: yup.string().required("*Password is required"),
  email: yup.string().required("*Email is required").email("*Email is Invalid"),
});

const ModalSignIn = () => {
  const { modalSignIn } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(createAction(HIDE_MODAL_SIGNIN));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
  };
  const formik = useFormik({
    validateOnMount: true,
    validationSchema: schemaValidation,
    initialValues: {
      email: "",
      password: "",
    },
  });

  const classes = useStyles();

  const arrLoginWith = [
    {
      name: "Tiếp tục với Facebook",
      icon: <FaFacebook className={classes.iconFacebook} />,
    },
    {
      name: "Tiếp tục với Google",
      icon: <FcGoogle />,
    },
    {
      name: "Tiếp tục với Apple",
      icon: <FaApple />,
    },
  ];

  return (
    <Fragment>
      <Modal
        open={modalSignIn}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.root}
      >
        <div className={classes.modal__content}>
          <div className={classes.modal__header}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography variant="body2">
              Chào mừng bạn đến với Airbnb
            </Typography>
            <div></div>
          </div>
          <div className={classes.modal__detail}>
            <Typography variant="h3">Đăng Nhập</Typography>
            <form onSubmit={handleSubmitForm}>
              <TextFieldComponent
                {...formik}
                label="Email"
                name="email"
                valueInput={formik.values.email}
                errorInput={formik.errors.email}
                touchedInput={formik.touched.email}
              />
              <TextFieldComponent
                {...formik}
                type="password"
                label="Password"
                name="password"
                valueInput={formik.values.password}
                errorInput={formik.errors.password}
                touchedInput={formik.touched.password}
              />
              <Button type="submit" className={classes.form__btnSubmit}>
                Tiếp tục
              </Button>
            </form>
            <div className={classes.modal__line}>
              <Typography variant="span">hoặc</Typography>
            </div>
            <div className={classes.form__continue__login}>
              {arrLoginWith.map((item, index) => (
                <div
                  key={index}
                  className={classes.form__continue__login__with}
                >
                  <div>{item.icon}</div>
                  <Typography variant="span">{item.name}</Typography>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};
export default ModalSignIn;
