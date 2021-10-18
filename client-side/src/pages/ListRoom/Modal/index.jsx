import {
  Checkbox,
  Grid,
  IconButton,
  Modal,
  Switch,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import RemoveIcon from "@material-ui/icons/Remove";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  CLOSE_MODAL_FILTER,
  FILTER_PRICE,
  FILTER_ROOM,
} from "../../../store/types/ListRoomType";
import useStyles from "./style";

const ModalFilter = ({ handleClose, open }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const arrListRoom = useSelector((state) => state.ListRoomReducer.arrListRoom);

  const modal = useSelector((state) => state.ListRoomReducer.modal);
  const handleOpenDropdown = () => {
    setDropdown(true);
  };
  const handleCloseDropdown = () => {
    setDropdown(false);
  };

  //MODAL
  // PHÒNG VÀ PHÒNG NGỦ
  const [numbers, setNumbers] = useState({
    guests: 0,
    bedRoom: 0,
    bath: 0,
    elevator: false,
    hotTub: false,
    pool: false,
    indoorFireplace: false,
    dryer: false,
    gym: false,
    kitchen: false,
    wifi: false,
    heating: false,
    cableTV: false,
  });

  const filtered = arrListRoom.filter((item) => {
    if (Object.keys(numbers).every((p) => item[p] >= numbers[p])) {
      return true;
    }
  });

  console.log("filtered", filtered);
  const addBed = () => {
    if (numbers.guests >= 16) return;
    setNumbers({ ...numbers, guests: numbers.guests + 1 });
  };

  const minusBed = () => {
    if (numbers.guests < 1) return;
    setNumbers({ ...numbers, guests: numbers.guests - 1 });
  };

  const addBedroom = () => {
    if (numbers.bedRoom >= 16) return;
    setNumbers({ ...numbers, bedRoom: numbers.bedRoom + 1 });
  };

  const minusBedroom = () => {
    if (numbers.bedRoom < 1) return;
    setNumbers({ ...numbers, bedRoom: numbers.bedRoom - 1 });
  };

  const addBathroom = () => {
    if (numbers.bathroom >= 16) return;
    setNumbers({ ...numbers, bath: numbers.bath + 1 });
  };

  const minusBathroom = () => {
    if (numbers.bathroom < 1) return;
    setNumbers({ ...numbers, bath: numbers.bath - 1 });
  };

  // Tiện Nghi
  // const [checkedConvenient, setCheckedConvenient] = React.useState({});

  const handleChangeCheckBox = (event) => {
    setNumbers({
      ...numbers,
      [event.target.name]: event.target.checked,
    });
  };

  // Tiện ích
  // const [numbers, setnumbers] = React.useState({});

  const handleChangeCheckBoxUtilities = (event) => {
    setNumbers({
      ...numbers,
      [event.target.name]: event.target.checked,
    });
  };
  // const filtered = useSelector((state) => state.ListRoomReducer.filtered);
  const filter = useSelector((state) => state.ListRoomReducer.filter);
  // useEffect(() => {
  //   function filterRoomAndBedRoom (value) {

  //   }

  //   setNewHotel(
  //       myHotel.filter(filterbyName)
  //   )
  //  }, [handleCheck, myHotel])
  const filterPrice = useSelector((state) => state.ListRoomReducer.filterPrice);
  // useEffect(() => {
  //   const newListSeatSelected = filter?.reduce(
  //     (newListSeatSelected, seat) => {
  //       if (seat.selected) {
  //         return [...newListSeatSelected, seat.label];
  //       }
  //       return newListSeatSelected;
  //     },
  //     []
  //   );
  // }, []);
  // const newListSeatSelected = filter?.reduce(
  //   (newListSeatSelected) => {
  //     return [...newListSeatSelected];
  //   },
  //   [filter]
  // );
  // const filterRoomAndBedRoom = filtered.filter((value) => {
  //   if (numbers !== undefined && numbers !== undefined) {
  //     let valuePassesFilters = true;

  //     if (numbers.kitchen) {
  //       valuePassesFilters = valuePassesFilters && value.kitchen === true;
  //     }

  //     if (numbers.dryer) {
  //       valuePassesFilters = valuePassesFilters && value.dryer === true;
  //     }
  //     if (numbers.indoorFireplace) {
  //       valuePassesFilters =
  //         valuePassesFilters && value.indoorFireplace === true;
  //     }
  //     if (numbers.wifi) {
  //       valuePassesFilters = valuePassesFilters && value.wifi === true;
  //     }
  //     if (numbers.cableTV) {
  //       valuePassesFilters = valuePassesFilters && value.cableTV === true;
  //     }
  //     if (numbers.heating) {
  //       valuePassesFilters = valuePassesFilters && value.heating === true;
  //     }
  //     if (value.bedRoom < numbers.bedroom) {
  //       valuePassesFilters = valuePassesFilters && value.bedRoom === true;
  //     }
  //     if (value.guests < numbers.bed) {
  //       valuePassesFilters = valuePassesFilters && value.guests === true;
  //     }
  //     if (value.bath < numbers.bathroom) {
  //       valuePassesFilters = valuePassesFilters && value.bath === true;
  //     }
  //     if (numbers.gym) {
  //       valuePassesFilters = valuePassesFilters && value.gym === true;
  //     }
  //     if (numbers.pool) {
  //       valuePassesFilters = valuePassesFilters && value.pool === true;
  //     }
  //     if (numbers.hotTub) {
  //       valuePassesFilters = valuePassesFilters && value.hotTub === true;
  //     }
  //     if (numbers.elevator) {
  //       valuePassesFilters = valuePassesFilters && value.elevator === true;
  //     }

  //     console.log("valuePassesFilters", valuePassesFilters);
  //     return valuePassesFilters;
  //   } else {
  //     return value;
  //   }
  // });

  // console.log("filterRoomAndBedRoom", filterRoomAndBedRoom);

  const filteredData = () => {
    dispatch(createAction(FILTER_ROOM, filtered));
    dispatch(createAction(CLOSE_MODAL_FILTER));
  };

  return (
    <Fragment>
      <Fragment>
        <Modal
          open={modal}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.root}
        >
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
                      {numbers.guests}
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
                      {numbers.bedRoom}
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
                      {numbers.bath}
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
                <Typography className={classes.modal__title__text}>
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

                    <a
                      href="https://www.airbnb.com.vn/d/superhost"
                      className={classes.modal__text_style}
                    >
                      Tìm hiểu thêm
                    </a>
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
                          checked={numbers.kitchen}
                          onChange={handleChangeCheckBox}
                          name="kitchen"
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
                          checked={numbers.wifi}
                          onChange={handleChangeCheckBox}
                          name="wifi"
                          inputProps={{ "aria-label": "primary checkbox" }}
                          classes={{
                            root: classes.checkbox,
                          }}
                        />
                        <Typography>Wifi</Typography>
                      </div>
                    </Grid>
                    <Grid item lg={6}>
                      <div className={classes.modal__style__checkbox}>
                        <Checkbox
                          checked={numbers.heating}
                          onChange={handleChangeCheckBox}
                          name="heating"
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
                          checked={numbers.indoorFireplace}
                          onChange={handleChangeCheckBox}
                          name="indoorFireplace"
                          inputProps={{ "aria-label": "primary checkbox" }}
                          classes={{
                            root: classes.checkbox,
                          }}
                        />
                        <Typography>Lò sưởi trong nhà</Typography>
                      </div>
                    </Grid>
                  </Grid>

                  <div
                    className={classes.dropdown}
                    style={{ display: dropdown ? "block" : "none" }}
                  >
                    <Grid container>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            checked={numbers.cableTV}
                            onChange={handleChangeCheckBox}
                            name="cableTV"
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
                          <Typography>TV</Typography>
                        </div>
                      </Grid>
                      <Grid item lg={6}>
                        <div className={classes.modal__style__checkbox}>
                          <Checkbox
                            checked={numbers.dryer}
                            onChange={handleChangeCheckBox}
                            name="dryer"
                            inputProps={{ "aria-label": "primary checkbox" }}
                            classes={{
                              root: classes.checkbox,
                            }}
                          />
                          <Typography>Máy sấy khô</Typography>
                        </div>
                      </Grid>
                    </Grid>
                    <div style={{ display: dropdown ? "block" : "none" }}>
                      <Typography
                        onClick={handleCloseDropdown}
                        className={classes.modal__text_style}
                      >
                        Đóng tất cả tiện nghi
                      </Typography>
                    </div>
                  </div>
                  <div
                    className={classes.dropdown}
                    style={{ display: dropdown ? "none" : "block" }}
                  >
                    <Typography
                      onClick={handleOpenDropdown}
                      className={classes.modal__text_style}
                    >
                      Hiển thị tất cả tiện nghi
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Tiện ích */}
              <div className={classes.modal__convenient}>
                <Typography className={classes.modal__title__text}>
                  Tiện ích
                </Typography>
                <div>
                  <Grid container>
                    <Grid item lg={6}>
                      <div className={classes.modal__style__checkbox}>
                        <Checkbox
                          checked={numbers.elevator}
                          onChange={handleChangeCheckBoxUtilities}
                          name="elevator"
                          inputProps={{ "aria-label": "primary checkbox" }}
                          classes={{
                            root: classes.checkbox,
                          }}
                        />
                        <Typography>Thang máy</Typography>
                      </div>
                    </Grid>
                    <Grid item lg={6}>
                      <div className={classes.modal__style__checkbox}>
                        <Checkbox
                          checked={numbers.gym}
                          onChange={handleChangeCheckBoxUtilities}
                          name="gym"
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
                          checked={numbers.hotTub}
                          onChange={handleChangeCheckBoxUtilities}
                          name="hotTub"
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
                          checked={numbers.pool}
                          onChange={handleChangeCheckBoxUtilities}
                          name="pool"
                          inputProps={{ "aria-label": "primary checkbox" }}
                          classes={{
                            root: classes.checkbox,
                          }}
                        />
                        <Typography>Bể bơi</Typography>
                      </div>
                    </Grid>
                  </Grid>
                  {/* <div>
                      <Typography className={classes.modal__text_style}>
                        Hiển thị tất cả các tiện ích
                      </Typography>
                    </div> */}
                </div>
              </div>

              <div className={classes.modal__convenient}>
                <Typography className={classes.modal__title__text}>
                  Loại nhà/phòng
                </Typography>
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
                <Typography className={classes.modal__title__text}>
                  Ngôn ngữ chủ nhà
                </Typography>
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
              <button
                onClick={() => filteredData()}
                className={classes.button__modal__button}
              >
                Hiển thị hơn
                {filtered.length > 0 || numbers.bedroom > 0
                  ? numbers.bedroom > filtered.bedRoom
                    ? 0
                    : filtered.length
                  : 300}
                chỗ ở
              </button>
            </div>
          </div>
        </Modal>
      </Fragment>
    </Fragment>
  );
};

export default ModalFilter;
