import {
  AppBar,
  Box,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import React, { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import airbnbIcon from "../../../assets/img/airbnblogo.png";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  SHOW_MODAL_SIGNIN,
  SHOW_MODAL_SIGNUP,
} from "../../../store/types/AuthType";
import { FAKE_AVATAR } from "../../../constants/config";
import { useHistory } from "react-router";

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const windowWidth = window.innerWidth;
  const dispatch = useDispatch();
  const history = useHistory();
  const idUser = localStorage.getItem("idUser");
  const { infoUser } = useSelector((state) => state.AuthReducer);
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("idUser");
    history.push("/");
    dispatch(createAction(SHOW_MODAL_SIGNIN));
  };
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const ShowModalSignIn = () => {
    setAnchorEl(null);
    dispatch(createAction(SHOW_MODAL_SIGNIN));
  };

  const ShowModalSignUp = () => {
    setAnchorEl(null);
    dispatch(createAction(SHOW_MODAL_SIGNUP));
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <Fragment>
      {/* AppBar */}
      <AppBar position="fixed" elevation={0} className={classes.root}>
        <Toolbar className={classes.navbar__content}>
          <Box style={{ minWidth: "250px" }}>
            <a href="/" target="_blank" rel="noreferrer">
              <img
                src={airbnbIcon}
                alt="icon"
                className={classes.navbar__content__icon}
              />
            </a>
          </Box>

          <Box
            className={
              scroll
                ? `${classes.navbar__content__menu}`
                : `${classes.navbar__content__menu_scroll}`
            }
          >
            <span>Nơi ở</span>
            <span>Trải nghiệm</span>
            <span>Trải nghiệm trực tuyến</span>
          </Box>

          <div className={classes.navbar__content__left}>
            <span>Trở thành chủ nhà</span>
            <IconButton className={classes.language__icon}>
              <LanguageIcon fontSize="small" />
            </IconButton>
            <Chip
              onClick={handleOpenMenu}
              className={classes.chip}
              size="medium"
              icon={<MenuOutlinedIcon fontSize="small" />}
              label={
                idUser ? (
                  <img
                    src={`${FAKE_AVATAR}${infoUser._id}`}
                    alt="avatar"
                    className={classes.avatar}
                  />
                ) : (
                  <AccountCircleOutlinedIcon fontSize="medium" />
                )
              }
              // onClick={handleClick}
              // onDelete={handleDelete}
              variant="default"
              color="#ffffff"
            />
          </div>
        </Toolbar>
      </AppBar>

      {/* Menu Toggle from Chip*/}
      <Menu
        id="simple-menu"
        anchorReference="anchorPosition"
        anchorPosition={{ top: 80, left: windowWidth - 80 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            minWidth: "200px",
            padding: "8px",
            borderRadius: "16px",
          },
        }}
      >
        {idUser ? null : (
          <>
            <MenuItem className={classes.menu__items} onClick={ShowModalSignIn}>
              Đăng nhập
            </MenuItem>
            <MenuItem className={classes.menu__items} onClick={ShowModalSignUp}>
              Đăng Ký
            </MenuItem>
          </>
        )}
        <MenuItem className={classes.menu__items}>Cho thuê nhà</MenuItem>
        <MenuItem className={classes.menu__items}>Tổ chức trải nghiệm</MenuItem>

        {idUser && (
          <MenuItem
            onClick={() => {
              history.push("/profile");
              setAnchorEl(null);
            }}
            className={classes.menu__items}
          >
            Tài Khoản
          </MenuItem>
        )}
        <MenuItem className={classes.menu__items}>Trợ giúp</MenuItem>

        {idUser && (
          <MenuItem onClick={handleLogout} className={classes.menu__items}>
            Đăng xuất
          </MenuItem>
        )}
      </Menu>
    </Fragment>
  );
};

export default Header;
