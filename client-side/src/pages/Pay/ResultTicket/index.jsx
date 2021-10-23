import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./style";

function ResultTicket({ totalDate, detailRoom, valueGroup, totalPrice }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up(768));
  const { infoUser } = useSelector((state) => state.AuthReducer);
  const classes = useStyles();
  console.log(infoUser);
  return (
    <div className={classes.root}>
      <div className={classes.infoTicket}>
        <Box display="flex">
          <Box flex="0 0 35%">
            <img
              src={detailRoom.image}
              alt="img"
              className={classes.pay__right__img}
            />
          </Box>
          <div className={classes.pay__right__style}>
            <div>
              <Typography variant="body1" className={classes.pay__right__text}>
                {detailRoom.name}
              </Typography>
              <Typography variant="span">{detailRoom.guests} khách</Typography>
              <Typography variant="span">
                · {detailRoom.bath} phòng tắm
              </Typography>{" "}
              <Typography variant="span">
                · {detailRoom.bedRoom} phòng ngủ
              </Typography>
            </div>
            <Box display="flex" flexWrap="wrap">
              <Box paddingRight={3}>
                <div className={classes.pay__right__item}>
                  <StarIcon className={classes.pay__right__item__icon} />
                  <span>{detailRoom?.locationId?.valueate} (172 đánh giá)</span>
                </div>
              </Box>
              <div>
                <div className={classes.pay__right__item}>
                  <FavoriteIcon className={classes.pay__right__item__icon} />
                  <span>Chủ nhà siêu cấp</span>
                </div>
              </div>
            </Box>
          </div>
        </Box>
      </div>
      <div>
        <div>
          <h3 className={classes.infoResult_label}>Thông tin đặt phòng</h3>
          {isMobile ? (
            <table className={classes.table}>
              <tbody>
                <tr>
                  <td valign="top">Họ tên:</td>
                  <td>{infoUser?.name}</td>
                </tr>

                <tr>
                  <td valign="top">Email:</td>
                  <td>{infoUser.email}</td>
                </tr>
                <tr>
                  <td valign="top">Số điện thoại:</td>
                  <td>{infoUser.phone}</td>
                </tr>
                <tr>
                  <td valign="top">Trạng thái:</td>
                  <td>
                    <span>
                      Đặt vé thành công qua{" "}
                      <span className={classes.paymentColor}>{valueGroup}</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td valign="top">Tổng tiền:</td>
                  <td valign="top">
                    <span>{totalPrice()}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className={classes.table}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ width: "40%" }} valign="top">
                  Họ tên:
                </span>
                <span style={{ width: "50%" }}>{infoUser?.name}</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ width: "40%" }} valign="top">
                  Số điện thoại:
                </span>
                <span style={{ width: "50%" }}>{infoUser.phone}</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ width: "40%" }} valign="top">
                  Tổng tiền:
                </span>
                <span style={{ width: "50%" }} valign="top">
                  <span>{totalPrice()}</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultTicket;
