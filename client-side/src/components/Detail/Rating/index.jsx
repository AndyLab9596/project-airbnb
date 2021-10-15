import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import { FAKE_AVATAR } from "../../../constants/config";
import useStyles from "./style";

const DetailRating = () => {
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
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const classes = useStyles();
  return (
    <div className={classes.room__rating}>
      <Typography variant="h5">5,0. {arrRating.length} đánh giá</Typography>
      <Slider {...settings}>
        {arrRating.map((item, index) => (
          <Box key={index} className={classes.room__rating__content}>
            <div></div>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default DetailRating;
