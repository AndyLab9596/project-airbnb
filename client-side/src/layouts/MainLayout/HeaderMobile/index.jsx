import React, { Fragment, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useStyles from "./style";
import { Button } from '@material-ui/core';


const HeaderMobile = () => {

    const [show, setShow] = useState(false)
    const classes = useStyles({ show });
    return (
        <Fragment>

            <div className={classes.overlay}>
                <div className={classes.overlay__wrapper}>
                    <div className={classes.overlay__searchBar}>

                        <button className={classes.overlay__searchBar__button} onClick={() => setShow(false)} >
                            <ChevronLeftIcon />
                        </button>
                        <div className={classes.overlay__searchBar__inputField}>
                            <input type="text" placeholder="Bạn muốn đi đâu?" />

                        </div>

                    </div>
                    {/* <ChevronLeftIcon className={classes.overlay__icon} />
                    <input type="text" className={classes.overlay__input} /> */}
                </div>
            </div>

            <Fragment>
                <div className={classes.root}>
                    <div className={classes.header}>
                        <button className={classes.button} onClick={() => setShow(true)}>
                            <SearchIcon className={classes.button__icon} />
                            <span>Bạn sắp đi đâu</span>
                        </button>
                    </div>
                </div>

                <div className={classes.rootBottom}>
                    <div className={classes.headerBottom}>
                        <button className={classes.headerBottom__button}>
                            <SearchIcon className={classes.headerBottom__button__icon} />
                            <p>Khám phá</p>
                        </button>
                        <button className={classes.headerBottom__button}>
                            <FavoriteBorderIcon className={classes.headerBottom__button__icon} />
                            <p>Yêu thích</p>
                        </button>
                        <button className={classes.headerBottom__button}>
                            <AccountCircleOutlinedIcon className={classes.headerBottom__button__icon} />
                            <p>Đăng nhập</p>
                        </button>
                    </div>
                </div>
            </Fragment>

        </Fragment>
    );
};

export default HeaderMobile;