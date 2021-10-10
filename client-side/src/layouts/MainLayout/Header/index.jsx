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
import SearchBar from "./SearchBar";

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const windowWidth = window.innerWidth;

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
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
                        className={scroll
                            ? `${classes.navbar__content__menu} ${classes.navbar__content__menu__scroll}`
                            : `${classes.navbar__content__menu}`}>
                        <span>Nơi ở</span>
                        <span>Trải nghiệm</span>
                        <span>Trải nghiệm trực tuyến</span>
                    </Box>

                    <div className={scroll ? `${classes.navbar__content__left} ${classes.navbar__content__left__scroll}` : `${classes.navbar__content__left}`}>
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
                <Box className={classes.searchBar}>
                    <SearchBar />
                </Box>
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
                <MenuItem className={classes.menu__items}>Đăng nhập</MenuItem>
                <MenuItem className={classes.menu__items}>Đăng Ký</MenuItem>
                <MenuItem className={classes.menu__items}>Cho thuê nhà</MenuItem>
                <MenuItem className={classes.menu__items}>Tổ chức trải nghiệm</MenuItem>
                <MenuItem className={classes.menu__items}>Trợ giúp</MenuItem>
            </Menu>

            {/* Search Bar*/}



        </Fragment>
    );
};

export default Header;
