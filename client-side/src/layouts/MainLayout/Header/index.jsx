import {
    AppBar,
    Box,
    Button,
    Chip,
    ClickAwayListener,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import React, { Fragment, useEffect, useState } from "react";
import airbnbIcon from "../../../assets/img/airbnblogo.png";
import airbnbRedIcon from "../../../assets/img/airbnbRedIcon.png";
import { createAction } from "../../../store/action/createAction/createAction";
import { SHOW_MODAL_SIGNIN, SHOW_MODAL_SIGNUP, } from "../../../store/types/AuthType";
import { FAKE_AVATAR } from "../../../constants/config";
import { useHistory } from "react-router";
import useStyles from "./style";
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from '@material-ui/core/styles';
import { useRouteMatch } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
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

    // scroll Y to more than 250 -> change background color from transparent to white + hide searchBar -> display appSearch + hide menu content
    // click appSearch while at Y more than 250 -> hide appSearch + display searchBar display menu content
    // clickAwayListener -> listen to the event of clicking outside appBar component in order to hide the menu content
    // *Note: clickAwayListener is only active when window.innerHeight is more than 100


    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('xl'))

    const [scroll, setScroll] = useState(false);
    const [displaySearchBar, setDisplaySearchBar] = useState(true)
    const [listPageDisplaySearchBar, setListPageDisplaySearchBar] = useState(false);

    const handleClickAwayListener = () => {
        if (homepageRoute) {
            if (!scroll) return;
            setDisplaySearchBar(false)
        }
        if (listpageRoute) {
            setListPageDisplaySearchBar(false)
        }

    }

    useEffect(() => {
        if (scroll) {
            setDisplaySearchBar(false)
        } else {
            setDisplaySearchBar(true)
        }
    }, [scroll])

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
    console.log('matchUrl', matchUrl)
    const homepageRoute = matchUrl.url === "/";
    const listpageRoute = matchUrl.url === "/list";
    const detailpageRoute = matchUrl.url === "detail";

    const classes = useStyles({ scroll, displaySearchBar, homepageRoute, listpageRoute, detailpageRoute, listPageDisplaySearchBar });

    return (
        <Fragment>
            {/* AppBar */}
            <ClickAwayListener onClickAway={() => handleClickAwayListener()}>
                <AppBar position="fixed" elevation={0}
                    className={`${homepageRoute && classes.root} ${listpageRoute && classes.listRoot}`} >
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
                                    <Box className={classes.navbar__content__search}
                                        onClick={() => setDisplaySearchBar(prevState => !prevState)}>

                                        <button className={classes.navbar__search__button}>
                                            <h3 className={classes.navbar__search__button__title}>Bắt đầu tìm kiếm</h3>
                                            <div className={classes.navbar__search__button__wrap}>
                                                <SearchIcon className={classes.navbar__search__button__icon} />
                                            </div>
                                        </button>


                                    </Box>
                                ) : (
                                    <Box
                                        className={classes.navbar__content__menu}>
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
                                        className={`${classes.navbar__content__menu} ${classes.list__navbar__content__menu}`}>
                                        <span>Nơi ở</span>
                                        <span>Trải nghiệm</span>
                                        <span>Trải nghiệm trực tuyến</span>
                                    </Box>

                                ) : (
                                    <Box className={`${classes.navbar__content__search}${classes.list__navbar__content__search}`}
                                        onClick={() => setListPageDisplaySearchBar(prevState => !prevState)}>

                                        <div className={classes.list__navbar__search__wrapper}>
                                            <button className={classes.list__navbar__button}>
                                                <span>Sài Gòn</span>
                                            </button>
                                            <span className={classes.list__navbar__dash}></span>
                                            <button className={classes.list__navbar__button}>
                                                <span>17 thg10 - 15 thg11</span>
                                            </button>
                                            <span className={classes.list__navbar__dash}></span>
                                            <button className={classes.list__navbar__button}>
                                                <span>2 khách</span>
                                                <div className={classes.navbar__search__button__wrap}>
                                                    <SearchIcon className={classes.navbar__search__button__icon} />
                                                </div>
                                            </button>
                                        </div>
                                    </Box>
                                )}
                            </>
                        )}


                        <div className={`${classes.navbar__content__left} 
                        ${classes.list__navbar__content__left}`}>
                            <Button className={`${classes.navbar__content__left__button} ${classes.list__navbar__content__left__button}`}>
                                Trở thành chủ nhà
                            </Button>
                            <IconButton className={`${classes.language__wrapper} ${classes.list__language__wrapper}`}>
                                <LanguageIcon className={`${classes.language__icon} ${classes.list__language__icon}`} />
                            </IconButton>
                            <Chip
                                onClick={handleOpenMenu}
                                className={`${classes.chip} ${classes.list__chip}`}
                                size="medium"
                                icon={<MenuOutlinedIcon fontSize="small" />}
                                label={<AccountCircleOutlinedIcon fontSize="medium" />}
                                variant="outlined"
                            />
                        </div>

                    </Toolbar>

                    <Box className={`${homepageRoute && classes.searchBar} ${listpageRoute && classes.list__searchBar}`}>
                        <SearchBar isDesktop={isDesktop} />
                    </Box>

                </AppBar>
            </ClickAwayListener>

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
