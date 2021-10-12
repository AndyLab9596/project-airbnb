import {
    AppBar,
    Box,
    Chip,
    IconButton,
    Menu,
    MenuItem,
    Toolbar
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import React, { Fragment, useEffect, useState, useRef } from "react";
import airbnbIcon from "../../../assets/img/airbnblogo.png";
import SearchBar from './SearchBar/index'
import useStyles from "./style";
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const Header = () => {

    // scroll Y to more than 250 -> change background color from transparent to white + hide searchBar -> display appSearch + hide menu content
    // click appSearch while at Y more than 250 -> hide appSearch + display searchBar display menu content
    // clickAwayListener -> listen to the event of clicking outside appBar component in order to hide the menu content
    // *Note: clickAwayListener is only active when window.innerHeight is more than 100

    const [anchorEl, setAnchorEl] = useState(null);
    const windowWidth = window.innerWidth;

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

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
                        <Box style={{ minWidth: "250px" }}>
                            <a href="/" target="_blank" rel="noreferrer">
                                <img
                                    src={airbnbIcon}
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
                                className={scroll
                                    ? `${classes.navbar__content__menu} ${classes.navbar__content__menu__scroll}`
                                    : `${classes.navbar__content__menu}`}>
                                <span>Nơi ở</span>
                                <span>Trải nghiệm</span>
                                <span>Trải nghiệm trực tuyến</span>
                            </Box>
                        )}

                        <div className={scroll
                            ? `${classes.navbar__content__left} ${classes.navbar__content__left__scroll}`
                            : `${classes.navbar__content__left}`}>
                            <span>Trở thành chủ nhà</span>
                            <IconButton className={classes.language__icon}>
                                <LanguageIcon fontSize="small" />
                            </IconButton>
                            <Chip
                                onClick={handleOpenMenu}
                                className={classes.chip}
                                size="medium"
                                icon={<MenuOutlinedIcon fontSize="small" />}
                                label={<AccountCircleOutlinedIcon fontSize="medium" />}
                                // onClick={handleClick}
                                // onDelete={handleDelete}
                                variant="default"
                                color="#ffffff"
                            />
                        </div>

                    </Toolbar>


                    {displaySearchBar && (
                        <Box className={classes.searchBar}>
                            <SearchBar />
                        </Box>
                    )}

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
                <MenuItem className={classes.menu__items}>Đăng nhập</MenuItem>
                <MenuItem className={classes.menu__items}>Đăng Ký</MenuItem>
                <MenuItem className={classes.menu__items}>Cho thuê nhà</MenuItem>
                <MenuItem className={classes.menu__items}>Tổ chức trải nghiệm</MenuItem>
                <MenuItem className={classes.menu__items}>Trợ giúp</MenuItem>
            </Menu>
        </Fragment>
    );
};

export default Header;
