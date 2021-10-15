import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import SingleBedOutlinedIcon from "@material-ui/icons/SingleBedOutlined";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import TextField from "@mui/material/TextField";
import clsx from "clsx";
import { vi } from "date-fns/locale";
import moment from "moment";
import "moment/locale/vi";
import React, { Fragment, useState } from "react";
import { AiOutlineHome, AiOutlineKey, AiOutlineWifi } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { GiFireBowl, GiTrophyCup } from "react-icons/gi";
import {
  MdCable,
  MdDryCleaning,
  MdElevator,
  MdFireplace,
  MdHotTub,
  MdKitchen,
  MdPool,
  MdWifi,
} from "react-icons/md";
import { FAKE_AVATAR } from "../../../constants/config";
import Booking from "./Booking";
import useStyles from "./style";

const ContentRoom = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  const classes = useStyles({ isMobile });
  const numberBedroom = 2; // sau này lấy từ query params của api về
  const arrUtilitiesRoom = [
    {
      name: "Toàn bộ nhà ",
      icon: <AiOutlineHome />,
      desc: "Bạn sẽ có biệt thự cho riêng mình.",
    },
    {
      name: "Vệ sinh tăng cường",
      icon: <BsBookmarkStar />,
      desc: "Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb.",
    },
    {
      name: "Trải nghiệm nhận phòng tuyệt vời",
      icon: <AiOutlineKey />,
      desc: "100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.",
    },
    {
      name: "Tiện nghi cho cuộc sống hàng ngày ",
      icon: <AiOutlineWifi />,
      desc: "Chủ nhà đã trang bị chỗ ở này để cho thuê dài hạn – có sẵn nhà bếp, Wi-fi, máy giặt và chỗ đỗ xe miễn phí.",
    },
  ];
  const arrBedroom = [
    {
      icon: <SingleBedOutlinedIcon />,
      name: "Phòng ngủ 1",
      desc: "1 giường queen",
    },
    {
      icon: [<KingBedOutlinedIcon />, <SingleBedOutlinedIcon />],
      name: "Phòng ngủ 2",
      desc: "1 giường queen,1 giường đôi",
    },
  ];
  const arrReviewsRoom = [
    {
      name: "Thang máy",
      status: true,
      icon: <MdElevator />,
    },
    {
      name: "Bồn nước nóng",
      status: false,
      icon: <MdHotTub />,
    },
    {
      name: "Hồ bơi",
      status: true,
      icon: <MdPool />,
    },
    {
      name: "Bình chữa cháy",
      status: false,
      icon: <MdFireplace />,
    },
    {
      name: "Máy sấy tóc",
      status: false,
      icon: <MdDryCleaning />,
    },
    {
      name: "Phòng Gym",
      status: true,
      icon: <CgGym />,
    },
    {
      name: "Nhà bếp",
      status: true,
      icon: <MdKitchen />,
    },
    {
      name: "Wifi",
      status: true,
      icon: <MdWifi />,
    },
    {
      name: "Lò sửi ấm",
      status: true,
      icon: <GiFireBowl />,
    },
    {
      name: "Lò sửi ấm",
      status: true,
      icon: <MdCable />,
    },
  ];
  const startDate = "10-14-2021";
  const endDate = "10-20-2021";

  const [bookingTime, setBookingTime] = useState([
    new Date(startDate),
    new Date(endDate),
  ]);

  const totalDateTime = bookingTime[1] - bookingTime[0];
  const totalDate = totalDateTime / (1000 * 3600 * 24);
  const isBooking = bookingTime.some((item) => item === null);
  //  {day.charAt(0).toUpperCase() : phần này thư viện đang xét cứng chỉ lấy đc 1 chữ cái đầu
  // nên không thể lấy T2 T3 T4 như mẫu được , tạm thời lấy 2 3 4 5 ... C
  // const days = ["CN","T2", "T3", "T4", "T5", "T6", "T7" ];
  const days = ["C", "2", "3", "4", "5", "6", "7"];
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const locale = {
    ...vi,
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
  };

  return (
    <div className={classes.container}>
      <Grid container wrap="nowrap">
        <Grid item xs={12} md={7}>
          <div className={classes.room__info}>
            {/* Info Host */}
            <div className={classes.room__info__host}>
              <div>
                <Typography variant="body2">Toàn bộ biệt thự</Typography>
                <Typography variant="body2">Chủ nhà Quang Huy</Typography>
              </div>
              <Box position="relative">
                <img
                  src={FAKE_AVATAR}
                  alt="avatar"
                  className={classes.avatar__host}
                />
                <GiTrophyCup className={classes.medal__host} />
              </Box>
            </div>

            <div>
              <Typography variant="span">
                14 khách.5 phòng ngủ .7 giường.5 phòng tắm đầy đủ và 1 phòng vệ
                sinh cơ bản
              </Typography>
            </div>
          </div>

          {/*  Utilities Room */}
          <div className={classes.room__utilities}>
            {arrUtilitiesRoom.map((item) => (
              <Box className={classes.room__utilities_content}>
                <div>{item.icon}</div>
                <div>
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="span">{item.desc}</Typography>
                </div>
              </Box>
            ))}
          </div>

          {/* Description */}
          <div className={classes.room_description}>
            <Typography variant="span">
              Được thiết kế theo phong cách Pháp của kts Hồ Thiệu Trị cùng đồng
              nghiệp.
              <br />
              Mang phong cách biệt thự ngoại ô với sân vườn nhiều loại cây ăn
              trái và rau củ.
              <br />
              Nằm trong khu biệt thự Thanh Bình, Long Cung. Cách bãi tắm Thủy
              Tiên từ 5-10p đi bộ, phù hợp với gia đình nghĩ dưỡng với không
              gian yên tĩnh và riêng tư.
            </Typography>
          </div>

          {/* Bedroom */}
          <div className={classes.room__bedroom}>
            <Typography variant="h5">Nơi bạn sẽ ngủ nghỉ</Typography>
            <Grid container wrap="nowrap">
              {arrBedroom.slice(0, `${numberBedroom}`).map((item) => (
                <Grid item xs={6} className={classes.room__bedroom__content}>
                  <div>{item.icon}</div>
                  <div className={classes.room__bedroom__detail}>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="span">{item.desc}</Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>

          {/* Review */}

          <div className={classes.room__reviews}>
            <Typography variant="h1">Nơi này có những gì cho bạn</Typography>
            <Grid container>
              {arrReviewsRoom.map((item, index) => (
                <Grid item key={index} xs={12} xl={6}>
                  <di className={classes.room__reviews__content}>
                    {item.icon}
                    <Typography
                      variant="body1"
                      className={clsx(
                        classes.room__reviews__title,
                        item.status
                          ? null
                          : classes.room_reviews__title__linethrough
                      )}
                    >
                      {item.name}
                    </Typography>
                  </di>
                </Grid>
              ))}
            </Grid>
          </div>

          {/* Date pickter */}

          <div className={classes.room_datepicker}>
            {isBooking ? (
              <Fragment>
                <Typography variant="h1">Chọn ngày nhận phòng</Typography>
                <Typography variant="span">
                  Thêm ngày đi để biết giá chính xác
                </Typography>
              </Fragment>
            ) : (
              <Fragment>
                <Typography variant="h1">
                  {totalDate} đêm tại thành phố vũng tàu
                </Typography>
                <Typography variant="span">
                  {moment(bookingTime[0]).format("Do MMM  YYYY")} -
                  <Typography variant="span">
                    {moment(bookingTime[1]).format("Do MMM  YYYY")}
                  </Typography>
                </Typography>
              </Fragment>
            )}

            <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
              <StaticDateRangePicker
                disablePast
                displayStaticWrapperAs="desktop"
                value={bookingTime}
                calendars={isDesktop ? 2 : 1}
                onChange={(newValue) => {
                  setBookingTime(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </Fragment>
                )}
              />
            </LocalizationProvider>
            <div className={classes.rooom__datepicker__btnDelete}>
              <Button
                onClick={() => {
                  setBookingTime([null, null]);
                }}
              >
                Xóa ngày
              </Button>
            </div>
          </div>
        </Grid>

        {/*  Booking */}
        {isTablet && (
          <Grid item sm={5} className={classes.room__booking}>
            <Booking
              bookingTime={bookingTime}
              setBookingTime={setBookingTime}
              locale={locale}
              totalDate={totalDate}
              isBooking={isBooking}
            />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ContentRoom;
