import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { DateRangePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
import clsx from "clsx";
import React, { Fragment, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import useStyles from "./style";

const Booking = ({
  bookingTime,
  setBookingTime,
  locale,
  totalDate,
  isBooking,
}) => {
  const classes = useStyles();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [numbersFilter, setNumbersFilter] = useState({
    _adult: 1,
    _baby: 0,
    _toddler: 0,
  });
  const handleAddAdult = () => {
    if (numbersFilter._adult > 13) return;
    setNumbersFilter({ ...numbersFilter, _adult: numbersFilter._adult + 1 });
  };
  const handleMinusAdult = () => {
    if (numbersFilter._adult < 2) return;
    setNumbersFilter({ ...numbersFilter, _adult: numbersFilter._adult - 1 });
  };
  const handleAddBaby = () => {
    if (numbersFilter._baby > 13) return;
    setNumbersFilter({ ...numbersFilter, _baby: numbersFilter._baby + 1 });
  };
  const handleMinusBaby = () => {
    if (numbersFilter._baby < 1) return;
    setNumbersFilter({ ...numbersFilter, _baby: numbersFilter._baby - 1 });
  };
  const handleAddToddler = () => {
    if (numbersFilter._toddler > 13) return;
    setNumbersFilter({
      ...numbersFilter,
      _toddler: numbersFilter._toddler + 1,
    });
  };
  const handleMinusToddler = () => {
    if (numbersFilter._toddler < 1) return;
    setNumbersFilter({
      ...numbersFilter,
      _toddler: numbersFilter._toddler - 1,
    });
  };
  return (
    <div className={classes.room__booking__content}>
      <div>
        {totalDate < 30 && totalDate > 0 ? (
          <Typography variant="body2" className={classes.room__booking__price}>
            ${totalDate * 50}
            <Typography variant="span">/đêm</Typography>
          </Typography>
        ) : (
          <Typography variant="body2" className={classes.room__booking__price}>
            $1240<Typography variant="span">/tháng</Typography>
          </Typography>
        )}

        <Typography variant="span" className={classes.room__booking__rating}>
          <BsFillStarFill />
          5.0
          <Button disableRipple={true}>
            ( {Math.floor(Math.random() * 9 + 1)} đánh giá)
          </Button>
        </Typography>
      </div>

      {/* date picker */}
      <div className={classes.room__booking__datepicker}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
          <DateRangePicker
            open={openDatePicker}
            onClose={() => setOpenDatePicker(false)}
            okText="Xác nhận"
            cancelText="Hủy"
            startText="Nhận phòng"
            endText="Trả phòng"
            toolbarTitle="Chọn ngày thuê phòng"
            clearText="xóa phòng"
            disablePast
            value={bookingTime}
            onChange={(newValue) => {
              setBookingTime(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <div className={classes.room__booking__datepicker__content}>
                  <div>
                    <Typography
                      variant="body2"
                      className={classes.rook__booking__label}
                    >
                      NHẬN PHÒNG
                    </Typography>
                    <input
                      {...startProps.inputProps}
                      ref={startProps.inputRef}
                      className={classes.room__booking__input}
                      onClick={() => setOpenDatePicker(true)}
                      placeholder="Thêm ngày"
                    />
                  </div>

                  <div>
                    <Typography
                      variant="body2"
                      className={classes.rook__booking__label}
                    >
                      TRẢ PHÒNG
                    </Typography>
                    <input
                      {...endProps.inputProps}
                      ref={endProps.inputRef}
                      className={classes.room__booking__input}
                      onClick={() => setOpenDatePicker(true)}
                      placeholder="Thêm ngày"
                    />
                  </div>
                </div>
              </React.Fragment>
            )}
          />

          {/*  Filter */}
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className={classes.room__booking__filter}>
                  <Typography variant="body2">KHÁCH</Typography>
                  <Typography variant="span">1 khách</Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {/*  Adult */}
                <div className={classes.room__booking__filter__content}>
                  <Typography
                    variant="h5"
                    className={classes.room__booking__filter__name}
                  >
                    Người lớn
                  </Typography>
                  <Box>
                    <button
                      className={
                        numbersFilter._adult > 1
                          ? classes.room__booking__filter__btn
                          : clsx(
                              classes.room__booking__filter__btn,
                              classes.room__booking__filter__btn__disabled
                            )
                      }
                      onClick={handleMinusAdult}
                    >
                      -
                    </button>
                    <Typography variant="span">
                      {numbersFilter._adult}
                    </Typography>
                    <button
                      className={
                        numbersFilter._adult < 14
                          ? classes.room__booking__filter__btn
                          : clsx(
                              classes.room__booking__filter__btn,
                              classes.room__booking__filter__btn__disabled
                            )
                      }
                      onClick={handleAddAdult}
                    >
                      +
                    </button>
                  </Box>
                </div>

                {/* Baby */}

                <div className={classes.room__booking__filter__content}>
                  <Typography
                    variant="h5"
                    className={classes.room__booking__filter__name}
                  >
                    Trẻ em
                    <Typography variant="body2">Độ tuổi 2-12</Typography>
                  </Typography>
                  <Box>
                    <button
                      className={
                        numbersFilter._baby > 0
                          ? classes.room__booking__filter__btn
                          : clsx(
                              classes.room__booking__filter__btn,
                              classes.room__booking__filter__btn__disabled
                            )
                      }
                      onClick={handleMinusBaby}
                    >
                      -
                    </button>
                    <Typography variant="span">
                      {numbersFilter._baby}
                    </Typography>
                    <button
                      className={
                        numbersFilter._baby < 14
                          ? classes.room__booking__filter__btn
                          : clsx(
                              classes.room__booking__filter__btn,
                              classes.room__booking__filter__btn__disabled
                            )
                      }
                      onClick={handleAddBaby}
                    >
                      +
                    </button>
                  </Box>
                </div>

                {/* Toddler */}
                <div className={classes.room__booking__filter__content}>
                  <Typography
                    variant="h5"
                    className={classes.room__booking__filter__name}
                  >
                    Em bé
                    <Typography variant="body2">Dưới 2</Typography>
                  </Typography>

                  <Box>
                    <button
                      className={
                        numbersFilter._toddler > 0
                          ? classes.room__booking__filter__btn
                          : clsx(
                              classes.room__booking__filter__btn,
                              classes.room__booking__filter__btn__disabled
                            )
                      }
                      onClick={handleMinusToddler}
                    >
                      -
                    </button>
                    <Typography variant="span">
                      {numbersFilter._toddler}
                    </Typography>
                    <button
                      className={
                        numbersFilter._toddler < 14
                          ? classes.room__booking__filter__btn
                          : clsx(
                              classes.room__booking__filter__btn,
                              classes.room__booking__filter__btn__disabled
                            )
                      }
                      onClick={handleAddToddler}
                    >
                      +
                    </button>
                  </Box>
                </div>

                <Typography variant="span">
                  Tối đa 14 khách. Không tính em bé vào số lượng khách.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </LocalizationProvider>
      </div>
      <div>
        {isBooking ? (
          <Button
            onClick={() => setOpenDatePicker(true)}
            className={classes.room__booking__btnSubmit}
          >
            Kiểm tra tình trạng còn phòng
          </Button>
        ) : (
          <Button
            // onClick={() => }  xử lý logic qua trag đặt phòng
            className={classes.room__booking__btnSubmit}
          >
            Đặt phòng
          </Button>
        )}
      </div>

      {!isBooking && (
        <div>
          <Typography
            variant="body1"
            className={classes.room__booking__payment_note}
          >
            Bạn vẫn chưa bị trừ tiền
          </Typography>
          <div className={classes.room__booking__payment}>
            <div className={classes.room__booking__payment__content}>
              <Typography variant="body2">$140 x {totalDate}đêm</Typography>
              <Typography variant="span">${140 * { totalDate }}</Typography>
            </div>
            <div className={classes.room__booking__payment__content}>
              {totalDate < 7 ? null : totalDate < 30 ? (
                <Fragment>
                  <Typography
                    variant="body2"
                    className={classes.room__booking__saleFor}
                  >
                    Giảm giá theo tuần
                  </Typography>
                  <Typography variant="span">-$533</Typography>
                </Fragment>
              ) : (
                <Fragment>
                  <Typography variant="body2">Giảm giá theo tháng </Typography>
                  <Typography
                    variant="span"
                    className={classes.room__booking__saleFor}
                  >
                    -$3177
                  </Typography>
                </Fragment>
              )}
            </div>
            <div className={classes.room__booking__payment__content}>
              <Typography variant="body2">Phí dịch vụ</Typography>
              <Typography variant="span">$200</Typography>
            </div>
          </div>
          <div className={classes.room__booking__payment__content}>
            <Typography variant="h4">Tổng</Typography>
            <Typography variant="h4">$320</Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
