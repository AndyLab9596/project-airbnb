import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import useStyles from "./style";
const ListRoomItem = () => {
  const classes = useStyles();
  return (
    <div>
      <Box padding="20px 0">
        <Grid container>
          <Grid item lg={5}>
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-37995187/original/ee69bf19-153c-4739-bd23-0de4f822953c.jpeg?im_w=1200"
              alt="room"
              className={classes.room__item__img}
            />
          </Grid>
          <Grid item lg={7}>
            <div className={classes.room__item__left}>
              <div className={classes.room__item__title}>
                <div>
                  <Typography
                    className={classes.title__text}
                    variant="subtitle2"
                  >
                    Toàn bộ căn hộ cho thuê tại Thành phố Nha Trang
                  </Typography>
                  <Typography className={classes.title__text__desc}>
                    Amazing seaview home with sauna 2 bedroom
                  </Typography>
                </div>
                <div>
                  <FavoriteBorderOutlinedIcon />
                </div>
              </div>
              <div className={classes.room__item__line}></div>
              <div className={classes.room__item__desc}>
                <ul>
                  <li>4 khách</li>
                  <li>2 phong ngủ</li>
                  <li>2 giường</li>
                </ul>
              </div>
              <div className={classes.room__item__bot}>
                <div className={classes.room__item__bot__style}>
                  <StarRateOutlinedIcon style={{ color: "red" }} />
                  <Typography>4.82</Typography>
                  <Typography>(17 đánh giá)</Typography>
                </div>
                <div className={classes.room__item__bot__style}>$22 / Đêm</div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ListRoomItem;
