import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LanguageIcon from "@material-ui/icons/Language";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchIcon from "@material-ui/icons/Search";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import airbnbIcon from "../../../assets/img/airbnblogo.png";
import airbnbRedIcon from "../../../assets/img/airbnbRedIcon.png";
import { USERID } from "../../../constants/config";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  LOG_OUT,
  SHOW_MODAL_SIGNIN,
  SHOW_MODAL_SIGNUP,
} from "../../../store/types/AuthType";
import SearchBar from "./SearchBar";
import useStyles from "./style";

const Header = () => {
  const isUserId = localStorage.getItem(USERID);
  const [anchorEl, setAnchorEl] = useState(null);
  const windowWidth = window.innerWidth;
  const dispatch = useDispatch();
  const history = useHistory();
  const idUser = localStorage.getItem(USERID);
  const { infoUser } = useSelector((state) => state.AuthReducer);
  const { searchResult } = useSelector((state) => state.SearchReducer);
  // console.log("searchResult", searchResult)

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem(USERID);
    history.push("/");
    dispatch(createAction(LOG_OUT));
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

  // scroll Y to more than 250 -> change background color from transparent to white + hide searchBar -> display appSearch + hide menu content
  // click appSearch while at Y more than 250 -> hide appSearch + display searchBar display menu content
  // clickAwayListener -> listen to the event of clicking outside appBar component in order to hide the menu content
  // *Note: clickAwayListener is only active when window.innerHeight is more than 100

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  const [scroll, setScroll] = useState(false);
  const [displaySearchBar, setDisplaySearchBar] = useState(true);
  const [listPageDisplaySearchBar, setListPageDisplaySearchBar] =
    useState(false);
  const [detailPageDisplaySearchBar, setDetailPageDisplaySearchBar] =
    useState(false);

  const handleClickAwayListener = () => {
    if (homepageRoute) {
      if (!scroll) return;
      setDisplaySearchBar(false);
    }
    if (listpageRoute) {
      setListPageDisplaySearchBar(false);
    }
    if (detailpageRoute) {
      setDetailPageDisplaySearchBar(false);
    }
  };

  useEffect(() => {
    if (scroll) {
      setDisplaySearchBar(false);
    } else {
      setDisplaySearchBar(true);
    }
  }, [scroll]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const matchUrl = useRouteMatch();
  const homepageRoute = matchUrl.path === "/";
  const listpageRoute = matchUrl.path === "/list/:locationId";
  const detailpageRoute = matchUrl.path === "/detail/:roomId";
  const classes = useStyles({
    scroll,
    displaySearchBar,
    homepageRoute,
    listpageRoute,
    detailpageRoute,
    listPageDisplaySearchBar,
    detailPageDisplaySearchBar,
    isUserId,
  });
  const handleProfile = (userId) => {
    history.push(`/profile/${userId}`);
  };
  return (
    <Fragment>
      {/* AppBar */}
      <ClickAwayListener onClickAway={() => handleClickAwayListener()}>
        <AppBar
          elevation={0}
          className={`
                    ${homepageRoute && classes.root} 
                    ${listpageRoute && classes.listRoot}
                    ${detailpageRoute && classes.detailRoot}
                    `}
        >
          <Toolbar className={classes.navbar__content}>
            <Box className={classes.navbar__content__right}>
              <a href="/" target="_blank" rel="noreferrer">
                <img
                  src={isDesktop ? airbnbIcon : airbnbRedIcon}
                  alt="icon"
                  className={classes.navbar__content__icon}
                />
              </a>
            </Box>

            {homepageRoute && (
              <>
                {scroll && !displaySearchBar ? (
                  <Box
                    className={classes.navbar__content__search}
                    onClick={() =>
                      setDisplaySearchBar((prevState) => !prevState)
                    }
                  >
                    <button className={classes.navbar__search__button}>
                      <h3 className={classes.navbar__search__button__title}>
                        Bắt đầu tìm kiếm
                      </h3>
                      <div className={classes.navbar__search__button__wrap}>
                        <SearchIcon
                          className={classes.navbar__search__button__icon}
                        />
                      </div>
                    </button>
                  </Box>
                ) : (
                  <Box className={classes.navbar__content__menu}>
                    <span>Nơi ở</span>
                    <span>Trải nghiệm</span>
                    <span>Trải nghiệm trực tuyến</span>
                  </Box>
                )}
              </>
            )}

            {listpageRoute && (
              <>
                {listPageDisplaySearchBar ? (
                  <Box
                    className={`${classes.navbar__content__menu} ${classes.list__navbar__content__menu}`}
                  >
                    <span>Nơi ở</span>
                    <span>Trải nghiệm</span>
                    <span>Trải nghiệm trực tuyến</span>
                  </Box>
                ) : (
                  <Box
                    className={`${classes.navbar__content__search}${classes.list__navbar__content__search}`}
                    onClick={() =>
                      setListPageDisplaySearchBar((prevState) => !prevState)
                    }
                  >
                    <div className={classes.list__navbar__search__wrapper}>
                      <button className={classes.list__navbar__button}>
                        <span>{searchResult?.location?.province}</span>
                      </button>
                      <span className={classes.list__navbar__dash}></span>
                      <button className={classes.list__navbar__button}>
                        {searchResult?.checkIn !== "Invalid date" &&
                        searchResult?.checkOut !== "Invalid date" ? (
                          <span>
                            {searchResult?.checkIn} - {searchResult?.checkOut}
                          </span>
                        ) : (
                          <span>Thêm ngày</span>
                        )}
                      </button>
                      <span className={classes.list__navbar__dash}></span>
                      <button className={classes.list__navbar__button}>
                        {searchResult?.guest > 0 ? (
                          <span>{searchResult?.guest} Khách</span>
                        ) : (
                          <span>Thêm khách</span>
                        )}
                        <div className={classes.navbar__search__button__wrap}>
                          <SearchIcon
                            className={classes.navbar__search__button__icon}
                          />
                        </div>
                      </button>
                    </div>
                  </Box>
                )}
              </>
            )}

            {detailpageRoute && (
              <>
                {detailPageDisplaySearchBar ? (
                  <Box
                    className={`${classes.navbar__content__menu} ${classes.detail__navbar__content__menu}`}
                  >
                    <span>Nơi ở</span>
                    <span>Trải nghiệm</span>
                    <span>Trải nghiệm trực tuyến</span>
                  </Box>
                ) : (
                  <Box
                    className={`${classes.navbar__content__search} ${classes.detail__navbar__content__search}`}
                    onClick={() =>
                      setDetailPageDisplaySearchBar((prevState) => !prevState)
                    }
                  >
                    <button className={classes.navbar__search__button}>
                      <h3 className={classes.navbar__search__button__title}>
                        Bắt đầu tìm kiếm
                      </h3>
                      <div className={classes.navbar__search__button__wrap}>
                        <SearchIcon
                          className={classes.navbar__search__button__icon}
                        />
                      </div>
                    </button>
                  </Box>
                )}
              </>
            )}

            <div
              className={`
                        ${classes.navbar__content__left} 
                        ${classes.list__navbar__content__left}`}
            >
              <Button
                className={`
                            ${classes.navbar__content__left__button} 
                            ${classes.list__navbar__content__left__button}`}
              >
                Trở thành chủ nhà
              </Button>
              <IconButton
                className={`${classes.language__wrapper} ${classes.list__language__wrapper}`}
              >
                <LanguageIcon
                  className={`${classes.language__icon} ${classes.list__language__icon}`}
                />
              </IconButton>
              <button
                className={`${classes.button__chip} ${classes.list__button__chip}`}
                onClick={handleOpenMenu}
              >
                <MenuOutlinedIcon fontSize="small" />
                {isUserId ? (
                  <Badge badgeContent={1} color="secondary">
                    <Avatar
                      alt="user avatar"
                      src={infoUser?.avatar}
                      className={classes.avatar}
                    />
                  </Badge>
                ) : (
                  <AccountCircleIcon fontSize="medium" />
                )}
              </button>
            </div>
          </Toolbar>

          <Box
            className={`
                    ${homepageRoute && classes.searchBar} 
                    ${listpageRoute && classes.list__searchBar}
                    ${detailpageRoute && classes.detail__searchBar}
                    
                    `}
          >
            <SearchBar isDesktop={isDesktop} />
          </Box>
        </AppBar>
      </ClickAwayListener>

      {/* Menu Toggle from Chip*/}
      <Menu
        id="simple-menu"
        anchorReference="anchorPosition"
        anchorPosition={{ top: 75, left: windowWidth - 70 }}
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
        {isUserId ? (
          <>
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
            <MenuItem className={classes.menu__items}>Cho thuê nhà</MenuItem>
            <MenuItem className={classes.menu__items}>
              Tổ chức trải nghiệm
            </MenuItem>
            <MenuItem
              onClick={() => handleProfile(isUserId)}
              className={classes.menu__items}
            >
              Tài khoản
            </MenuItem>
            <MenuItem className={classes.menu__items}>Trải nghiệm</MenuItem>
            <MenuItem className={classes.menu__items}>Trợ giúp</MenuItem>
            <MenuItem className={classes.menu__items} onClick={handleLogout}>
              Đăng xuất
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              className={`${classes.menu__items} ${classes.menu__itemsBold}`}
              onClick={ShowModalSignIn}
            >
              Đăng nhập
            </MenuItem>
            <MenuItem className={classes.menu__items} onClick={ShowModalSignUp}>
              Đăng Ký
            </MenuItem>
            <MenuItem className={classes.menu__items}>Cho thuê nhà</MenuItem>
            <MenuItem className={classes.menu__items}>
              Tổ chức trải nghiệm
            </MenuItem>
            <MenuItem className={classes.menu__items}>Trải nghiệm</MenuItem>
          </>
        )}
      </Menu>
    </Fragment>
  );
};

export default Header;
