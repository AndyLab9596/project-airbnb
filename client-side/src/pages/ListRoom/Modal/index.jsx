import {
  Checkbox,
  Grid,
  IconButton,
  Modal,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RemoveIcon from "@material-ui/icons/Remove";
import StarRateOutlinedIcon from "@material-ui/icons/StarRateOutlined";
import useStyles from "./style";
const ModalFilter = ({ handleClose, open }) => {
  const classes = useStyles();
  const [dropdown, setDropdown] = useState(false);
  const handleOpenDropdown = () => {
    setDropdown(true);
  };
  const handleCloseDropdown = () => {
    setDropdown(false);
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

                {/* <div className={classes.modal__convenient}>
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
                </div> */}

                {/* <div className={classes.modal__convenient}>
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
                </div> */}

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
    </Fragment>
  );
};

export default ModalFilter;
