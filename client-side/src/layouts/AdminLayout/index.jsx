import { Avatar, Badge, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Collapse from "@material-ui/core/Collapse";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import clsx from "clsx";
import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdAdminPanelSettings, MdOutlineRateReview } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { TiTicket } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, Route, useHistory } from "react-router-dom";
import airbnbIcon from "../../assets/img/airbnblogo.png";
import { USERID } from "../../constants/config";
import useStyles from "./style";

const AdminLayout = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openList, setOpenList] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const { infoUser } = useSelector((state) => state.AuthReducer);
  const handleListClick = () => {
    setOpenList((state) => !state);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  //   const handleLogoutClick = () => {
  //     dispatch(createAction(actionTypes.LOGOUT_USER));
  //     history.push("/");
  //     window.location.reload();
  //   };
  //   const currentUser = useSelector((state) => state.UserReducer.registerUser);
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        if (!localStorage.getItem(USERID)) {
          return <Redirect to="/" />;
        }
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>

                <div className={classes.logo}>
                  <img src={airbnbIcon} alt="logo" />
                </div>
                <button
                  className={`${classes.button__chip} ${classes.list__button__chip}`}
                  onClick={handleOpenMenu}
                >
                  <MenuOutlinedIcon fontSize="small" />

                  <Badge badgeContent={1} color="secondary">
                    <Avatar
                      alt="user avatar"
                      src={infoUser?.avatar}
                      className={classes.avatar}
                    />
                  </Badge>
                </button>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  className={classes.menu}
                >
                  <MenuItem
                    className={`${classes.menu__items} ${classes.menu__itemsBold}`}
                  >
                    Tin nhắn
                  </MenuItem>
                  <MenuItem
                    className={`${classes.menu__items} ${classes.menu__itemsBold}`}
                  >
                    <Badge color="secondary" variant="dot">
                      Thông báo
                    </Badge>
                  </MenuItem>
                  <MenuItem
                    className={`${classes.menu__items} ${classes.menu__itemsBold}`}
                  >
                    Chuyến đi
                  </MenuItem>
                  <MenuItem
                    className={`${classes.menu__items} ${classes.menu__itemsBold}`}
                  >
                    Danh sách yêu thích
                  </MenuItem>

                  <MenuItem>Cho thuê nhà</MenuItem>
                  <MenuItem>Tổ chức trải nghiệm</MenuItem>
                  <MenuItem>Tài khoản</MenuItem>
                  <MenuItem>Trải nghiệm</MenuItem>
                  <MenuItem>Trợ giúp</MenuItem>
                  <MenuItem>Đăng xuất</MenuItem>
                </Menu>
              </Toolbar>
            </AppBar>

            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <Typography variant="h5" color="primary">
                  DashBoard
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem button onClick={handleListClick}>
                  <ListItemIcon>
                    <MdAdminPanelSettings fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Admin Control" />
                  {openList ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openList} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <NavLink
                      to="/admin"
                      className={classes.link}
                      activeClassName={classes.active}
                      exact
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <FiUsers />
                        </ListItemIcon>
                        <ListItemText primary="Quản lý người dùng" />
                      </ListItem>
                    </NavLink>
                  </List>
                  <List component="div" disablePadding>
                    <NavLink
                      to="/admin/locations"
                      activeClassName={classes.active}
                      className={classes.link}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <HiOutlineLocationMarker />
                        </ListItemIcon>
                        <ListItemText>
                          Quản lý thông tin vị trí
                          <Collapse
                            in={openList}
                            timeout="auto"
                            unmountOnExit
                          ></Collapse>
                        </ListItemText>
                      </ListItem>
                    </NavLink>
                  </List>
                  <List component="div" disablePadding>
                    <NavLink
                      to="/admin/rooms"
                      activeClassName={classes.active}
                      className={classes.link}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <RiHotelLine />
                        </ListItemIcon>
                        <ListItemText primary="Quản lý thông tin phòng" />
                      </ListItem>
                    </NavLink>
                  </List>
                  <List component="div" disablePadding>
                    <NavLink
                      to="/admin/ratings"
                      activeClassName={classes.active}
                      className={classes.link}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <MdOutlineRateReview />
                        </ListItemIcon>
                        <ListItemText primary="Quản lý đánh giá " />
                      </ListItem>
                    </NavLink>
                  </List>
                  <List component="div" disablePadding>
                    <NavLink
                      to="/admin/tickets"
                      activeClassName={classes.active}
                      className={classes.link}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon disablePadding>
                          <TiTicket />
                        </ListItemIcon>
                        <ListItemText disablePadding primary="Quản lý vé" />
                      </ListItem>
                    </NavLink>
                  </List>
                </Collapse>
              </List>
              <Divider />
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
              <Component {...propsRoute} />
            </main>
          </div>
        );
      }}
    />
  );
};

export default AdminLayout;
