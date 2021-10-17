import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import useStyles from "./style";
import { useSelector } from "react-redux";
import { formMoney } from "../../../utilities/coordinates";
const ListRoomItem = ({ arrListRoom }) => {
  const classes = useStyles();
  const filter = useSelector((state) => state.ListRoomReducer.filter);
  console.log("filter", filter);
  return (
    <div>
      <Box>
        {filter.length > 0
          ? filter.map((room, index) => {
              return (
                <div className={classes.room}>
                  <Grid container key={index}>
                    <Grid item lg={5} md={5}>
                      <img
                        src={room.image}
                        alt="room"
                        className={classes.room__item__img}
                      />
                    </Grid>
                    <Grid item lg={7} md={7}>
                      <div className={classes.room__item__left}>
                        <div className={classes.room__item__title}>
                          <div>
                            <Typography
                              className={classes.title__text}
                              variant="subtitle2"
                            >
                              Toàn bộ căn hộ cho thuê tại{" "}
                              {room.locationId.province}
                            </Typography>
                            <Typography className={classes.title__text__desc}>
                              {room.name}
                            </Typography>
                          </div>
                          <div>
                            <FavoriteBorderOutlinedIcon />
                          </div>
                        </div>
                        <div className={classes.room__item__line}></div>
                        <div className={classes.room__item__desc}>
                          <ul>
                            <li>{room.guests} khách</li>
                            <li>{room.bedRoom} phong ngủ</li>
                            <li>{room.bath} nhà tắm</li>
                          </ul>
                        </div>
                        <div className={classes.room__item__bot}>
                          <div className={classes.room__item__bot__style}>
                            <StarRateOutlinedIcon style={{ color: "red" }} />
                            <Typography>{room.locationId.valueate}</Typography>
                            <Typography>(17 đánh giá)</Typography>
                          </div>
                          <div className={classes.room__item__bot__style}>
                            <span style={{ fontWeight: 700 }}>
                              {formMoney(room.price)}
                              {/* {room.price}VNĐ{" "} */}
                            </span>
                            / Đêm
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              );
            })
          : arrListRoom.map((room, index) => {
              return (
                <div className={classes.room}>
                  <Grid container key={index}>
                    <Grid item lg={5} md={5}>
                      <img
                        src={room.image}
                        alt="room"
                        className={classes.room__item__img}
                      />
                    </Grid>
                    <Grid item lg={7} md={7}>
                      <div className={classes.room__item__left}>
                        <div className={classes.room__item__title}>
                          <div>
                            <Typography
                              className={classes.title__text}
                              variant="subtitle2"
                            >
                              Toàn bộ căn hộ cho thuê tại{" "}
                              {room.locationId.province}
                            </Typography>
                            <Typography className={classes.title__text__desc}>
                              {room.name}
                            </Typography>
                          </div>
                          <div>
                            <FavoriteBorderOutlinedIcon />
                          </div>
                        </div>
                        <div className={classes.room__item__line}></div>
                        <div className={classes.room__item__desc}>
                          <ul>
                            <li>{room.guests} khách</li>
                            <li>{room.bedRoom} phong ngủ</li>
                            <li>{room.bath} nhà tắm</li>
                          </ul>
                        </div>
                        <div className={classes.room__item__bot}>
                          <div className={classes.room__item__bot__style}>
                            <StarRateOutlinedIcon style={{ color: "red" }} />
                            <Typography>{room.locationId.valueate}</Typography>
                            <Typography>(17 đánh giá)</Typography>
                          </div>
                          <div className={classes.room__item__bot__style}>
                            <span style={{ fontWeight: 700 }}>
                              {room.price}VNĐ{" "}
                            </span>
                            / Đêm
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
      </Box>
    </div>
  );
};

export default ListRoomItem;
