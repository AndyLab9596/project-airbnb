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
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  CLOSE_MODAL_FILTER,
  FILTER_PRICE,
  OPEN_MODAL_FILTER,
} from "../../../store/types/ListRoomType";
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
function valuetext(value) {
  return `${value}°C`;
}

const FilterRoom = () => {
  const classes = useStyles();
  const [valuePrice, setValuePrice] = React.useState([0, 1000000]);

  let beforeChange = null;
  const handleChange = (event, newValue) => {
    console.log(newValue);
    if (!beforeChange) {
      beforeChange = [...valuePrice];
    }

    if (beforeChange[0] !== newValue[0] && beforeChange[1] !== newValue[1]) {
      return;
    }

    setValuePrice(newValue);
    setInitialValues({ priceStart: newValue[0], priceEnd: newValue[1] });
  };

  const handleChangeCommitted = () => {
    beforeChange = null;
  };
  const dispatch = useDispatch();
  //State Hủy miễn phí
  const [anchorEl, setAnchorEl] = useState(null);

  // //State Loại nơi ở
  const [anchorElAccommodation, setAnchorElAccommodation] = useState(null);
  //State Giá
  const [anchorElPrice, setAnchorElPrice] = useState(null);

  //modal

  //Menu Bộ lọc khác
  const handleOpen = () => {
    dispatch(createAction(OPEN_MODAL_FILTER));
  };
  const handleClose = () => {
    dispatch(createAction(CLOSE_MODAL_FILTER));
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

  const [initialValues, setInitialValues] = useState({
    priceStart: valuePrice[0],
    priceEnd: valuePrice[1],
  });
  const handleChangeField = (event) => {
    console.log(event.target.value);
    let { name, value } = event.target;
    let newValue = { ...initialValues, [name]: value };

    // setValue(value[0], value[1]);
    setInitialValues(newValue);
    if (newValue.priceStart > newValue.priceEnd) {
      newValue.priceEnd = newValue.priceStart;
      setValuePrice([newValue.priceStart, newValue.priceEnd]);
    } else if (newValue.priceStart < newValue.priceEnd) {
      setValuePrice([newValue.priceStart, newValue.priceEnd]);
    }
    if (newValue.priceEnd > 1000000) {
      newValue.priceEnd = 1000000;
    }
  };
  const arrListRoom = useSelector((state) => state.ListRoomReducer.arrListRoom);
  const filter = useSelector((state) => state.ListRoomReducer.filter);

  const filterPrice = arrListRoom.filter((value) => {
    if (value.price <= valuePrice[1] && value.price >= valuePrice[0]) {
      return true;
    } else {
      return false;
    }
  });
  console.log("filterPrice", filterPrice);
  const filteredPrice = () => {
    dispatch(createAction(FILTER_PRICE, filterPrice));
    setAnchorElPrice(null);
  };

  return (
    <Fragment>
      <div style={{ marginTop: 30 }}>
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
              <Typography variant="subtitle2">
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
            min={0}
            max={1000000}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            value={valuePrice}
            ThumbComponent={AirbnbThumbComponent}
            getAriaLabel={(index) =>
              index === 0 ? "Minimum price" : "Maximum price"
            }
            defaultValue={[0, 1000000]}
            onChangeCommitted={handleChangeCommitted}
            onChange={handleChange}
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              // label="Giá tối thiểu"
              InputLabelProps={{
                style: { fontSize: 13 },
              }}
              className={classes.textField}
              // defaultValue={`${value[0]}`}
              value={initialValues.priceStart}
              onChange={handleChangeField}
              name="priceStart"
              // type="number"
              //   name="email"
            />
            <Box margin=" 16px 6px 0 6px">
              <MaximizeIcon />
            </Box>
            <TextField
              // type="number"
              value={initialValues.priceEnd}
              onChange={handleChangeField}
              // label="Giá tối đa"
              InputLabelProps={{
                style: { fontSize: 13 },
              }}
              className={classes.textField}
              name="priceEnd"
            />
          </Box>
        </div>
        <div>
          <div className={classes.list__menu__cancel__bot}>
            <div>
              <button className={classes.button__erase}>Xóa</button>
            </div>
            <div>
              <button
                onClick={() => filteredPrice()}
                className={classes.button__save}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </Menu>

      {/* Modal Bộ lọc khác */}
      <ModalFilter handleClose={handleClose} />
    </Fragment>
  );
};

export default FilterRoom;
