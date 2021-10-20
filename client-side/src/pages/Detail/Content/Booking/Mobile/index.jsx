import {
  Button,
  IconButton,
  Modal,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import { LocalizationProvider, StaticDateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box } from "@mui/system";
import moment from "moment";
import React, { Fragment, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ButtonSubmit from "../../../../../components/ButtonSubmit";
import { formMoney } from "../../../../../utilities/coordinates";
import useStyles from "./style";
import queryString from "query-string";
import { useHistory } from "react-router";

const BookingMobile = ({
  bookingTime,
  setBookingTime,
  totalDate,
  isBooking,
  detailRoom,
  queryParams,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles({ isBooking, openModal });
  const history = useHistory();
  const handleClickBooking = () => {
    const params = {
      ...queryParams,
      _checkIn: moment(bookingTime[0]).format("YYYY-MM-DD"),
      _checkOut: moment(bookingTime[1]).format("YYYY-MM-DD"),
    };
    history.push({
      pathname: `/pay/${detailRoom._id}`,
      search: queryString.stringify(params),
    });
  };
  return (
    <div className={classes.booking__container}>
      <div className={classes.booking__content}>
        <Box display={isBooking ? "block" : "flex"} flexDirection="column">
          <div>
            <Typography
              variant="h5"
              className={classes.booking__content__price}
            >
              {formMoney(detailRoom?.price)}
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
            <Box width={isBooking ? "70%" : "40%"}>
              <ButtonSubmit
                text="Đặt phòng"
                handleSubmit={handleClickBooking}
              />
            </Box>
          ) : (
            <Box width={isBooking ? "70%" : "40%"}>
              <ButtonSubmit
                text="Kiểm tra tình trạng còn phòng"
                handleSubmit={() => setOpenModal(true)}
              />
            </Box>
          )
        ) : (
          <Button
            onClick={() => setOpenModal(false)}
            className={
              isBooking
                ? classes.booking__content__btn__save__isBooking
                : classes.booking__content__btn__save
            }
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
