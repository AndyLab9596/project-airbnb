import { Avatar, Badge, Box, Menu, MenuItem } from "@material-ui/core";
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
import { ExpandLess, ExpandMore, LocationOn } from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import EditIcon from "@material-ui/icons/Edit";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { TreeView } from "@material-ui/lab";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { MdAdminPanelSettings, MdOutlineRateReview } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { TiTicket } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useLocation, useParams } from "react-router";
import { NavLink, Redirect, Route, useHistory } from "react-router-dom";
import airbnbIcon from "../../assets/img/airbnblogo.png";
import ContentTreeItem from "../../components/TreeItem";
import { USERID } from "../../constants/config";
import useStyles from "./style";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import { AddLocation, EditLocation } from "@material-ui/icons";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ListIcon from "@material-ui/icons/List";
import queryString from "query-string";
import { SiAdguard, SiAirbnb } from "react-icons/si";
const AdminLayout = (props) => {
  const { Component, ...restRoute } = props;
  const classes = useStyles({ restRoute: restRoute.path });
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openList, setOpenList] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = queryString.parse(location.search);
  const { infoUser } = useSelector((state) => state.AuthReducer);
  console.log(infoUser);
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
  const [expanded, setExpanded] = React.useState({
    user: [],
    location: [],
    room: [],
    ratedRoom: [],
  });
  const [selected, setSelected] = React.useState([]);
  const handleToggleUser = (event, nodeIds) => {
    setExpanded({ ...expanded, user: nodeIds });
  };
  const handleToggleLocation = (event, nodeIds) => {
    setExpanded({ ...expanded, location: nodeIds });
  };

  const handleToggleRoom = (event, nodeIds) => {
    setExpanded({ ...expanded, room: nodeIds });
  };

  const handleToggleRatedRoom = (event, nodeIds) => {
    setExpanded({ ...expanded, ratedRoom: nodeIds });
  };
  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

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

                <div className={classes.admin__header}>
                  <a href="/">
                    <img className={classes.logo} src={airbnbIcon} alt="logo" />
                  </a>
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
              <div className={classes.admin__title}>
                <SiAirbnb />
                <Typography variant="span">Airbnb Admin</Typography>
              </div>
              <div className={classes.drawerHeader}>
                <Box display="flex">
                  <Box textAlign="center">
                    <Avatar
                      alt="Avatar"
                      src={infoUser.avatar}
                      className={classes.large}
                    />
                    <Typography variant="subtitle2">{infoUser.type}</Typography>
                  </Box>
                  <Box marginLeft={2}>
                    <Typography variant="subtitle2">Welcome,</Typography>
                    <Typography variant="subtitle2">{infoUser.name}</Typography>
                  </Box>
                </Box>

                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem button onClick={handleListClick}>
                  <ListItemText>
                    <Typography variant="h5" color="primary">
                      DashBoard
                    </Typography>
                  </ListItemText>
                  {openList ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openList} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <TreeView
                      className={classes.rootTreeview}
                      expanded={expanded.user}
                      selected={selected}
                      onNodeToggle={handleToggleUser}
                      onNodeSelect={handleSelect}
                    >
                      <ContentTreeItem
                        nodeId="1"
                        labelText={
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            Quản lý thông tin người dùng
                            <Typography>
                              {expanded?.user?.length > 0 ? (
                                <ExpandMore />
                              ) : (
                                <NavigateNextIcon />
                              )}
                            </Typography>
                          </Box>
                        }
                        labelIcon={PeopleOutlineIcon}
                      >
                        <NavLink to="/admin/user">
                          <ContentTreeItem
                            nodeId="2"
                            labelText="Danh sách người dùng"
                            labelIcon={ListIcon}
                            color={
                              restRoute.path === "/admin/user"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        </NavLink>
                        {restRoute.path === "/admin/user/edit/:userId" && (
                          <ContentTreeItem
                            nodeId="3"
                            labelText="Cập nhật người dùng"
                            labelIcon={EditIcon}
                            color={
                              restRoute.path === "/admin/user/edit/:userId"
                                ? "#1a73e8"
                                : "#fff"
                            }
                          />
                        )}
                        <NavLink to="/admin/user/add">
                          <ContentTreeItem
                            nodeId="4"
                            labelText="Thêm người dùng "
                            labelIcon={PersonAddIcon}
                            color={
                              restRoute.path === "/admin/user/add"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        </NavLink>
                      </ContentTreeItem>
                    </TreeView>
                  </List>
                  <List component="div" disablePadding>
                    <TreeView
                      className={classes.rootTreeview}
                      expanded={expanded.location}
                      selected={selected}
                      onNodeToggle={handleToggleLocation}
                      onNodeSelect={handleSelect}
                    >
                      <ContentTreeItem
                        nodeId="5"
                        labelText={
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            Quản lý vị trí
                            <Typography>
                              {expanded?.location?.length > 0 ? (
                                <ExpandMore />
                              ) : (
                                <ExpandLess />
                              )}
                            </Typography>
                          </Box>
                        }
                        labelIcon={LocationOn}
                      >
                        <NavLink to="/admin/locations">
                          <ContentTreeItem
                            nodeId="6"
                            labelText="Danh sách vị trí"
                            labelIcon={ListIcon}
                            color={
                              restRoute.path === "/admin/locations"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        </NavLink>
                        {restRoute.path === "/admin/location/edit" && (
                          <ContentTreeItem
                            nodeId="7"
                            labelText="Cập nhật vị trí"
                            labelIcon={EditIcon}
                            color={
                              restRoute.path === "/admin/location/edit"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        )}

                        <NavLink to="/admin/location/add">
                          <ContentTreeItem
                            nodeId="8"
                            labelText="Thêm vị trí "
                            labelIcon={AddLocationIcon}
                            color={
                              restRoute.path === "/admin/location/add"
                                ? "#1a73e8"
                                : "#999"
                            }
                          />
                        </NavLink>
                      </ContentTreeItem>
                    </TreeView>
                  </List>

                  {params?.locationId?.length > 0 ||
                  params?.roomId?.length > 0 ? (
                    <List component="div" disablePadding>
                      <TreeView
                        className={classes.rootTreeview}
                        expanded={expanded.room}
                        selected={selected}
                        onNodeToggle={handleToggleRoom}
                        onNodeSelect={handleSelect}
                      >
                        <ContentTreeItem
                          nodeId="9"
                          labelText={
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              Quản lý phòng
                              <Typography>
                                {expanded?.room?.length > 0 ? (
                                  <ExpandMore />
                                ) : (
                                  <ExpandLess />
                                )}
                              </Typography>
                            </Box>
                          }
                          labelIcon={LocationOn}
                        >
                          <NavLink
                            to={{
                              pathname: `/admin/rooms`,
                              search: queryString.stringify({
                                ...params,
                                locationId: params?.locationId,
                              }),
                            }}
                          >
                            <ContentTreeItem
                              nodeId="10"
                              labelText="Danh sách phòng"
                              labelIcon={ListIcon}
                              color={
                                restRoute.path === "/admin/rooms"
                                  ? "#1a73e8"
                                  : "#999"
                              }
                            />
                          </NavLink>

                          <NavLink
                            to={{
                              pathname: `/admin/rooms/add`,
                              search: queryString.stringify({
                                ...params,
                                locationId: params?.locationId,
                              }),
                            }}
                          >
                            <ContentTreeItem
                              nodeId="11"
                              labelText="Thêm phòng"
                              labelIcon={AddLocationIcon}
                              color={
                                restRoute.path === "/admin/rooms/add"
                                  ? "#1a73e8"
                                  : "#999"
                              }
                            />
                          </NavLink>
                        </ContentTreeItem>
                      </TreeView>
                    </List>
                  ) : null}

                  {params?.roomId?.length > 0 && (
                    <List component="div" disablePadding>
                      <TreeView
                        className={classes.rootTreeview}
                        expanded={expanded.ratedRoom}
                        selected={selected}
                        onNodeToggle={handleToggleRatedRoom}
                        onNodeSelect={handleSelect}
                      >
                        <ContentTreeItem
                          nodeId="12"
                          labelText={
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              Quản lý Đánh giá
                              <Typography>
                                {expanded?.rated?.length > 0 ? (
                                  <ExpandMore />
                                ) : (
                                  <ExpandLess />
                                )}
                              </Typography>
                            </Box>
                          }
                          labelIcon={LocationOn}
                        >
                          <NavLink
                            to={{
                              pathname: `/admin/rooms/ratings`,
                              search: queryString.stringify({
                                ...params,
                                roomId: params?.roomId,
                              }),
                            }}
                          >
                            <ContentTreeItem
                              nodeId="13"
                              labelText="Danh sách đánh giá"
                              labelIcon={ListIcon}
                              color={
                                restRoute.path === "/admin/rooms/ratings"
                                  ? "#1a73e8"
                                  : "#999"
                              }
                            />
                          </NavLink>

                          <NavLink
                            to={{
                              pathname: `/admin/rooms/ratings/add`,
                              search: queryString.stringify({
                                ...params,
                                roomId: params?.roomId,
                              }),
                            }}
                          >
                            <ContentTreeItem
                              nodeId="14"
                              labelText="Thêm đánh giá"
                              labelIcon={AddLocationIcon}
                              color={
                                restRoute.path === "/admin/rooms/ratings/add"
                                  ? "#1a73e8"
                                  : "#999"
                              }
                            />
                          </NavLink>
                        </ContentTreeItem>
                      </TreeView>
                    </List>
                  )}
                  {/* <List component="div" disablePadding>
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
                  </List> */}
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
              <Component
                {...propsRoute}
                handleToggleUser={handleToggleUser}
                handleToggleRoom={handleToggleRoom}
                handleToggleLocation={handleToggleLocation}
                handleToggleRatedRoom={handleToggleRatedRoom}
              />
            </main>
          </div>
        );
      }}
    />
  );
};

export default AdminLayout;
