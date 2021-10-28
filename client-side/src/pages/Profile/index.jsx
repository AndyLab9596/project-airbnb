import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import manageAuthApi from "../../api/manageAuthApi";
import { USERID } from "../../constants/config";
import { getInfoUserAction } from "../../store/action/Auth";
import useStyles from "./style";
import moment from "moment";
const Profile = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  const infoUser = useSelector((state) => state.AuthReducer.infoUser);
  console.log(infoUser);
  const dispatch = useDispatch();
  const [fileUpload, setFileUpload] = useState(null);

  const handleChangeFile = (event) => {
    setFileUpload(event.target.files[0]);
  };

  const idUser = localStorage.getItem(USERID);

  useEffect(() => {
    const handleUpImage = async () => {
      const formData = new FormData();
      formData.append("avatar", fileUpload);
      const res = await manageAuthApi.postAvatarUser(formData);
      dispatch(getInfoUserAction(idUser));
    };

    handleUpImage();
  }, [dispatch, fileUpload, idUser]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

                  <input
                    accept="image/*"
                    className={classes.uploadInput}
                    id="icon-button-file"
                    type="file"
                    onChange={handleChangeFile}
                  />
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
                <div>
                  <Typography variant="h5" className={classes.profile__title}>
                    Xin chào, tôi là {infoUser.name}
                  </Typography>
                  <Typography className={classes.profile__text3}>
                    Bắt đầu tham gia vào 2021
                  </Typography>
                </div>
                <div style={{ marginBottom: 48 }}>
                  <Typography className={classes.profile__info__text}>
                    Thông tin cá nhân
                  </Typography>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Name</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.name}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Birthday</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {moment(infoUser.birthday).format("Do MMM YYYY")}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Address</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.address}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Email</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.email}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Phone</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.phone}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.profile__info__item}>
                    <div>
                      <Typography variant="subtitle2">Gender</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1">
                        {infoUser.gender ? "Nam" : "Nữ"}
                      </Typography>
                    </div>
                  </div>
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
                Xin chào, tôi là {infoUser.name}
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
                alt="Avatar"
                src={infoUser.avatar}
                className={classes.large}
              />
              <input
                accept="image/*"
                className={classes.uploadInput}
                id="icon-button-file"
                type="file"
                onChange={handleChangeFile}
              />
              <label htmlFor="icon-button-file">
                <Typography className={classes.uploadButton}>
                  Cập nhật ảnh
                </Typography>
              </label>
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
              {infoUser.name} đã xác nhận
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
