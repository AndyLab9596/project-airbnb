import {
  Button,
  IconButton,
  Modal,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import useStyles from "./style";
import moment from "moment";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";
import { LocalizationProvider, StaticDateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { formMoney } from "../../../../../utilities/coordinates";

const BookingMobile = ({
  bookingTime,
  setBookingTime,
  totalDate,
  isBooking,
  userBooking,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles({ isBooking, openModal });

  return (
    <div className={classes.booking__container}>
      <div className={classes.booking__content}>
        <Box display={isBooking ? "block" : "flex"} flexDirection="column">
          <div>
            <Typography
              variant="h5"
              className={classes.booking__content__price}
            >
              {formMoney(userBooking?.price)}
              <Typography variant="span">/đêm</Typography>
            </Typography>
          </div>
          <div>
            <Typography variant="body2">
              {!isBooking && (
                <Fragment>
                  <Typography
                    variant="span"
                    className={classes.booking__dateTime}
                    onClick={() => setOpenModal(true)}
                  >
                    {moment(bookingTime[0]).format("Do MMM")} -
                    <Typography variant="span">
                      {moment(bookingTime[1]).format("Do MMM")}
                    </Typography>
                  </Typography>
                </Fragment>
              )}
            </Typography>
          </div>
        </Box>

        {!openModal ? (
          !isBooking ? (
            <Button className={classes.booking__content__btn}>Đặt phòng</Button>
          ) : (
            <Button
              className={classes.booking__content__btn}
              onClick={() => setOpenModal(true)}
            >
              Kiểm tra tình trạng còn phòng
            </Button>
          )
        ) : (
          <Button
            onClick={() => setOpenModal(false)}
            className={clsx(
              classes.booking__content__btn,
              classes.booking__content__btn__save
            )}
          >
            Lưu
          </Button>
        )}
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
      >
        <Slide direction="up" in={openModal}>
          <div className={classes.booking__modal}>
            <div className={classes.booking__modal__header}>
              <IconButton>
                <AiOutlineClose onClick={() => setOpenModal(false)} />
              </IconButton>
              <Typography
                variant="span"
                onClick={() => setBookingTime([null, null])}
              >
                Xóa ngày
              </Typography>
            </div>
            <div>
              <Typography variant="h5">
                {isBooking ? "Chọn ngày nhận phòng" : `${totalDate} đêm`}
              </Typography>
              <Typography variant="body1">
                {isBooking ? (
                  "Thêm ngày đi để biết giá chính xác"
                ) : (
                  <Fragment>
                    {moment(bookingTime[0]).format("Do MMM")} -
                    <Typography variant="span">
                      {moment(bookingTime[1]).format("Do MMM")}
                    </Typography>
                  </Fragment>
                )}
              </Typography>
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDateRangePicker
                className={classes.booking__datepicker}
                displayStaticWrapperAs="desktop"
                value={bookingTime}
                onChange={(newValue) => {
                  setBookingTime(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </div>
        </Slide>
      </Modal>
    </div>
  );
};

export default BookingMobile;
