import { Button, FilledInput, FormControl, FormHelperText, Input, InputLabel, OutlinedInput, TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import DirectionsIcon from '@material-ui/icons/Directions';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { Fragment, useState } from 'react';
import useStyles from './style';


const SearchBar = () => {
    const classes = useStyles();

    const [clickSearchLocation, setClickSearchLocation] = useState(false)


    return (
        <Fragment>
            <form className={classes.root} noValidate autoComplete="off">
                <div className={classes.formControl}>
                    <label htmlFor="" className={classes.formControl__label}>Địa điểm</label>
                    <input placeholder="Bạn sắp đi đâu?" type="text" className={classes.formControl__input} />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="" className={classes.formControl__label}>Nhận Phòng</label>
                    <input placeholder="Thêm ngày" type="text" className={classes.formControl__input} />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="" className={classes.formControl__label}>Trả Phòng</label>
                    <input placeholder="Thêm ngày" type="text" className={classes.formControl__input} />
                </div>
                <div className={classes.formControl__lastEl}>
                    <div className={classes.lastEl__right}>
                        <p>Khách</p>
                        <span>Thêm khách</span>
                    </div>
                    <div>
                        <button className={classes.formControl__button}>
                            <SearchIcon className={classes.formControl__button__icon} />
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <h3>Mọi lúc, Mọi nơi</h3>
            </div>
        </Fragment>
    );
};

export default SearchBar;