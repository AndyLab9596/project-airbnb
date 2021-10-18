import {
  Button,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Modal,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { FAKE_AVATAR } from "../../../constants/config";
import CatalogRating from "./CatalogRating";
import ContentUserRating from "./ContentUserRating";
import useStyles from "./style";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  SHOW_MODAL_RATED,
  HIDE_MODAL_RATED,
} from "../../../store/types/ListRoomType";

const DetailRating = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isDeskTop = useMediaQuery(theme.breakpoints.up("xl"));
  const [valueInput, setValueInput] = useState(null);
  const dispatch = useDispatch();
  const { modalRated } = useSelector((state) => state.ListRoomReducer);
  const handleShowModal = () => {
    dispatch(createAction(SHOW_MODAL_RATED));
  };
  const handleHideModal = () => {
    dispatch(createAction(HIDE_MODAL_RATED));
  };
  const arrDetailRating = [
    {
      name: "Mức độ sạch sẽ",
      value: 5,
    },
    {
      name: "Độ chính xác",
      value: 4.2,
    },
    {
      name: "Liên lạc",
      value: 5,
    },
    {
      name: "Vị trí",
      value: 4.8,
    },
    {
      name: "Nhận phòng",
      value: 4.5,
    },
    {
      name: "Giá trị",
      value: 3,
    },
  ];

  const arrRating = [
    {
      _id: "6169230defe193001c0a5a74",
      content:
        "Villa hợp đi nhóm bạn/gia đình. Đầy đủ tiện nghi, ở ngoài đẹp hơn hình. Rất thích hồ bơi, nước trong không mùi. Chủ nhà thân thiện vui vẻ. Highly recommended!",
      roomId: {},
      userId: {
        tickets: [],
        _id: "6166deb1dc423b001dd9c145",
        name: "Nguyễn Phong Kha",
        email: "huyquang111@gmail.com",
        password:
          "$2a$10$sBAETyVKBNKIl1ynhgKnmOZmlQ4ZFlu5rYDJjrf19KpaVElfmnZvq",
        phone: "0909876987",
        birthday: "1998-05-11T00:00:00.000Z",
        gender: true,
        address: "191A Chường Trinh Quận 12",
        type: "CLIENT",
        img: FAKE_AVATAR,
        __v: 0,
      },
      created_at: "2021-10-15T06:43:25.782Z",
      updatedAt: "2021-10-15T06:43:25.782Z",
      __v: 0,
    },
    {
      _id: "6169230defe193001c0a5a74",
      content:
        "Villa hợp đi nhóm bạn/gia đình. Đầy đủ tiện nghi, ở ngoài đẹp hơn hình. Rất thích hồ bơi, nước trong không mùi. Chủ nhà thân thiện vui vẻ. Highly recommended!",
      roomId: {},
      userId: {
        tickets: [],
        _id: "6166deb1dc423b001dd9c145",
        name: "Nguyễn Phong Kha",
        email: "huyquang111@gmail.com",
        password:
          "$2a$10$sBAETyVKBNKIl1ynhgKnmOZmlQ4ZFlu5rYDJjrf19KpaVElfmnZvq",
        phone: "0909876987",
        birthday: "1998-05-11T00:00:00.000Z",
        gender: true,
        address: "191A Chường Trinh Quận 12",
        type: "CLIENT",
        img: FAKE_AVATAR,
        __v: 0,
      },
      created_at: "2021-10-15T06:43:25.782Z",
      updatedAt: "2021-10-15T06:43:25.782Z",
      __v: 0,
    },
    {
      _id: "6169230defe193001c0a5a74",
      content:
        "Host is professional, welcomed us though we checked in quite late. She gave us a house tour with detailed guidance before leaving, gifted us cupcakes on checkout. Her team also gave best effort in supporting anything we need. Totally worths the price!",
      roomId: {},
      userId: {
        tickets: [],
        _id: "6166deb1dc423b001dd9c145",
        name: "Nguyễn Phong Kha",
        email: "huyquang111@gmail.com",
        password:
          "$2a$10$sBAETyVKBNKIl1ynhgKnmOZmlQ4ZFlu5rYDJjrf19KpaVElfmnZvq",
        phone: "0909876987",
        birthday: "1998-05-11T00:00:00.000Z",
        gender: true,
        address: "191A Chường Trinh Quận 12",
        type: "CLIENT",
        img: FAKE_AVATAR,
        __v: 0,
      },
      created_at: "2021-10-15T06:43:25.782Z",
      updatedAt: "2021-10-15T06:43:25.782Z",
      __v: 0,
    },
    {
      _id: "6169230defe193001c0a5a74",
      content: "dsadsa",
      roomId: {},
      userId: {
        tickets: [],
        _id: "6166deb1dc423b001dd9c145",
        name: "Nguyễn Phong Kha",
        email: "huyquang111@gmail.com",
        password:
          "$2a$10$sBAETyVKBNKIl1ynhgKnmOZmlQ4ZFlu5rYDJjrf19KpaVElfmnZvq",
        phone: "0909876987",
        birthday: "1998-05-11T00:00:00.000Z",
        gender: true,
        address: "191A Chường Trinh Quận 12",
        type: "CLIENT",
        img: FAKE_AVATAR,
        __v: 0,
      },
      created_at: "2021-10-15T06:43:25.782Z",
      updatedAt: "2021-10-15T06:43:25.782Z",
      __v: 0,
    },
    {
      _id: "6169230defe193001c0a5a74",
      content: "dsadsa",
      roomId: {},
      userId: {
        tickets: [],
        _id: "6166deb1dc423b001dd9c145",
        name: "Nguyễn Phong Kha",
        email: "huyquang111@gmail.com",
        password:
          "$2a$10$sBAETyVKBNKIl1ynhgKnmOZmlQ4ZFlu5rYDJjrf19KpaVElfmnZvq",
        phone: "0909876987",
        birthday: "1998-05-11T00:00:00.000Z",
        gender: true,
        address: "191A Chường Trinh Quận 12",
        type: "CLIENT",
        img: FAKE_AVATAR,
        __v: 0,
      },
      created_at: "2021-10-15T06:43:25.782Z",
      updatedAt: "2021-10-15T06:43:25.782Z",
      __v: 0,
    },
    {
      _id: "6169230defe193001c0a5a74",
      content: "dsadsa",
      roomId: {},
      userId: {
        tickets: [],
        _id: "6166deb1dc423b001dd9c145",
        name: "Nguyễn Phong Kha",
        email: "huyquang111@gmail.com",
        password:
          "$2a$10$sBAETyVKBNKIl1ynhgKnmOZmlQ4ZFlu5rYDJjrf19KpaVElfmnZvq",
        phone: "0909876987",
        birthday: "1998-05-11T00:00:00.000Z",
        gender: true,
        address: "191A Chường Trinh Quận 12",
        type: "CLIENT",
        img: FAKE_AVATAR,
        __v: 0,
      },
      created_at: "2021-10-15T06:43:25.782Z",
      updatedAt: "2021-10-15T06:43:25.782Z",
      __v: 0,
    },
  ];
  // const arrRating = [];
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: `${classes.slider}`,
  };
  const arrFilterContent = arrRating.filter((item) =>
    item.content.toLowerCase().includes(valueInput)
  );
  return (
    <div className={classes.room__rating} id="rated">
      {arrRating.length > 0 ? (
        <Fragment>
          <div className={classes.room__rating__totalRated}>
            <Typography variant="span">
              <BsFillStarFill />
            </Typography>
            <Typography variant="span">
              5,0 - {arrRating.length} đánh giá
            </Typography>
          </div>
          {isTablet ? (
            <Grid container>
              {arrDetailRating.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  xl={modalRated && 12}
                  key={index}
                  className={classes.room__rating__modal__detailRating}
                >
                  <CatalogRating item={item} />
                </Grid>
              ))}
              {arrRating.slice(0, 6).map((item, index) => (
                <Grid item md={12} xl={6} key={index}>
                  <Box py={2} pr={isDeskTop && 10}>
                    <ContentUserRating
                      item={item}
                      handleShowModal={handleShowModal}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Slider {...settings}>
              {arrRating.slice(0, 4).map((item, index) => (
                <Box key={index} className={classes.room__rating__container}>
                  <ContentUserRating
                    item={item}
                    handleShowModal={handleShowModal}
                  />
                </Box>
              ))}
              {arrRating.length > 4 && (
                <Box className={classes.room__rating__container}>
                  <Typography
                    variant="body2"
                    className={classes.room__rating__textShowAll}
                    onClick={handleShowModal}
                  >
                    Hiển thị tất cả {arrRating.length} đánh giá
                  </Typography>
                </Box>
              )}
            </Slider>
          )}

          <div>
            <Button
              disableRipple
              className={classes.room__rating__btnShowAll}
              onClick={handleShowModal}
            >
              Hiển thị tất cả {arrRating.length} đánh giá
            </Button>
          </div>
          <Modal
            open={modalRated}
            onClose={handleHideModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
          >
            <div className={classes.room__rating__modal}>
              <div className={classes.room__rating__modal__header}>
                <IconButton>
                  <AiOutlineClose onClick={handleHideModal} />
                </IconButton>
                <div>
                  <div className={classes.room__rating__totalRated}>
                    <Typography variant="span">
                      <BsFillStarFill />
                    </Typography>
                    <Typography variant="span">
                      5,0 - {arrRating.length} đánh giá
                    </Typography>
                  </div>

                  <div className={classes.room__rating__modal__inputSearch}>
                    <Input
                      startAdornment={
                        <InputAdornment position="start">
                          <MdSearch />
                        </InputAdornment>
                      }
                      placeholder="Tìm kiếm đánh giá"
                      value={valueInput}
                      onChange={(e) => setValueInput(e.target.value)}
                    >
                      Tìm kiếm theo đánh giá
                    </Input>
                  </div>
                </div>
              </div>

              {/* Detail Rating */}

              <Grid container spacing={3}>
                <Grid item xs={12} xl={4}>
                  <Grid item container>
                    {arrDetailRating.map((item, index) => (
                      <Grid
                        item
                        xs={12}
                        md={6}
                        xl={12}
                        key={index}
                        className={classes.room__rating__modal__detailRating}
                      >
                        <CatalogRating item={item} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} xl={8}>
                  <div
                    className={classes.room__rating__modal__content__userRated}
                  >
                    {arrFilterContent.length > 0
                      ? arrFilterContent.map((item) => (
                          <div>
                            <ContentUserRating
                              item={item}
                              handleShowModal={handleShowModal}
                              openModal={modalRated}
                            />
                          </div>
                        ))
                      : arrRating.map((item) => (
                          <div>
                            <ContentUserRating
                              item={item}
                              handleShowModal={handleShowModal}
                              openModal={modalRated}
                            />
                          </div>
                        ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Modal>
        </Fragment>
      ) : (
        <div className={classes.room__rating__title__notRating}>
          <Typography variant="h5">Chưa có đánh giá</Typography>
          <Typography variant="span">
            Chúng tôi luôn sẵn sàng hỗ trợ để chuyến đi của bạn được suôn sẻ.
            Mọi đặt phòng đều được bảo vệ theo
          </Typography>
          <a href="https://www.airbnb.com/help/article/544">
            Chính sách hoàn tiền cho khách của Airbnb
          </a>
        </div>
      )}
    </div>
  );
};

export default DetailRating;
