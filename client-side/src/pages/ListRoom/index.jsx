import {
  Box,
  Chip,
  Container,
  Grid,
  Menu,
  Typography,
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import React, { useState } from "react";
import useStyles from "./style";
import Checkbox from "@material-ui/core/Checkbox";
const ListRoom = () => {
  const classes = useStyles();
  //State Hủy miễn phí
  const [anchorEl, setAnchorEl] = useState(null);
  //State Loại nơi ở
  const [anchorElAccommodation, setAnchorElAccommodation] = useState(null);

  //Menu Hủy miễn phí
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  //Menu Loại nơi ở
  const handleOpenMenuAccommodation = (event) => {
    setAnchorElAccommodation(event.currentTarget);
  };
  const handleCloseMenuAccommodatio = () => {
    setAnchorElAccommodation(null);
  };

  // Switch Hủy miễn phí
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // Checkbox loại nơi ở
  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container maxWidth="home" style={{ marginTop: 50 }}>
      <Grid container>
        <Grid item lg={6}>
          <Box>
            <Typography>Hơn 300 chỗ ở</Typography>
            <Typography>Chỗ ở tại khu vực bản đồ đã chọn</Typography>
            <Box>
              <Chip
                onClick={handleOpenMenu}
                className={classes.chip}
                size="medium"
                label="Hủy miễn phí"
                fontSize="medium"
                variant="default"
                color="#ffffff"
              />
              <Chip
                onClick={handleOpenMenuAccommodation}
                className={classes.chip}
                size="medium"
                label="Loại nơi ở"
                fontSize="medium"
                variant="default"
                color="#ffffff"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6}></Grid>
      </Grid>
      {/* Menu hủy miễn phí */}
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 160, left: 20 }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            maxWidth: "300px",
            padding: "8px",
            borderRadius: "16px",
          },
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>
              Chỉ hiển thị những chỗ ở cho phép hủy miễn phí
            </Typography>
            <div>
              <Switch
                checked={state.checkedA}
                onChange={handleChangeSwitch}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
          </div>
          <div></div>
        </div>
      </Menu>
      {/* Menu Loại nơi ở */}
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 160, left: 120 }}
        anchorEl={anchorElAccommodation}
        keepMounted
        open={Boolean(anchorElAccommodation)}
        onClose={handleCloseMenuAccommodatio}
        PaperProps={{
          style: {
            maxWidth: "300px",
            padding: "8px",
            borderRadius: "16px",
          },
        }}
      >
        <div
          style={{
            display: "flex",

            alignItems: "flex-start",
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChangeCheckBox}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <div>
            <Typography>Toàn bộ nhà</Typography>
            <Typography>Tìm một nơi cho riêng bạn</Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChangeCheckBox}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <div>
            <Typography>Phòng riêng</Typography>
            <Typography>
              Có phòng riêng và chia sẻ một số không gian chung
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChangeCheckBox}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <div>
            <Typography>Phòng khách sạn</Typography>
            <Typography>
              Có phòng riêng/chia sẻ ở khách sạn boutique, khách sạn giá rẻ và
              những chỗ ở khác
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChangeCheckBox}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <div>
            <Typography>Phòng chung</Typography>
            <Typography>
              Ở trong một không gian chia sẻ, như phòng chung
            </Typography>
          </div>
        </div>
      </Menu>
    </Container>
  );
};

export default ListRoom;
