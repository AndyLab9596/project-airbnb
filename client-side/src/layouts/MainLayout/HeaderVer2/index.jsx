import {
    AppBar, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, useMediaQuery
} from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { useDispatch } from "react-redux";
import { createAction } from "../../../store/action/createAction/createAction";
import airbnbIcon from "../../../assets/img/airbnblogo.png";
import airbnbRedIcon from "../../../assets/img/airbnbRedIcon.png";
import useStyles from './style';


// Icons
import LanguageIcon from "@material-ui/icons/Language";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { SHOW_MODAL_SIGNIN, SHOW_MODAL_SIGNUP } from '../../../store/types/AuthType';
import SearchBarVer2 from './SearchBarVer2';


const HeaderVer2 = () => {

    // Path
    const pathName = useRouteMatch();
    const homePagePath = pathName.path === "/";
    const listPagePath = pathName.path === "/list/:locationId";
    const detailPagePath = pathName.path === "/detail/:roomId";
    const payPagePath = pathName.path === "/pay/:roomId";
    const profilePagePath = pathName.path === "/profile/:personId";



    const dispatch = useDispatch()
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

    // Menu function
    const [openMenu, setOpenMenu] = useState(false);
    const anchorRef = React.useRef(null);
    const handleToggleMenu = () => {
        setOpenMenu(state => !state)
    };
    const handleCloseMenu = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpenMenu(false);
    }

    // Authentication
    const ShowModalSignUp = () => {
        setOpenMenu(false);
        dispatch(createAction(SHOW_MODAL_SIGNUP));
    };
    const ShowModalSignIn = () => {
        setOpenMenu(false);
        dispatch(createAction(SHOW_MODAL_SIGNIN));
    };

    // Scroll Effect
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

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar
                // eslint-disable-next-line no-sequences
                elevation={0}
                className={clsx(
                    classes.appBar,
                    { [classes.appBarFixed]: homePagePath, }
                )}
            >
                <div className={classes.wrapper}>

                    {/* Icons Image */}
                    <div className={classes.imageIcon}>
                        <a href="/">
                            <img
                                src={isDesktop ? airbnbIcon : airbnbRedIcon}
                                alt="icon"
                                className={classes.imageIcon__img}
                            />
                        </a>
                    </div>


                    {/* List navigation */}
                    <div className={classes.navigation}>
                        <ul className={classes.navigation__list}>
                            <li className={classes.navigation__list__item}>
                                <a href="/">
                                    <span>Nơi ở</span>
                                </a>
                            </li>
                            <li className={classes.navigation__list__item}>
                                <a href="/">
                                    <span>Trải nghiệm</span>
                                </a>
                            </li>
                            <li className={classes.navigation__list__item}>
                                <a href="/">
                                    <span>Trải nghiệm trực tuyến</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Profile section */}
                    <div className={classes.profile}>

                        <button className={classes.profile__btn}>
                            Trở thành chủ nhà
                        </button>

                        <button className={classes.profile__language}>
                            <LanguageIcon fontSize="small" />
                        </button>

                        <button
                            className={classes.profile__menuToggle}
                            ref={anchorRef}
                            onClick={handleToggleMenu}
                        >
                            <MenuOutlinedIcon fontSize="small" />
                            <AccountCircleIcon fontSize="medium"
                                className={classes.profile__menuToggle__account}
                            />
                        </button>
                    </div>
                </div>

                {/* Menu */}
                <Popper open={openMenu} anchorEl={anchorRef.current} role={undefined} transition disablePortal
                    className={classes.popper}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper className={classes.menu}>
                                <ClickAwayListener onClickAway={handleCloseMenu}>
                                    <MenuList autoFocusItem={openMenu} id="menu-list-grow" className={classes.menuList}>
                                        <MenuItem
                                            className={classes.menuItem__signUp}
                                            onClick={ShowModalSignUp}
                                        >
                                            Đăng Ký

                                        </MenuItem>
                                        <MenuItem className={classes.menuItem}
                                            onClick={ShowModalSignIn}
                                        >
                                            Đăng nhập
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem__dash} >
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            Cho thuê nhà
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            Tổ chức trải nghiệm
                                        </MenuItem>
                                        <MenuItem className={classes.menuItem} >
                                            Trải nghiệm
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

                <div className={classes.searchBar}>
                    <SearchBarVer2 />
                </div>

            </AppBar>




        </div>
    );
};

export default HeaderVer2;