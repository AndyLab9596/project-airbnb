import {
  Box,
  Checkbox,
  Chip,
  Menu,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import MaximizeIcon from "@material-ui/icons/Maximize";
import { withStyles } from "@material-ui/styles";
import React, { Fragment, useState } from "react";
import ModalFilter from "../Modal/index";
import useStyles from "./style";
const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}
const FilterRoom = () => {
  const classes = useStyles();

  //State Hủy miễn phí
  const [anchorEl, setAnchorEl] = useState(null);

  // //State Loại nơi ở
  const [anchorElAccommodation, setAnchorElAccommodation] = useState(null);
  //State Giá
  const [anchorElPrice, setAnchorElPrice] = useState(null);

  //State Đặt ngay
  const [anchorElBookingNow, setAnchorElBookingNow] = useState(null);
  //State Hủy miễn phí
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // const fakeCheckBox = [
  //   {
  //     id: 1,
  //     name: "wholeHouse",
  //     title: "Toàn bộ nhà",
  //     desc: "Tìm một nơi cho riêng bạn",
  //   },
  //   {
  //     id: 2,
  //     name: "room",
  //     title: "Phòng riêng",
  //     desc: "Có phòng riêng và chia sẻ một số không gian chung",
  //   },
  //   {
  //     id: 3,
  //     name: "hotelRoom",
  //     title: "Phòng khách sạn",
  //     desc: "Có phòng riêng/chia sẻ ở khách sạn boutique, khách sạn giá rẻ và những chỗ ở khác",
  //   },
  //   {
  //     id: 4,
  //     name: "commonRoom",
  //     title: "Phòng chung",
  //     desc: "Ở trong một không gian chia sẻ, như phòng chung",
  //   },
  // ];
  //Menu Hủy miễn phí
  // const handleOpenMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   console.log(event.currentTarget);
  // };
  // const handleCloseMenu = () => {
  //   setAnchorEl(null);
  //   setAnchorElBookingNow(null);
  //   setAnchorElPrice(null);
  //   setAnchorElBookingNow(null);
  // };
  //Menu Loại nơi ở
  // const handleOpenMenuAccommodation = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   console.log(event.currentTarget);
  // };
  // const handleCloseMenuAccommodatio = () => {
  //   setAnchorEl(null);
  // };

  // //Menu Giá
  // const handleOpenMenuPrice = (event) => {
  //   setAnchorElPrice(event.currentTarget);
  //   console.log(event.currentTarget);
  // };
  // const handleCloseMenuPrice = () => {
  //   setAnchorElPrice(null);
  // };
  // //Menu Đặt ngay
  // const handleOpenMenuBookingNow = (event) => {
  //   setAnchorElBookingNow(event.currentTarget);
  // };
  // const handleCloseMenuBookingNow = () => {
  //   setAnchorElBookingNow(null);
  // };
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
  const [checked, setChecked] = React.useState({
    wholeHouse: false,
    room: false,
    hotelRoom: false,
    commonRoom: false,
  });

  const handleChangeCheckBox = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };
  // Slider Giá
  const [rating, setRating] = React.useState([5, 10]);

  const rateGte = rating?.join("").slice(0, 1);
  const rateLte = rating?.join("").slice(1, 3);
  const handleChangeRating = (event, newValue) => {
    setRating(newValue);
  };

  //MODAL
  // PHÒNG VÀ PHÒNG NGỦ
  const [numbers, setNumbers] = useState({
    bed: 0,
    bedroom: 0,
    bathroom: 0,
  });
  const addBed = () => {
    if (numbers.bed >= 16) return;
    setNumbers({ ...numbers, bed: numbers.bed + 1 });
  };

  const minusBed = () => {
    if (numbers.bed < 1) return;
    setNumbers({ ...numbers, bed: numbers.bed - 1 });
  };

  const addBedroom = () => {
    if (numbers.bedroom >= 16) return;
    setNumbers({ ...numbers, bedroom: numbers.bedroom + 1 });
  };

  const minusBedroom = () => {
    if (numbers.bedroom < 1) return;
    setNumbers({ ...numbers, bedroom: numbers.bedroom - 1 });
  };

  const addBathroom = () => {
    if (numbers.bathroom >= 16) return;
    setNumbers({ ...numbers, bathroom: numbers.bathroom + 1 });
  };

  const minusBathroom = () => {
    if (numbers.bathroom < 1) return;
    setNumbers({ ...numbers, bathroom: numbers.bathroom - 1 });
  };
  return (
    <Fragment>
      <div>
        <Box>
          <Typography className={classes.list__text__titile}>
            Hơn 300 chỗ ở
          </Typography>
          <Typography className={classes.list__title}>
            Chỗ ở tại khu vực bản đồ đã chọn
          </Typography>
          <Box className={classes.list__filter}>
            <div className={classes.list__filter__item}>
              <Chip
                onClick={(e) => setAnchorEl(e.currentTarget)}
                classes={{ root: classes.chip }}
                label="Hủy miễn phí"
              />
            </div>
            <div className={classes.list__filter__item}>
              <Chip
                onClick={(e) => setAnchorElAccommodation(e.currentTarget)}
                classes={{ root: classes.chip }}
                label="Loại nơi ở"
              />
            </div>
            <div className={classes.list__filter__item}>
              <Chip
                onClick={(e) => setAnchorElPrice(e.currentTarget)}
                classes={{ root: classes.chip }}
                label="Giá"
              />
            </div>

            <div className={classes.list__filter__item}>
              <Chip
                onClick={handleOpen}
                classes={{ root: classes.chip }}
                size="medium"
                label="Bộ lọc khác"
                fontSize="medium"
                variant="default"
                color="#ffffff"
              />
            </div>
          </Box>
        </Box>
        <Box className={classes.check__info} display="flex">
          <Typography>
            Kiểm tra lại quy định hạn chế đi lại trong đại dịch COVID-19 trước
            khi đặt.
          </Typography>
          <Typography>Tìm hiểu thêm</Typography>
        </Box>
      </div>
      {/* Menu hủy miễn phí */}
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 20 }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={(e) => setAnchorEl(null)}
        PaperProps={{
          style: {
            maxWidth: "300px",

            borderRadius: "16px",
          },
        }}
      >
        <div>
          <div className={classes.list__style__flex}>
            <div className={classes.list__menu__cancel__top}>
              <Typography variant="h5">
                Chỉ hiển thị những chỗ ở cho phép hủy miễn phí
              </Typography>
            </div>
            <div>
              <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                  root: classes.roott,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                  colorSecondary: classes.colorSecondary,
                }}
                checked={state.checkedA}
                onChange={handleChangeSwitch}
                name="checkedA"
              />
            </div>
          </div>
          <div className={classes.list__menu__cancel__bot}>
            <div>
              <button className={classes.button__erase}>Xóa</button>
            </div>
            <div>
              <button className={classes.button__save}>Lưu</button>
            </div>
          </div>
        </div>
      </Menu>
      {/* Menu Loại nơi ở */}
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 135 }}
        anchorEl={anchorElAccommodation}
        keepMounted
        open={Boolean(anchorElAccommodation)}
        onClose={(e) => setAnchorElAccommodation(null)}
        PaperProps={{
          style: {
            maxWidth: "320px",
            borderRadius: "16px",
          },
        }}
      >
        <div>
          <div className={classes.list__menu__accommodation__top}>
            {/* {fakeCheckBox.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classes.list__menu__accommodation__item}
                >
                  <Checkbox
                    checked={item.name}
                    onChange={handleChangeCheckBox}
                    inputProps={{ "aria-label": "primary checkbox" }}
                    classes={{
                      root: classes.checkbox,
                    }}
                    name={item.name}
                  />
                  <div>
                    <Typography
                      className={classes.list__menu__accommodation__text}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className={classes.list__menu__accommodation__text2}
                    >
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              );
            })} */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Checkbox
                checked={checked.wholeHouse}
                onChange={handleChangeCheckBox}
                inputProps={{ "aria-label": "primary checkbox" }}
                classes={{
                  root: classes.checkbox,
                }}
                name="wholeHouse"
              />
              <div>
                <Typography className={classes.list__menu__accommodation__text}>
                  Toàn bộ nhà
                </Typography>
                <Typography
                  className={classes.list__menu__accommodation__text2}
                >
                  Tìm một nơi cho riêng bạn
                </Typography>
              </div>
            </div>
            <div className={classes.list__menu__accommodation__item}>
              <Checkbox
                checked={checked.room}
                onChange={handleChangeCheckBox}
                inputProps={{ "aria-label": "primary checkbox" }}
                classes={{
                  root: classes.checkbox,
                }}
                name="room"
              />
              <div>
                <Typography className={classes.list__menu__accommodation__text}>
                  Phòng riêng
                </Typography>
                <Typography
                  className={classes.list__menu__accommodation__text2}
                >
                  Có phòng riêng và chia sẻ một số không gian chung
                </Typography>
              </div>
            </div>
            <div className={classes.list__menu__accommodation__item}>
              <Checkbox
                checked={checked.hotelRoom}
                onChange={handleChangeCheckBox}
                inputProps={{ "aria-label": "primary checkbox" }}
                classes={{
                  root: classes.checkbox,
                }}
                name="hotelRoom"
              />
              <div>
                <Typography className={classes.list__menu__accommodation__text}>
                  Phòng khách sạn
                </Typography>
                <span className={classes.list__menu__accommodation__text2}>
                  Có phòng riêng/chia sẻ ở khách sạn boutique, khách sạn giá rẻ
                  và những chỗ ở khác
                </span>
              </div>
            </div>
            <div className={classes.list__menu__accommodation__item}>
              <Checkbox
                checked={checked.commonRoom}
                onChange={handleChangeCheckBox}
                inputProps={{ "aria-label": "primary checkbox" }}
                classes={{
                  root: classes.checkbox,
                }}
                name="commonRoom"
              />
              <div>
                <Typography className={classes.list__menu__accommodation__text}>
                  Phòng chung
                </Typography>
                <span className={classes.list__menu__accommodation__text2}>
                  Ở trong một không gian chia sẻ, như phòng chung
                </span>
              </div>
            </div>
          </div>
          <div className={classes.list__menu__accommodation__bot}>
            <div>
              <button className={classes.button__erase}>Xóa</button>
            </div>
            <div>
              <button className={classes.button__save}>Lưu</button>
            </div>
          </div>
        </div>
      </Menu>
      {/* Menu Giá */}
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 225 }}
        anchorEl={anchorElPrice}
        keepMounted
        open={Boolean(anchorElPrice)}
        onClose={(e) => setAnchorElPrice(null)}
        PaperProps={{
          style: {
            maxWidth: "320px",
            borderRadius: "16px",
          },
        }}
      >
        <div className={classes.list__menu__price__top}>
          <Typography
            variant="subtitle1"
            className={classes.list__menu__price__text}
          >
            Giá trung bình hàng đêm là $40
          </Typography>
          <AirbnbSlider
            ThumbComponent={AirbnbThumbComponent}
            getAriaLabel={(index) =>
              index === 0 ? "Minimum price" : "Maximum price"
            }
            defaultValue={[20, 40]}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              variant="outlined"
              label="Giá tối thiểu"
              InputLabelProps={{
                style: { fontSize: 13 },
              }}
              name="email"
            />
            <Box margin=" 16px 6px 0 6px">
              <MaximizeIcon />
            </Box>
            <TextField
              variant="outlined"
              label="Giá tối đa"
              InputLabelProps={{
                style: { fontSize: 13 },
              }}
              name="email"
            />
          </Box>
        </div>
        <div>
          <div className={classes.list__menu__cancel__bot}>
            <div>
              <button className={classes.button__erase}>Xóa</button>
            </div>
            <div>
              <button className={classes.button__save}>Lưu</button>
            </div>
          </div>
        </div>
      </Menu>

      {/* Modal Bộ lọc khác */}
      <ModalFilter handleClose={handleClose} open={open} />
    </Fragment>
  );
};

export default FilterRoom;
