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

    // const [anchorEl, setAnchorEl] = useState(null);
    // const windowWidth = window.innerWidth;
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('xl'))


    // const handleOpenMenu = (event) => {
    //     setAnchorEl(event.currentTarget)
    // };

    // const [scroll, setScroll] = useState(false);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScroll(window.scrollY > 100);
    //     };

    //     const handleCloseMenu = () => {
    //         setAnchorEl(null);
    //     }
    // }, []);

    const [scroll, setScroll] = useState(false);
    const [displaySearchBar, setDisplaySearchBar] = useState(true)

    const handleClickAwayListener = () => {
        if (!scroll) return;
        setDisplaySearchBar(false)
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



    const classes = useStyles({ scroll, displaySearchBar });

    return (
        <Fragment>
            {/* AppBar */}
            <ClickAwayListener onClickAway={() => handleClickAwayListener()}>
                <AppBar position="fixed" elevation={0} className={classes.root} >
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

                        <div className={classes.navbar__content__left}>
                            <Button className={classes.navbar__content__left__button}>Trở thành chủ nhà</Button>
                            <IconButton className={classes.language__wrapper}>
                                <LanguageIcon className={classes.language__icon} />
                            </IconButton>
                            <Chip
                                onClick={handleOpenMenu}
                                className={classes.chip}
                                size="medium"
                                icon={<MenuOutlinedIcon fontSize="small" />}
                                label={<AccountCircleOutlinedIcon fontSize="medium" />}
                                // onClick={handleClick}
                                // onDelete={handleDelete}
                                variant={scroll ? 'outlined' : 'default'}
                                color="#ffffff"
                            />
                        </div>

                    </Toolbar>

                    <Box className={classes.searchBar}>
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
