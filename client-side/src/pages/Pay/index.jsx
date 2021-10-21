import {
  Box,
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FacebookIcon from "@material-ui/icons/Facebook";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import StarIcon from "@material-ui/icons/Star";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { Fragment, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router";
import useStyles from "./style";
import queryString from "query-string";
import moment from "moment";
import { useSelector } from "react-redux";
import BookingPrice from "../../components/BookingPrice";
import { formMoney } from "../../utilities/coordinates";
import { LocalizationProvider, StaticDateRangePicker } from "@mui/lab";
import { vi } from "date-fns/locale";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import GuestCount from "../../components/GuestCount";
import ButtonSubmit from "../../components/ButtonSubmit";
import ResultTicket from "./ResultTicket";
const Pay = () => {
  const location = useLocation();
  const history = useHistory();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
    };
  }, [location.search]);
  console.log(queryParams);
  const { detailRoom } = useSelector((state) => state.ListRoomReducer);
  console.log(detailRoom);
  const [bookingTime, setBookingTime] = useState([
    new Date(queryParams._checkIn),
    new Date(queryParams._checkOut),
  ]);
  console.log(bookingTime);
  const totalDateTime = bookingTime[1] - bookingTime[0];
  const totalDate = totalDateTime / (1000 * 3600 * 24);
  // const today = new Date(queryParams._checkIn);

  const date = new Date().setDate(bookingTime[0].getDate() - 4);
  const daysAgo = new Date(date);

  const classes = useStyles();
  const [valueGroup, setValueGroup] = React.useState("Visa");

  const handleChangeRadioGroup = (event) => {
    setValueGroup(event.target.value);
  };
  const totalPrice = () => {
    return totalDate < 7
      ? formMoney(detailRoom?.price * totalDate + 100000)
      : totalDate > 30
      ? formMoney(detailRoom?.price * (totalDate - 5) + 100000)
      : formMoney(detailRoom?.price * (totalDate - 1) + 100000);
  };
  // const [selectedValue, setSelectedValue] = React.useState("a");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };
  const [open, setOpen] = React.useState({
    modalDate: false,
    modalPay: false,
    modalGuest: false,
  });

  const handleOpen = () => {
    setOpen({ ...open, modalDate: true });
  };
  const handleOpen1 = () => {
    setOpen({ ...open, modalPay: true });
  };
  const handleOpen2 = () => {
    setOpen({ ...open, modalGuest: true });
  };
  const handleClose = () => {
    setOpen({ ...open, modalDate: false, modalPay: false, modalGuest: false });
  };
  const text = "Xác nhận và thanh toán";
  const text2 = "Quay về trang chủ";
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
  const [numbersFilter, setNumbersFilter] = useState({
    _adult: Number(queryParams._adult),
    _children: Number(queryParams._children),
    _toddler: Number(queryParams._toddler),
  });
  const handleClickBackHome = () => {
    history.push("/");
  };
  return (
    <div>
      <Container className={classes.pay} maxWidth={false}>
        <Box>
          <div className={classes.pay__title}>
            <IconButton className={classes.icon}>
              <ArrowBackIosIcon className={classes.pay__title__icon} />
            </IconButton>
            <Typography
              className={classes.pay__title__text}
              variant="subtitle1"
            >
              Xác nhận và thanh toán
            </Typography>
          </div>
          <div className={classes.pay__content}>
            <Grid container>
              <Grid item lg={6} md={6} style={{ marginBottom: 100 }}>
                {/* NOTI */}

                {/* CHUYẾN ĐI CỦA BẠN  */}
                <div className={classes.pay__item}>
                  <Typography className={classes.pay__item__title}>
                    Chuyến đi của bạn
                  </Typography>
                </div>
                <div className={classes.pay__item}>
                  <div className={classes.pay__item__style}>
                    <div>
                      <Typography
                        className={classes.pay__text__style}
                        variant="subtitle2"
                      >
                        Ngày
                      </Typography>
                      <Typography variant="span">
                        {moment(bookingTime[0]).format("Do MMM  YYYY")} -
                        <Typography variant="span">
                          {moment(bookingTime[1]).format("Do MMM  YYYY")}
                        </Typography>
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        onClick={handleOpen}
                        className={classes.pay__button__style}
                      >
                        Chỉnh sửa
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={classes.pay__item}>
                  <div className={classes.pay__item__style}>
                    <div>
                      <Typography
                        className={classes.pay__text__style}
                        variant="subtitle2"
                      >
                        Khách
                      </Typography>
                      <Typography>1 khách</Typography>
                    </div>
                    <div>
                      <Typography
                        onClick={handleOpen2}
                        className={classes.pay__button__style}
                      >
                        Chỉnh sửa
                      </Typography>
                    </div>
                  </div>
                </div>

                {/* CHỌN CÁCH THANH TOÁN 
                <div className={classes.pay__item__style__title}>
                  <Typography className={classes.pay__item__title}>
                    Chọn cách thanh toán
                  </Typography>
                </div>
                <Box paddingBottom={3}>
                  <div className={classes.pay__radio__top}>
                    <div style={{ flex: "0 0 92%" }}>
                      <div className={classes.pay__item__style}>
                        <Typography
                          className={classes.pay__text__style}
                          variant="subtitle2"
                        >
                          Trả toàn bộ
                        </Typography>
                        <Typography style={{ paddingLight: 60 }}>
                          {formMoney(detailRoom?.price * totalDate)}
                        </Typography>
                      </div>
                      <Typography className={classes.pay__radio__style}>
                        Thanh toán toàn bộ số tiền ngay bây giờ và bạn đã sẵn
                        sàng.
                      </Typography>
                    </div>
                    <div
                      style={{ flex: "0 0 4%" }}
                      className={classes.pay__radio__right}
                    >
                      <Radio
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "A" }}
                      />
                    </div>
                  </div>
                  <div className={classes.pay__radio__bot}>
                    <div style={{ flex: "0 0 92%" }}>
                      <div className={classes.pay__item__style}>
                        <Typography
                          className={classes.pay__text__style}
                          variant="subtitle2"
                        >
                          Trả ngay một phần, phần còn lại trả sau
                        </Typography>
                        <Typography>
                          {formMoney((detailRoom?.price * totalDate) / 2)}
                        </Typography>
                      </div>
                      <Typography className={classes.pay__radio__style}>
                        Thanh toán ngay{" "}
                        {formMoney((detailRoom?.price * totalDate) / 2)} và phần
                        còn lại {formMoney((detailRoom?.price * totalDate) / 2)}{" "}
                        sẽ tự động được trừ vào cùng phương thức thanh toán này
                        vào 21 thg 10, 2021. Không phát sinh phụ phí.
                      </Typography>
                      <div>
                        <Typography className={classes.pay__button__style}>
                          Thông tin thêm
                        </Typography>
                      </div>
                    </div>
                    <div
                      style={{ flex: "0 0 4%" }}
                      className={classes.pay__radio__right1}
                    >
                      <Radio
                        checked={selectedValue === "b"}
                        onChange={handleChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "B" }}
                      />
                    </div>
                  </div>
                </Box> */}

                {/* THANH TOÁN BẰNG  */}
                <div className={classes.pay__left__payment}>
                  <div>
                    <Typography className={classes.pay__item__title}>
                      Thanh toán bằng
                    </Typography>
                  </div>
                  <div>
                    <ul className={classes.pay__left__list}>
                      <li>
                        <img
                          src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_googlepay.3f786bc031b59575d24f504dfb859da0.svg"
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_paypal.faa3042fa2daf6b4a9822cc4b43e8609.svg"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={valueGroup}
                    onChange={handleChangeRadioGroup}
                  >
                    <FormControlLabel
                      value="Visa"
                      control={<Radio />}
                      label="Visa"
                    />
                    <FormControlLabel
                      value="MasterCard"
                      control={<Radio />}
                      label="Master Card"
                    />
                    <FormControlLabel
                      value="GooglePay"
                      control={<Radio />}
                      label="Google Pay"
                    />
                    <FormControlLabel
                      value="Paypal"
                      control={<Radio />}
                      label="Paypal"
                    />
                  </RadioGroup>
                  <div style={{ padding: "24px 0" }}>
                    <Typography className={classes.pay__button__style}>
                      Chỉnh sửa
                    </Typography>
                  </div>
                </div>

                {/* BẮT BUỘC CHUYẾN ĐI CỦA BẠN  */}
                <div>
                  <div className={classes.pay__item__style__title}>
                    <Typography className={classes.pay__item__title}>
                      Bắt buộc cho chuyến đi của bạn
                    </Typography>
                  </div>
                  <div style={{ paddingBottom: 24 }}>
                    <div className={classes.pay__item__style}>
                      <Typography
                        className={classes.pay__text__style}
                        variant="subtitle2"
                      >
                        Ảnh đại diện
                      </Typography>
                    </div>
                    <Typography className={classes.pay__radio__style}>
                      Chủ nhà muốn biết người sẽ ở nhà họ là ai.
                    </Typography>
                  </div>
                  <div style={{ paddingBottom: 24 }}>
                    <div className={classes.pay__item__style}>
                      <Typography
                        className={classes.pay__text__style}
                        variant="subtitle2"
                      >
                        Số điện thoại
                      </Typography>
                    </div>
                    <Typography className={classes.pay__radio__style}>
                      Thêm và xác nhận số điện thoại của bạn để nhận thông tin
                      cập nhật về chuyến đi.
                    </Typography>
                  </div>
                </div>

                {/* CHÍNH SÁCH HỦY  */}
                <div>
                  <div className={classes.pay__item__style__title}>
                    <Typography className={classes.pay__item__title}>
                      Chính sách hủy
                    </Typography>
                  </div>
                  <div style={{ paddingBottom: 24 }}>
                    <span className={classes.pay__item__content__text}>
                      Hủy miễn phí trước 14:00, ngày{" "}
                      {moment(daysAgo).format("Do MMM YYYY")}.
                    </span>
                    <span>
                      {" "}
                      Sau đó, hãy hủy trước 14:00 ngày{" "}
                      {moment(bookingTime[0]).format("Do MMM YYYY")}. để được
                      hoàn lại 50%, trừ chi phí đêm đầu tiên và phí dịch vụ.
                    </span>
                    <div>
                      <a
                        href="https://www.airbnb.com.vn/help/article/149/t%C3%ACm-ch%C3%ADnh-s%C3%A1ch-h%E1%BB%A7y-%C3%A1p-d%E1%BB%A5ng-cho-%C4%91%E1%BA%B7t-ph%C3%B2ng-c%E1%BB%A7a-b%E1%BA%A1n"
                        className={classes.pay__button__style}
                      >
                        Tìm hiểu thêm
                      </a>
                    </div>
                  </div>
                  <div style={{ paddingBottom: 24 }}>
                    <span>
                      Chính sách trường hợp bất khả kháng của chúng tôi không áp
                      dụng cho các trường hợp gián đoạn đi lại do COVID-19 gây
                      ra.{" "}
                    </span>
                    <div>
                      <a
                        href="https://www.airbnb.com.vn/help/article/2701/ch%C3%ADnh-s%C3%A1ch-tr%C6%B0%E1%BB%9Dng-h%E1%BB%A3p-b%E1%BA%A5t-kh%E1%BA%A3-kh%C3%A1ng-v%C3%A0-%C4%91%E1%BA%A1i-d%E1%BB%8Bch-vir%C3%BAt-corona-covid19"
                        className={classes.pay__button__style}
                      >
                        Tìm hiểu thêm
                      </a>
                    </div>
                  </div>
                </div>

                {/* XÁC NHẬN VÀ THANH TOÁN  */}
                <div className={classes.pay__item__style__title}>
                  <span>Bằng việc chọn nút bên dưới, tôi đồng ý với</span>
                  <span>
                    {" "}
                    Nội quy nhà của Chủ nhà, Các yêu cầu về an toàn trong đại
                    dịch COVID-19 của Airbnb và Chính sách hoàn tiền cho khách.
                  </span>
                </div>
                <div >
                  <ButtonSubmit
                    handleSubmit={handleOpen1}
                    text={text}
                    // className={classes.pay__button__confirm}
                  />
                </div>
              </Grid>

              {/* RIGHT  */}
              <Grid item lg={6} md={6}>
                <Box className={classes.pay__right}>
                  <div>
                    <div className={classes.pay__left__noti}>
                      <Box paddingBottom={3}>
                        <Box display="flex">
                          <Box flex="0 0 35%">
                            <img
                              src={detailRoom.image}
                              alt="img"
                              className={classes.pay__right__img}
                            />
                          </Box>
                          <div className={classes.pay__right__style}>
                            <Typography
                              className={classes.pay__right__text1}
                              variant="caption"
                            >
                              Toàn bộ căn hộ cho thuê tại{" "}
                              {detailRoom?.locationId?.name}
                            </Typography>
                            <div>
                              <Typography
                                variant="body1"
                                className={classes.pay__right__text}
                              >
                                {detailRoom.name}
                              </Typography>
                              <Typography variant="caption">
                                {detailRoom.guests} khách
                              </Typography>
                              <Typography variant="caption">
                                · {detailRoom.bath} phòng tắm
                              </Typography>{" "}
                              <Typography variant="caption">
                                · {detailRoom.bedRoom} phòng ngủ
                              </Typography>
                            </div>
                            <Box display="flex" flexWrap="wrap">
                              <Box paddingRight={3}>
                                <div className={classes.pay__right__item}>
                                  <StarIcon
                                    className={classes.pay__right__item__icon}
                                  />
                                  <span>
                                    {detailRoom?.locationId?.valueate} (172 đánh
                                    giá)
                                  </span>
                                </div>
                              </Box>
                              <div>
                                <div className={classes.pay__right__item}>
                                  <FavoriteIcon
                                    className={classes.pay__right__item__icon}
                                  />
                                  <span>Chủ nhà siêu cấp</span>
                                </div>
                              </div>
                            </Box>
                          </div>
                        </Box>
                      </Box>
                      <div className={classes.pay__item__style__title}>
                        <Typography className={classes.pay__item__title}>
                          Chi tiết giá
                        </Typography>
                      </div>
                      <BookingPrice
                        totalDate={totalDate}
                        detailRoom={detailRoom}
                      />
                      {/* <div>
                        <div className={classes.pay__right__table}>
                          <div className={classes.pay__right__table__item}>
                            <Typography variant="body1">
                              $24,16 x 3 đêm
                            </Typography>
                          </div>
                          <div>
                            <Typography variant="body1">$72,48</Typography>
                          </div>
                        </div>
                        <div className={classes.pay__right__table}>
                          <div className={classes.pay__right__table__item}>
                            <Typography
                              variant="body1"
                              style={{ textDecoration: "underline" }}
                            >
                              Phí dịch vụ
                            </Typography>
                          </div>
                          <div>
                            <Typography variant="body1">$10,23</Typography>
                          </div>
                        </div>
                        <div className={classes.pay__right__table}>
                          <div className={classes.pay__right__table__item}>
                            <Typography variant="body1">Tổng (USD)</Typography>
                          </div>
                          <div>
                            <Typography variant="body1">$82,71</Typography>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>

        <Dialog
          onClose={handleClose}
          open={open.modalDate || open.modalPay || open.modalGuest}
          maxWidth="md"
          className={classes.root}
          keepMounted
        >
          {open.modalPay && (
            <div style={{ padding: 30 }}>
              {/* <ResultTicket /> */}
              <div className={classes.ButtonResult}>
                <ResultTicket
                  valueGroup={valueGroup}
                  totalDate={totalDate}
                  detailRoom={detailRoom}
                  totalPrice={totalPrice}
                />
                <ButtonSubmit
                  handleSubmit={handleClickBackHome}
                  // className={classes.ButtonResultItem}.
                  text={text2}
                />
              </div>
            </div>
          )}
          {open.modalDate && (
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
              <StaticDateRangePicker
                disablePast
                displayStaticWrapperAs="desktop"
                value={bookingTime}
                // calendars={isDesktop ? 2 : 1}
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
          )}
          {open.modalGuest && (
            <div style={{ padding: 20 }}>
              <GuestCount
                numbersFilter={numbersFilter}
                setNumbersFilter={setNumbersFilter}
              />
            </div>
          )}
        </Dialog>
      </Container>
      <div className={classes.footer__bot}>
        <div className={classes.footer__item__bot}>
          <li className={classes.footer__item__list__first}>
            <span>© 2021 Airbnb, Inc.</span>
          </li>
          <li className={classes.footer__item__list__end}>
            <a href="https://www.airbnb.com.vn/help/article/2855/ch%C3%ADnh-s%C3%A1ch-quy%E1%BB%81n-ri%C3%AAng-t%C6%B0">
              Quyền riêng tư
            </a>
          </li>
          <li className={classes.footer__item__list__end}>
            <a href="https://www.airbnb.com.vn/help/article/2855/ch%C3%ADnh-s%C3%A1ch-quy%E1%BB%81n-ri%C3%AAng-t%C6%B0">
              Điều khoản
            </a>
          </li>
          <li className={classes.footer__item__list__end}>
            <a href="https://www.airbnb.com.vn/sitemaps/v2">Sơ đồ trang web</a>
          </li>
        </div>
        <div
          className={classes.footer__bot__content}
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginRight: "24px" }}>
              <span>
                <LanguageIcon />
              </span>
              <span>Tiếng Việt (VN)</span>
            </div>
            <div style={{ display: "flex", marginRight: "24px" }}>
              <span>
                <AttachMoneyIcon />
              </span>
              <span>USD</span>
            </div>
          </div>
          <div className={classes.footer__bot__content1}>
            <ul>
              <li>
                <a href="">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
