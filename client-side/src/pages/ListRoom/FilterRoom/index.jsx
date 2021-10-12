// import {
//   Chip,
//   Grid,
//   IconButton,
//   Menu,
//   Modal,
//   Typography,
// } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import Checkbox from "@material-ui/core/Checkbox";
// import Slider from "@material-ui/core/Slider";
// import Switch from "@material-ui/core/Switch";
// import AddIcon from "@material-ui/icons/Add";
// import CloseIcon from "@material-ui/icons/Close";
// import RemoveIcon from "@material-ui/icons/Remove";
// import React, { Fragment, useState } from "react";
// import useStyles from "./style";
// const FilterRoom = () => {
//   const classes = useStyles();

//   //State Hủy miễn phí
//   const [anchorEl, setAnchorEl] = useState(null);
//   //State Loại nơi ở
//   const [anchorElAccommodation, setAnchorElAccommodation] = useState(null);
//   //State Giá
//   const [anchorElPrice, setAnchorElPrice] = useState(null);
//   //State Đặt ngay
//   const [anchorElBookingNow, setAnchorElBookingNow] = useState(null);
//   //State Hủy miễn phí
//   const [open, setOpen] = useState(false);

//   //Menu Hủy miễn phí
//   const handleOpenMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };
//   //Menu Loại nơi ở
//   const handleOpenMenuAccommodation = (event) => {
//     setAnchorElAccommodation(event.currentTarget);
//   };
//   const handleCloseMenuAccommodatio = () => {
//     setAnchorElAccommodation(null);
//   };
//   //Menu Giá
//   const handleOpenMenuPrice = (event) => {
//     setAnchorElPrice(event.currentTarget);
//   };
//   const handleCloseMenuPrice = () => {
//     setAnchorElPrice(null);
//   };
//   //Menu Đặt ngay
//   const handleOpenMenuBookingNow = (event) => {
//     setAnchorElBookingNow(event.currentTarget);
//   };
//   const handleCloseMenuBookingNow = () => {
//     setAnchorElBookingNow(null);
//   };
//   //Menu Bộ lọc khác
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   // Switch Hủy miễn phí
//   const [state, setState] = React.useState({
//     checkedA: true,
//   });
//   const handleChangeSwitch = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };
//   // Checkbox loại nơi ở
//   const [checked, setChecked] = React.useState(true);

//   const handleChangeCheckBox = (event) => {
//     setChecked(event.target.checked);
//   };
//   // Slider Giá
//   const [rating, setRating] = React.useState([5, 10]);

//   const rateGte = rating?.join("").slice(0, 1);
//   const rateLte = rating?.join("").slice(1, 3);
//   const handleChangeRating = (event, newValue) => {
//     setRating(newValue);
//   };
//   // Switch Hủy miễn phí
//   const [stateBookingNow, setStateBookingNow] = React.useState({
//     checkedA: true,
//   });
//   const handleChangeSwitchBookingNow = (event) => {
//     setStateBookingNow({
//       ...stateBookingNow,
//       [event.target.name]: event.target.checked,
//     });
//   };
//   return (
//     <Fragment>
//       <div>
//         <Chip
//           onClick={handleOpenMenu}
//           className={classes.chip}
//           size="medium"
//           label="Hủy miễn phí"
//           fontSize="medium"
//           variant="default"
//           color="#ffffff"
//         />
//         <Chip
//           onClick={handleOpenMenuAccommodation}
//           className={classes.chip}
//           size="medium"
//           label="Loại nơi ở"
//           fontSize="medium"
//           variant="default"
//           color="#ffffff"
//         />
//         <Chip
//           onClick={handleOpenMenuPrice}
//           className={classes.chip}
//           size="medium"
//           label="Giá"
//           fontSize="medium"
//           variant="default"
//           color="#ffffff"
//         />
//         <Chip
//           onClick={handleOpenMenuBookingNow}
//           className={classes.chip}
//           size="medium"
//           label="Đặt ngay"
//           fontSize="medium"
//           variant="default"
//           color="#ffffff"
//         />
//         <Chip
//           onClick={handleOpen}
//           className={classes.chip}
//           size="medium"
//           label="Bộ lọc khác"
//           fontSize="medium"
//           variant="default"
//           color="#ffffff"
//         />
//       </div>

//       {/* Menu hủy miễn phí */}
//       <Menu
//         anchorReference="anchorPosition"
//         anchorPosition={{ top: 160, left: 20 }}
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleCloseMenu}
//         PaperProps={{
//           style: {
//             maxWidth: "300px",
//             padding: "8px",
//             borderRadius: "16px",
//           },
//         }}
//       >
//         <div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Typography>
//               Chỉ hiển thị những chỗ ở cho phép hủy miễn phí
//             </Typography>
//             <div>
//               <Switch
//                 checked={state.checkedA}
//                 onChange={handleChangeSwitch}
//                 name="checkedA"
//                 inputProps={{ "aria-label": "secondary checkbox" }}
//               />
//             </div>
//           </div>
//           <div></div>
//         </div>
//       </Menu>
//       {/* Menu Loại nơi ở */}
//       <Menu
//         anchorReference="anchorPosition"
//         anchorPosition={{ top: 160, left: 120 }}
//         anchorEl={anchorElAccommodation}
//         keepMounted
//         open={Boolean(anchorElAccommodation)}
//         onClose={handleCloseMenuAccommodatio}
//         PaperProps={{
//           style: {
//             maxWidth: "300px",
//             padding: "8px",
//             borderRadius: "16px",
//           },
//         }}
//       >
//         <div
//           style={{
//             display: "flex",

//             alignItems: "flex-start",
//           }}
//         >
//           <Checkbox
//             checked={checked}
//             onChange={handleChangeCheckBox}
//             inputProps={{ "aria-label": "primary checkbox" }}
//           />
//           <div>
//             <Typography>Toàn bộ nhà</Typography>
//             <Typography>Tìm một nơi cho riêng bạn</Typography>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//           }}
//         >
//           <Checkbox
//             checked={checked}
//             onChange={handleChangeCheckBox}
//             inputProps={{ "aria-label": "primary checkbox" }}
//           />
//           <div>
//             <Typography>Phòng riêng</Typography>
//             <Typography>
//               Có phòng riêng và chia sẻ một số không gian chung
//             </Typography>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//           }}
//         >
//           <Checkbox
//             checked={checked}
//             onChange={handleChangeCheckBox}
//             inputProps={{ "aria-label": "primary checkbox" }}
//           />
//           <div>
//             <Typography>Phòng khách sạn</Typography>
//             <Typography>
//               Có phòng riêng/chia sẻ ở khách sạn boutique, khách sạn giá rẻ và
//               những chỗ ở khác
//             </Typography>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//           }}
//         >
//           <Checkbox
//             checked={checked}
//             onChange={handleChangeCheckBox}
//             inputProps={{ "aria-label": "primary checkbox" }}
//           />
//           <div>
//             <Typography>Phòng chung</Typography>
//             <Typography>
//               Ở trong một không gian chia sẻ, như phòng chung
//             </Typography>
//           </div>
//         </div>
//       </Menu>
//       {/* Menu Giá */}
//       <Menu
//         anchorReference="anchorPosition"
//         anchorPosition={{ top: 160, left: 120 }}
//         anchorEl={anchorElPrice}
//         keepMounted
//         open={Boolean(anchorElPrice)}
//         onClose={handleCloseMenuPrice}
//         PaperProps={{
//           style: {
//             width: "300px",
//             height: "100px",
//             padding: "8px",
//             borderRadius: "16px",
//           },
//         }}
//       >
//         <div>
//           <Slider
//             min={1}
//             max={10}
//             step={1}
//             value={rating}
//             onChange={handleChangeRating}
//             valueLabelDisplay="auto"
//             aria-labelledby="range-slider"
//             className={classes.slider}
//           />
//         </div>
//       </Menu>
//       {/* Menu Đặt ngay */}
//       <Menu
//         anchorReference="anchorPosition"
//         anchorPosition={{ top: 160, left: 20 }}
//         anchorEl={anchorElBookingNow}
//         keepMounted
//         open={Boolean(anchorElBookingNow)}
//         onClose={handleCloseMenuBookingNow}
//         PaperProps={{
//           style: {
//             maxWidth: "300px",
//             padding: "8px",
//             borderRadius: "16px",
//           },
//         }}
//       >
//         <div>
//           <Typography>Đặt ngay</Typography>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "flex-start",
//             }}
//           >
//             <Typography>
//               Nhà/phòng cho thuê bạn có thể đặt mà không cần chờ chủ nhà chấp
//               thuận
//             </Typography>
//             <div>
//               <Switch
//                 checked={stateBookingNow.checkedA}
//                 onChange={handleChangeSwitchBookingNow}
//                 name="checkedA"
//                 inputProps={{ "aria-label": "secondary checkbox" }}
//               />
//             </div>
//           </div>
//           <div></div>
//         </div>
//       </Menu>
//       {/* Modal Bộ lọc khác */}

//       <div style={{ position: "absolute", right: 0 }}>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="simple-modal-title"
//           aria-describedby="simple-modal-description"
//           className={classes.modal}
//         >
//           <div className={classes.root}>
//             <div className={classes.modal__content}>
//               <div className={classes.modal__header}>
//                 <IconButton className={classes.icon} onClick={handleClose}>
//                   <CloseIcon />
//                 </IconButton>
//                 <Typography variant="body2">Bộ lọc khác</Typography>
//                 <div></div>
//               </div>

//               <div
//                 style={{
//                   overflowX: "hidden",
//                   paddingRight: "25px",
//                   paddingLeft: "25px",
//                 }}
//               >
//                 <div className={classes.modal__bedroom}>
//                   <Typography>Phòng và phòng ngủ</Typography>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       padding: "12px 0",
//                     }}
//                   >
//                     <Typography>Giường</Typography>
//                     <div className={classes.modal__bedroom__item}>
//                       <button className={classes.button}>
//                         <AddIcon />
//                       </button>
//                       <Typography style={{ padding: "0 15px" }}>1</Typography>
//                       <button className={classes.button}>
//                         <RemoveIcon />
//                       </button>
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       padding: "12px 0",
//                     }}
//                   >
//                     <Typography>Phòng ngủ</Typography>
//                     <div className={classes.modal__bedroom__item}>
//                       <button className={classes.button}>
//                         <AddIcon />
//                       </button>
//                       <Typography style={{ padding: "0 15px" }}>1</Typography>
//                       <button className={classes.button}>
//                         <RemoveIcon />
//                       </button>
//                     </div>
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       padding: "12px 0",
//                     }}
//                   >
//                     <Typography>Phòng tắm</Typography>
//                     <div className={classes.modal__bedroom__item}>
//                       <button className={classes.button}>
//                         <AddIcon />
//                       </button>
//                       <Typography style={{ padding: "0 15px" }}>1</Typography>
//                       <button className={classes.button}>
//                         <RemoveIcon />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={classes.modal__another}>
//                   <Typography>Lựa chọn khác</Typography>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                     }}
//                   >
//                     <div>
//                       <Typography>Chủ nhà siêu cấp</Typography>
//                       <Typography>
//                         Ở cùng với các chủ nhà được công nhận
//                       </Typography>
//                       <Typography>Tìm hiểu thêm</Typography>
//                     </div>
//                     <div>
//                       <Switch
//                         // checked={state.checkedA}
//                         // onChange={handleChangeSwitch}
//                         name="checkedA"
//                         inputProps={{ "aria-label": "secondary checkbox" }}
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <Typography>Hỗ trợ người có nhu cầu đặc biệt</Typography>
//                     <Typography>
//                       Tìm một nơi ở đáp ứng nhu cầu di chuyển của bạn
//                     </Typography>
//                     <Typography>Chọn tính năng nơi bạn ở</Typography>
//                   </div>
//                 </div>

//                 <div className={classes.modal__convenient}>
//                   <Typography>Tiện nghi</Typography>
//                   <div>
//                     <Grid container>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Bếp</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Hệ thống sưởi</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Điều hòa nhiệt độ</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Máy giặt</Typography>
//                         </div>
//                       </Grid>
//                     </Grid>
//                     <div>
//                       <Typography>Hiển thị tất cả tiện nghi</Typography>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={classes.modal__convenient}>
//                   <Typography>Tiện ích</Typography>
//                   <div>
//                     <Grid container>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Chỗ đỗ xe miễn phí tại nơi ở</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Phòng tập thể hình</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Bồn tắm nước nóng</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Bể bơi</Typography>
//                         </div>
//                       </Grid>
//                     </Grid>
//                     <div>
//                       <Typography>Hiển thị tất cả các tiện ích</Typography>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={classes.modal__convenient}>
//                   <Typography>Loại nhà/phòng</Typography>
//                   <div>
//                     <Grid container>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Nhà</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Căn hộ</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Chỗ nghỉ phục vụ bữa sáng</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Khách sạn boutique</Typography>
//                         </div>
//                       </Grid>
//                     </Grid>
//                     <div>
//                       <Typography>Hiển thị tất cả các loại chỗ ở</Typography>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={classes.modal__convenient}>
//                   <Typography>Nơi ở độc đáo</Typography>
//                   <div>
//                     <Grid container>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Hải đăng</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Lâu đài</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Nhà nghỉ giữa thiên nhiên</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Nhà nhỏ</Typography>
//                         </div>
//                       </Grid>
//                     </Grid>
//                     <div>
//                       <Typography>Hiển thị mọi nơi ở độc đáo</Typography>
//                     </div>
//                   </div>
//                 </div>

//                 <div className={classes.modal__convenient}>
//                   <Typography>Nội quy nhà</Typography>
//                   <div>
//                     <Grid container>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Cho phép thú cưng</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Cho phép hút thuốc</Typography>
//                         </div>
//                       </Grid>
//                     </Grid>
//                   </div>
//                 </div>

//                 <div className={classes.modal__convenient}>
//                   <Typography>Ngôn ngữ chủ nhà</Typography>
//                   <div>
//                     <Grid container>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Tiếng Anh</Typography>
//                         </div>
//                       </Grid>
//                       <Grid item lg={6}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "centet",
//                             alignItems: "center",
//                           }}
//                         >
//                           <Checkbox
//                             // checked={checked}
//                             // onChange={handleChangeCheckBox}
//                             inputProps={{ "aria-label": "primary checkbox" }}
//                           />
//                           <Typography>Tiếng Việt</Typography>
//                         </div>
//                       </Grid>
//                     </Grid>
//                   </div>
//                 </div>

//                 {/*  */}
//               </div>

//               {/* modal footer */}
//               <div className={classes.modal__footer}>
//                 <Button>Xóa tất cả</Button>
//                 <Button>Hiển thị hơn 300 chỗ ở</Button>
//               </div>

//               {/*  */}
//             </div>
//           </div>
//         </Modal>
//       </div>
//     </Fragment>
//   );
// };

// export default FilterRoom;
