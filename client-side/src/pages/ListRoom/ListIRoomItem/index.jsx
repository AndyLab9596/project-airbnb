import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import useStyles from "./style";
const ListRoomItem = () => {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <div style={{ padding: "20px 0" }}>
          <Grid container>
            <Grid item lg={5}>
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-37995187/original/ee69bf19-153c-4739-bd23-0de4f822953c.jpeg?im_w=1200"
                alt="room"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item lg={7}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Typography>
                    Toàn bộ căn hộ cho thuê tại Thành phố Nha Trang
                  </Typography>
                  <Typography>
                    Amazing seaview home with sauna 2 bedroom
                  </Typography>
                </div>
                <div>
                  <FavoriteBorderOutlinedIcon />
                </div>
              </div>
              <div
                style={{
                  marginTop: 11,
                  width: 32,
                  borderTop: "1px solid rgb(221, 221, 221)",
                }}
              ></div>
              <div style={{ marginTop: 9 }}>
                <ul style={{ display: "flex", margin: 0 }}>
                  <li>4 khách</li>
                  <li>2 phong ngủ</li>
                  <li>2 giường</li>
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  flexGrow: 1,
                  height: "95px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StarRateOutlinedIcon style={{ color: "red" }} />
                  <Typography>4.82</Typography>
                  <Typography>(17 đánh giá)</Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  $22 / Đêm
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default ListRoomItem;
