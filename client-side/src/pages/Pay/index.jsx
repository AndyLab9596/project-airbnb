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
  return (
    <Container className={classes.pay} maxWidth="xl">
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
            <Grid item lg={6} style={{ marginBottom: 100 }}>
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
                  <div>
                    <Typography className={classes.pay__button__style}>
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
                    <Typography className={classes.pay__button__style}>
                      Chỉnh sửa
                    </Typography>
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
                  <div>
                    <div className={classes.pay__item__style}>
                      <Typography
                        className={classes.pay__text__style}
                        variant="subtitle2"
                      >
                        Trả toàn bộ
                      </Typography>
                      <Typography>$82,71</Typography>
                    </div>
                    <Typography className={classes.pay__radio__style}>
                      Thanh toán toàn bộ số tiền ngay bây giờ và bạn đã sẵn
                      sàng.
                    </Typography>
                  </div>
                  <div className={classes.pay__radio__right}>
                    <input
                      type="radio"
                      className={classes.pay__radio__right__item}
                    />
                  </div>
                </div>
                <div className={classes.pay__radio__bot}>
                  <div>
                    <div className={classes.pay__item__style}>
                      <Typography
                        className={classes.pay__text__style}
                        variant="subtitle2"
                      >
                        Trả ngay một phần, phần còn lại trả sau
                      </Typography>
                      <Typography style={{ paddingRight: 15 }}>
                        $41,36
                      </Typography>
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
                  <div className={classes.pay__radio__right}>
                    <input
                      type="radio"
                      className={classes.pay__radio__right__item}
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
                  <ul style={{ display: "flex" }}>
                    <li>
                      <img
                        style={{ height: 10 }}
                        src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        style={{ height: 10 }}
                        src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        style={{ height: 10 }}
                        src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        style={{ height: 10 }}
                        src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        style={{ height: 10 }}
                        src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
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
                  // value={value}
                  // onChange={handleChange}
                >
                  <FormControlLabel
                    value="visa"
                    control={<Radio />}
                    label="Visa"
                  />
                  <FormControlLabel
                    value="masterCard"
                    control={<Radio />}
                    label="Master Card"
                  />
                  <FormControlLabel
                    value="googlePay"
                    control={<Radio />}
                    label="Google Pay"
                  />
                  <FormControlLabel
                    value="paypal"
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
                    <Typography className={classes.pay__button__style}>
                      Chỉnh sửa
                    </Typography>
                  </div>
                </div>
                <div style={{ paddingBottom: 24 }}>
                  <span>
                    Chính sách trường hợp bất khả kháng của chúng tôi không áp
                    dụng cho các trường hợp gián đoạn đi lại do COVID-19 gây ra.{" "}
                  </span>
                  <div>
                    <Typography className={classes.pay__button__style}>
                      Chỉnh sửa
                    </Typography>
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
            <Grid item lg={6}>
              <Box position="sticky" top={200} marginBottom={12} marginLeft={8}>
                <div>
                  <div className={classes.pay__left__noti}>
                    <div style={{ paddingBottom: 24 }}>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: "0 0 35%" }}>
                          <img
                            src="https://a0.muscache.com/im/pictures/896c6768-8c48-4a39-b24f-e63b58ee3de6.jpg?aki_policy=large"
                            alt="img"
                            style={{ width: 115, height: 100, borderRadius: 8 }}
                          />
                        </div>
                        <div
                          style={{
                            flex: "0 0 65%",
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            paddingBottom: 5,
                          }}
                        >
                          <Typography variant="caption">
                            Toàn bộ căn hộ cho thuê tại Quận 4
                          </Typography>
                          <div>
                            <Typography
                              variant="body1"
                              style={{ fontSize: 14 }}
                            >
                              Masteri Millennium Studio with Amazing City View
                            </Typography>
                            <Typography variant="caption">
                              1 giường · 1 phòng tắm
                            </Typography>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap" }}>
                            <div style={{ paddingRight: 14 }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontWeight: 400,
                                  fontSize: 12,
                                }}
                              >
                                <StarIcon
                                  style={{
                                    fontWeight: 400,
                                    fontSize: 15,
                                    color: "red",
                                    paddingRight: 2,
                                  }}
                                />

                                <span>4.87 (172 đánh giá)</span>
                              </div>
                            </div>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontWeight: 400,
                                  fontSize: 12,
                                }}
                              >
                                <FavoriteIcon
                                  style={{
                                    fontWeight: 400,
                                    fontSize: 15,
                                    paddingRight: 2,
                                    color: "red",
                                  }}
                                />

                                <span>Chủ nhà siêu cấp</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.pay__item__style__title}>
                      <Typography className={classes.pay__item__title}>
                        Chi tiết giá
                      </Typography>
                    </div>
                    <div>
                      <div style={{ display: "table", marginBottom: 15 }}>
                        <div style={{ display: "table-cell", width: "100%" }}>
                          <Typography variant="body1">
                            $24,16 x 3 đêm
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="body1">$72,48</Typography>
                        </div>
                      </div>
                      <div style={{ display: "table", marginBottom: 15 }}>
                        <div style={{ display: "table-cell", width: "100%" }}>
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
                      <div style={{ display: "table", marginBottom: 15 }}>
                        <div style={{ display: "table-cell", width: "100%" }}>
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
