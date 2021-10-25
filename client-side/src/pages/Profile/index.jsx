import { Avatar, Container, Grid, Button, Card, CardActions, CardContent, Typography, useMediaQuery, IconButton } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { useSelector, useDispatch } from "react-redux"
import { getInfoUserAction, updateAvatarUser } from "../../store/action/Auth";
import manageAuthApi from "../../api/manageAuthApi";
import { USERID } from "../../constants/config";

const Profile = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  const infoUser = useSelector(state => state.AuthReducer.infoUser)
  const dispatch = useDispatch()
  const [fileUpload, setFileUpload] = useState(null);

  const handleChangeFile = (event) => {
    setFileUpload(event.target.files[0])
  };

  const idUser = localStorage.getItem(USERID);

  useEffect(() => {

    const handleUpImage = async () => {
      const formData = new FormData();
      formData.append("avatar", fileUpload);
      const res = await manageAuthApi.postAvatarUser(formData);
      dispatch(getInfoUserAction(idUser));
    }

    handleUpImage()
  }, [dispatch, fileUpload, idUser])



  return (
    <Container maxWidth="lg" className={classes.profile}>
      {isDesktop ? (
        <div>
          <Grid container>
            <Grid item lg={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent className={classes.profile__top}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Avatar
                      alt="Avatar"
                      src={infoUser.avatar}
                      className={classes.large}
                    />
                  </div>

                  <input accept="image/*" className={classes.uploadInput} id="icon-button-file" type="file" onChange={handleChangeFile} />
                  <label htmlFor="icon-button-file">
                    <Typography className={classes.uploadButton}>
                      Cập nhật ảnh
                    </Typography>
                  </label>
                  <div style={{ marginTop: 32, marginBottom: 16 }}>
                    <VerifiedUserOutlinedIcon />
                  </div>
                  <Typography className={classes.pos}>
                    Xác minh danh tính
                  </Typography>
                  <Typography className={classes.profile__text1}>
                    Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
                  </Typography>
                  <Button className={classes.profile__button} size="small">
                    Nhận huy hiệu
                  </Button>
                </CardContent>
                <CardActions style={{ display: "block", paddingTop: 20 }}>
                  <Typography variant="h6" style={{ marginBottom: 12 }}>
                    {infoUser.name} đã xác nhận
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <DoneOutlinedIcon style={{ marginRight: 5 }} />
                    <Typography style={{ marginBottom: 20 }}>
                      Địa chỉ email
                    </Typography>
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={8}>
              <div className={classes.profile__left}>
                <div style={{ marginBottom: 48 }}>
                  <Typography variant="h5" className={classes.profile__title}>
                    Xin chào, tôi là {infoUser.name}
                  </Typography>
                  <Typography className={classes.profile__text3}>
                    Bắt đầu tham gia vào 2021
                  </Typography>
                  <Typography className={classes.profile__text}>
                    Chỉnh sửa hồ sơ
                  </Typography>
                </div>
                <div className={classes.profile__left__item}>
                  <StarOutlinedIcon style={{ marginRight: 8 }} />
                  <Typography
                    style={{
                      fontSize: 22,
                      lineHeight: "28px",
                      fontWeight: 600,
                    }}
                  >
                    0 đánh giá
                  </Typography>
                </div>
                <div className={classes.profile__left__item2}>
                  <Typography className={classes.profile__text}>
                    Đánh giá của bạn
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className={classes.profile__mobile}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Typography
                variant="h5"
                className={classes.profile__mobile__title}
              >
                Xin chào, tôi là Phat
              </Typography>
              <Typography className={classes.profile__text3}>
                Bắt đầu tham gia vào 2021
              </Typography>
              <Typography className={classes.profile__text}>
                Chỉnh sửa hồ sơ
              </Typography>
            </div>
            <div>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large2}
              />
              <Typography
                className={classes.profile__text}
                style={{ textAlign: "center" }}
              >
                Cập nhật ảnh
              </Typography>
            </div>
          </div>
          <div style={{ marginTop: 32, marginBottom: 16 }}>
            <VerifiedUserOutlinedIcon />
          </div>
          <div className={classes.profile__top}>
            <Typography className={classes.pos}>Xác minh danh tính</Typography>
            <Typography className={classes.profile__text1}>
              Xác thực danh tính của bạn với huy hiệu xác minh danh tính.
            </Typography>
            <Button className={classes.profile__button} size="small">
              Nhận huy hiệu
            </Button>
          </div>
          <div
            className={classes.profile__mobile__item}
            style={{ display: "block", paddingTop: 20 }}
          >
            <Typography variant="h6" style={{ marginBottom: 12 }}>
              Phat đã xác nhận
            </Typography>
            <div style={{ display: "flex" }}>
              <DoneOutlinedIcon style={{ marginRight: 5 }} />
              <Typography style={{ marginBottom: 20 }}>
                Địa chỉ email
              </Typography>
            </div>
          </div>

          <div className={classes.profile__left__item2}>
            <StarOutlinedIcon style={{ marginRight: 8 }} />
            <Typography
              style={{ fontSize: 22, lineHeight: "28px", fontWeight: 600 }}
            >
              0 đánh giá
            </Typography>
          </div>
          <div className={classes.profile__left__item2}>
            <Typography className={classes.profile__text}>
              Đánh giá của bạn
            </Typography>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Profile;
