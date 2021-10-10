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
import useAutocomplete from '@material-ui/lab/useAutocomplete';



const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
]


const SearchBar = () => {
    const classes = useStyles();

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: top100Films,
        getOptionLabel: (option) => option.title,
    });

    const [clickSearchLocation, setClickSearchLocation] = useState(false)


    return (
        <Fragment>
            <form className={classes.root}>

                {/* Location */}
                <div className={classes.locationSearch}>
                    <div className={classes.locationSearch__wrapper} {...getRootProps()}>
                        <label htmlFor="" className={classes.locationSearch__label} {...getInputLabelProps()}>Địa điểm</label>
                        <div>
                            <input className={classes.locationSearch__input} type="text" placeholder="Bạn sắp đi đâu?" {...getInputProps()} />
                        </div>
                    </div>

                    <div className={classes.locationSearch__dropdown}>
                        {groupedOptions.length > 0 ? (
                            <ul className={classes.locationSearch__lists} {...getListboxProps()}>
                                {groupedOptions.map((option, index) => (
                                    <li {...getOptionProps({ option, index })} className={classes.locationSearch__list}>
                                        {option.title}
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>

                </div>

                {/* Date picker */}
                <div className={classes.datePicker}>

                    <div className={classes.datePicker__el}>
                        <div className={classes.datePicker__wrapper}>
                            <p className={classes.datePicker__el__title}>Nhận phòng</p>
                            <p className={classes.datePicker__el__text}>Thêm ngày</p>
                        </div>
                    </div>

                    <div className={classes.datePicker__el}>
                        <div className={classes.datePicker__wrapper}>
                            <p className={classes.datePicker__el__title}>Trả phòng</p>
                            <p className={classes.datePicker__el__text}>Thêm ngày</p>
                        </div>
                    </div>
                </div>

                {/* Customer count & search button */}
                <div className={classes.customer}>
                    <div className={classes.customer__el}>
                        <div className={classes.customer__el__content}>
                            <p className={classes.customer__title}>Khách</p>
                            <p className={classes.customer__text}>Thêm khách</p>
                        </div>
                        <button className={classes.formControl__button}>
                            <SearchIcon className={classes.formControl__button__icon} />
                        </button>
                    </div>
                </div>
            </form>

        </Fragment>
    );
};

export default SearchBar;