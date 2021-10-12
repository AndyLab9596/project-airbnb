import {
  Box,
  Chip,
  Container,
  Grid,
  Menu,
  Modal,
  Typography,
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import React, { useState } from "react";
import useStyles from "./style";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
const ListRoom = () => {
  const classes = useStyles();
  //State Hủy miễn phí
  const [anchorEl, setAnchorEl] = useState(null);
  //State Loại nơi ở
  const [anchorElAccommodation, setAnchorElAccommodation] = useState(null);
  //State Giá
  const [anchorElPrice, setAnchorElPrice] = useState(null);
  //State Đặt ngay
  const [anchorElBookingNow, setAnchorElBookingNow] = useState(null);
  //State Hủy miễn phí
  const [open, setOpen] = useState(false);

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
  //Menu Giá
  const handleOpenMenuPrice = (event) => {
    setAnchorElPrice(event.currentTarget);
  };
  const handleCloseMenuPrice = () => {
    setAnchorElPrice(null);
  };
  //Menu Đặt ngay
  const handleOpenMenuBookingNow = (event) => {
    setAnchorElBookingNow(event.currentTarget);
  };
  const handleCloseMenuBookingNow = () => {
    setAnchorElBookingNow(null);
  };
  //Menu Bộ lọc khác
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Switch Hủy miễn phí
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // Checkbox loại nơi ở
  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };
  // Slider Giá
  const [rating, setRating] = React.useState([5, 10]);

  const rateGte = rating?.join("").slice(0, 1);
  const rateLte = rating?.join("").slice(1, 3);
  const handleChangeRating = (event, newValue) => {
    setRating(newValue);
  };
  // Switch Hủy miễn phí
  const [stateBookingNow, setStateBookingNow] = React.useState({
    checkedA: true,
  });
  const handleChangeSwitchBookingNow = (event) => {
    setStateBookingNow({
      ...stateBookingNow,
      [event.target.name]: event.target.checked,
    });
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
              <Chip
                onClick={handleOpenMenuPrice}
                className={classes.chip}
                size="medium"
                label="Giá"
                fontSize="medium"
                variant="default"
                color="#ffffff"
              />
              <Chip
                onClick={handleOpenMenuBookingNow}
                className={classes.chip}
                size="medium"
                label="Đặt ngay"
                fontSize="medium"
                variant="default"
                color="#ffffff"
              />
              <Chip
                onClick={handleOpen}
                className={classes.chip}
                size="medium"
                label="Bộ lọc khác"
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
      {/* Menu Giá */}
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 160, left: 120 }}
        anchorEl={anchorElPrice}
        keepMounted
        open={Boolean(anchorElPrice)}
        onClose={handleCloseMenuPrice}
        PaperProps={{
          style: {
            width: "300px",
            height: "100px",
            padding: "8px",
            borderRadius: "16px",
          },
        }}
      >
        <div>
          <Slider
            min={1}
            max={10}
            step={1}
            value={rating}
            onChange={handleChangeRating}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            className={classes.slider}
          />
        </div>
      </Menu>
      {/* Menu Đặt ngay */}
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 160, left: 20 }}
        anchorEl={anchorElBookingNow}
        keepMounted
        open={Boolean(anchorElBookingNow)}
        onClose={handleCloseMenuBookingNow}
        PaperProps={{
          style: {
            maxWidth: "300px",
            padding: "8px",
            borderRadius: "16px",
          },
        }}
      >
        <div>
          <Typography>Đặt ngay</Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Typography>
              Nhà/phòng cho thuê bạn có thể đặt mà không cần chờ chủ nhà chấp
              thuận
            </Typography>
            <div>
              <Switch
                checked={stateBookingNow.checkedA}
                onChange={handleChangeSwitchBookingNow}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
          </div>
          <div></div>
        </div>
      </Menu>
      {/* Modal Bộ lọc khác */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.root}
      >
        <div>
          <div className={classes.modal__content}>
            <div className={classes.modal__header}>
              <h1>12312312</h1>
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ListRoom;
