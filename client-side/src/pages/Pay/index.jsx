import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  IconButton,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import useStyles from "./style";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
const Pay = () => {
  const classes = useStyles();
  const [valueGroup, setValueGroup] = React.useState("Visa");

  const handleChangeRadioGroup = (event) => {
    setValueGroup(event.target.value);
  };
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container className={classes.pay} maxWidth={false}>
      <Box paddingTop={20}>
        <div className={classes.pay__title}>
          <IconButton className={classes.icon}>
            <ArrowBackIosIcon className={classes.pay__title__icon} />
          </IconButton>
          {/* <button>
            <ArrowBackIosIcon className={classes.pay__title__icon} />
          </button> */}
          <Typography className={classes.pay__title__text} variant="subtitle1">
            Xác nhận và thanh toán
          </Typography>
        </div>
        <div>
          <Grid container>
            <Grid item lg={6} md={6} style={{ marginBottom: 100 }}>
              <div className={classes.pay__left__noti}>
                <div className={classes.pay__left__noti__content}>
                  <div className={classes.pay__left__noti__content__left}>
                    <Typography
                      className={classes.pay__left__noti__text}
                      variant="subtitle1"
                    >
                      Giá thấp hơn.
                    </Typography>
                    <Typography variant="subtitle2">
                      Những ngày bạn chọn có giá thấp hơn $13 so với mức giá
                      trung bình theo đêm trong 60 ngày qua.
                    </Typography>
                  </div>
                  <div className={classes.pay__left__noti__content__right}>
                    <NotificationsNoneIcon />
                  </div>
                </div>
              </div>
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
                    <Typography>3 thg 11 – 6 thg 11</Typography>
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
                </div>
              </div>
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
                        $82,71
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
                      <Typography>$41,36</Typography>
                    </div>
                    <Typography className={classes.pay__radio__style}>
                      Thanh toán ngay $41,36 và phần còn lại ($41,35) sẽ tự động
                      được trừ vào cùng phương thức thanh toán này vào 21 thg
                      10, 2021. Không phát sinh phụ phí.
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
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderTop: "1px solid rgb(221, 221, 221)",
                }}
              >
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
                    Thêm và xác nhận số điện thoại của bạn để nhận thông tin cập
                    nhật về chuyến đi.
                  </Typography>
                </div>
              </div>
              <div>
                <div className={classes.pay__item__style__title}>
                  <Typography className={classes.pay__item__title}>
                    Chính sách hủy
                  </Typography>
                </div>
                <div style={{ paddingBottom: 24 }}>
                  <span>Hủy miễn phí trước 14:00, ngày 29 thg 10. </span>
                  <span>
                    Sau đó, hãy hủy trước 14:00 ngày 3 thg 11 để được hoàn lại
                    50%, trừ chi phí đêm đầu tiên và phí dịch vụ.
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
                    dụng cho các trường hợp gián đoạn đi lại do COVID-19 gây ra.{" "}
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
              <div className={classes.pay__item__style__title}>
                <span>Bằng việc chọn nút bên dưới, tôi đồng ý với</span>
                <span>
                  {" "}
                  Nội quy nhà của Chủ nhà, Các yêu cầu về an toàn trong đại dịch
                  COVID-19 của Airbnb và Chính sách hoàn tiền cho khách.
                </span>
              </div>
              <div>
                <Button className={classes.pay__button__confirm}>
                  Xác nhận và thanh toán
                </Button>
              </div>
            </Grid>
            <Grid item lg={6} md={6}>
              <Box className={classes.pay__right}>
                <div>
                  <div className={classes.pay__left__noti}>
                    <Box paddingBottom={3}>
                      <Box display="flex">
                        <Box flex="0 0 35%">
                          <img
                            src="https://a0.muscache.com/im/pictures/896c6768-8c48-4a39-b24f-e63b58ee3de6.jpg?aki_policy=large"
                            alt="img"
                            className={classes.pay__right__img}
                          />
                        </Box>
                        <div className={classes.pay__right__style}>
                          <Typography
                            className={classes.pay__right__text1}
                            variant="caption"
                          >
                            Toàn bộ căn hộ cho thuê tại Quận 4
                          </Typography>
                          <div>
                            <Typography
                              variant="body1"
                              className={classes.pay__right__text}
                            >
                              Masteri Millennium Studio with Amazing City View
                            </Typography>
                            <Typography variant="caption">
                              1 giường · 1 phòng tắm
                            </Typography>
                          </div>
                          <Box display="flex" flexWrap="wrap">
                            <Box paddingRight={3}>
                              <div className={classes.pay__right__item}>
                                <StarIcon
                                  className={classes.pay__right__item__icon}
                                />
                                <span>4.87 (172 đánh giá)</span>
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
                    <div>
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
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
};

export default Pay;
