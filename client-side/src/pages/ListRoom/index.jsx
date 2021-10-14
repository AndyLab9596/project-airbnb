import {
  Box,
  Chip,
  Grid,
  IconButton,
  Menu,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RemoveIcon from "@material-ui/icons/Remove";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import MaximizeIcon from "@material-ui/icons/Maximize";
import GoogleMapReact from "google-map-react";
import React, { Fragment, useState } from "react";
import useStyles from "./style";
import mapStyles from "./mapStyles";
import clsx from "clsx";
import { withStyles } from "@material-ui/styles";
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
const ListRoom = () => {
  const classes = useStyles();

  const [coords, setCoords] = useState({ lat: 12.270371, lng: 109.204196 });

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
    <div style={{ marginTop: 50 }}>
      <Grid container>
        <Grid item lg={7} style={{ padding: "0 25px" }}>
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
        </Grid>
        <Grid item lg={5}>
          <div style={{ height: "85vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCg9PkLEPcSDdeySq6iHC_YC4m-67XP_Rk",
              }}
              defaultCenter={coords}
              center={coords}
              defaultZoom={14}
              margin={[50, 50, 50, 50]}
              options={{
                disableDefaultUI: true,
                zoomControl: true,
                styles: mapStyles,
              }}
              // onChange={(e) => {
              //   setCoords({ lat: e.center.lat, lng: e.center.lng });
              //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
              // }}
              // onChildClick={(child) => setChildClicked(child)}
            ></GoogleMapReact>
          </div>
        </Grid>
      </Grid>

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

      <Fragment>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          <div className={classes.root}>
            <div className={classes.modal__content}>
              <div className={classes.modal__header}>
                <IconButton className={classes.icon} onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <Typography variant="body2">Bộ lọc khác</Typography>
                <div></div>
              </div>

              <div className={classes.modal__style}>
                <div className={classes.modal__bedroom}>
                  <Typography
                    className={classes.modal__title__text}
                    variant="subtitle1"
                  >
                    Phòng và phòng ngủ
                  </Typography>
                  <div className={classes.modal__style__content}>
                    <Typography variant="subtitle1">Giường</Typography>
                    <div className={classes.modal__bedroom__item}>
                      <button onClick={minusBed} className={classes.button}>
                        <RemoveIcon />
                      </button>
                      <Typography className={classes.modal__bedroom__text}>
                        {numbers.bed}
                      </Typography>
                      <button onClick={addBed} className={classes.button}>
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                  <div className={classes.modal__style__content}>
                    <Typography variant="subtitle1">Phòng ngủ</Typography>
                    <div className={classes.modal__bedroom__item}>
                      <button onClick={minusBedroom} className={classes.button}>
                        <RemoveIcon />
                      </button>

                      <Typography className={classes.modal__bedroom__text}>
                        {numbers.bedroom}
                      </Typography>
                      <button onClick={addBedroom} className={classes.button}>
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                  <div className={classes.modal__style__content}>
                    <Typography variant="subtitle1">Phòng tắm</Typography>
                    <div className={classes.modal__bedroom__item}>
                      <button
                        onClick={() => minusBathroom()}
                        className={classes.button}
                      >
                        <RemoveIcon />
                      </button>
                      <Typography className={classes.modal__bedroom__text}>
                        {numbers.bathroom}
                      </Typography>
                      <button
                        onClick={() => addBathroom()}
                        className={classes.button}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                </div>

                <div className={classes.modal__another}>
                  <Typography
                    className={classes.modal__title__text}
                    variant="subtitle1"
                  >
                    Lựa chọn khác
                  </Typography>
                  <div className={classes.modal__style__content}>
                    <div>
                      <Typography variant="subtitle1">
                        Chủ nhà siêu cấp
                      </Typography>
                      <Typography
                        className={classes.modal__another__text}
                        variant="subtitle2"
                      >
                        Ở cùng với các chủ nhà được công nhận
                      </Typography>
                      <Typography className={classes.modal__text_style}>
                        Tìm hiểu thêm
                      </Typography>
                    </div>
                    <div>
                      <Switch
                        // checked={state.checkedA}
                        // onChange={handleChangeSwitch}
                        name="checkedA"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                    </div>
                  </div>
                  <div>
                    <Typography variant="subtitle1">
                      Hỗ trợ người có nhu cầu đặc biệt
                    </Typography>
                    <Typography
                      className={classes.modal__another__text}
                      variant="subtitle2"
                    >
                      Tìm một nơi ở đáp ứng nhu cầu di chuyển của bạn
                    </Typography>
                    <Typography className={classes.modal__text_style}>
                      Chọn tính năng nơi bạn ở
                    </Typography>
                  </div>
                </div>

                <div className={classes.modal__convenient}>
                  <Typography className={classes.modal__title__text}>
                    Tiện nghi
                  </Typography>
                  <div>
                    <Grid container>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{
                              style: {
                                border: "none",
                                paddingRight: 50,
                                fontSize: 30,
                              },
                            }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Bếp</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Hệ thống sưởi</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Điều hòa nhiệt độ</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Máy giặt</Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <div>
                      <Typography className={classes.modal__text_style}>
                        Hiển thị tất cả tiện nghi
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className={classes.modal__convenient}>
                  <Typography>Tiện ích</Typography>
                  <div>
                    <Grid container>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Chỗ đỗ xe miễn phí tại nơi ở</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Phòng tập thể hình</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Bồn tắm nước nóng</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Bể bơi</Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <div>
                      <Typography className={classes.modal__text_style}>
                        Hiển thị tất cả các tiện ích
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className={classes.modal__convenient}>
                  <Typography>Loại nhà/phòng</Typography>
                  <div>
                    <Grid container>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Nhà</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Căn hộ</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Chỗ nghỉ phục vụ bữa sáng</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Khách sạn boutique</Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <div>
                      <Typography className={classes.modal__text_style}>
                        Hiển thị tất cả các loại chỗ ở
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className={classes.modal__convenient}>
                  <Typography>Nơi ở độc đáo</Typography>
                  <div>
                    <Grid container>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Hải đăng</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Lâu đài</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Nhà nghỉ giữa thiên nhiên</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Nhà nhỏ</Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <div>
                      <Typography className={classes.modal__text_style}>
                        Hiển thị mọi nơi ở độc đáo
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className={classes.modal__convenient}>
                  <Typography>Nội quy nhà</Typography>
                  <div>
                    <Grid container>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Cho phép thú cưng</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Cho phép hút thuốc</Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>

                <div className={classes.modal__convenient}>
                  <Typography>Ngôn ngữ chủ nhà</Typography>
                  <div>
                    <Grid container>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Tiếng Anh</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            // checked={checked}
                            // onChange={handleChangeCheckBox}
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Tiếng Việt</Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>

                {/*  */}
              </div>

              {/* modal footer */}
              <div className={classes.modal__footer}>
                <button className={classes.button__erase}>Xóa tất cả</button>
                <button className={classes.button__modal__button}>
                  Hiển thị hơn 300 chỗ ở
                </button>
              </div>

              {/*  */}
            </div>
          </div>
        </Modal>
      </Fragment>
    </div>
  );
};

export default ListRoom;
