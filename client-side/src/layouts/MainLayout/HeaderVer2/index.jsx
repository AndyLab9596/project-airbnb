import {
    AppBar, useMediaQuery
} from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import React from 'react';
import { useRouteMatch } from 'react-router';
import airbnbIcon from "../../../assets/img/airbnblogo.png";
import airbnbRedIcon from "../../../assets/img/airbnbRedIcon.png";
import useStyles from './style';


const HeaderVer2 = () => {
    const pathName = useRouteMatch();
    const homePagePath = pathName.path === "/";
    const listPagePath = pathName.path === "/list/:locationId";
    const detailPagePath = pathName.path === "/detail/:roomId";
    const payPagePath = pathName.path === "/pay/:roomId";
    const profilePagePath = pathName.path === "/profile/:personId";

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

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
                    <div className={classes.imageIcon}>
                        <a href="/">
                            <img
                                src={isDesktop ? airbnbIcon : airbnbRedIcon}
                                alt="icon"
                                className={classes.imageIcon__img}
                            />
                        </a>
                    </div>


                </div>


            </AppBar>
        </div>
    );
};

export default HeaderVer2;