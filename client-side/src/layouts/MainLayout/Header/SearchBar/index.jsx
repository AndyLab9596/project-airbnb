import { Menu, MenuItem } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { vi } from 'date-fns/locale';
// import {} from 'moment/locale/vi'
import React, { Fragment, useState } from 'react';
import useStyles from './style';


const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'Pulp Fiction', year: 1994 },
]


const SearchBar = () => {
    const classes = useStyles();
    // const viMoment = moment.locale('vi')
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

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    const [value, setValue] = useState([null, null]);
    const windowWidth = window.innerWidth;
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const [countAdult, setCountAdult] = useState(0);
    const [countBaby, setCountBaby] = useState(0);

    const [countToddler, setCountToddler] = useState(0);

    const handleAddAdult = () => {
        if (countAdult > 15) return;
        setCountAdult(countAdult + 1)
    }
    const handleMinusAdult = () => {
        if (countAdult < 1) return;
        setCountAdult(countAdult - 1)
    }

    const handleAddBaby = () => {
        if (countBaby > 4) return;
        setCountBaby(countBaby + 1)
    }
    const handleMinusBaby = () => {
        if (countBaby < 1) return;
        setCountBaby(countBaby - 1)
    }

    const handleAddToddler = () => {
        if (countToddler > 4) return;
        setCountToddler(countToddler + 1)
    }
    const handleMinusToddler = () => {
        if (countToddler < 1) return;
        setCountToddler(countToddler - 1)
    }




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
                                    <li {...getOptionProps({ option, index })}
                                        className={classes.locationSearch__list}>
                                        <div className={classes.locationSearch__lists__icon}>
                                            <LocationOnOutlinedIcon className={classes.locationSearch__lists__icon__item} />
                                        </div>
                                        <span
                                            className={classes.locationSearch__lists__title}
                                        >{option.title}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>

                </div>

                {/* Date picker */}
                <div className={classes.datePicker}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi} >
                        <DateRangePicker
                            disablePast
                            className={classes.dateRangePicker}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <div>
                                        <label htmlFor="" className={classes.locationSearch__label}>
                                            Nhận phòng
                                        </label>
                                        <input
                                            ref={startProps.inputRef}
                                            {...startProps.inputProps}
                                            className={classes.locationSearch__input}
                                            placeholder="Thêm ngày"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="" className={classes.locationSearch__label}>
                                            Trả phòng
                                        </label>
                                        <input
                                            ref={endProps.inputRef}
                                            {...endProps.inputProps}
                                            className={classes.locationSearch__input}
                                            placeholder="Thêm ngày"
                                        />
                                    </div>
                                </React.Fragment>
                            )}
                        />
                    </LocalizationProvider>
                </div>

                {/* Customer count & search button */}
                <div className={classes.customer}>
                    <div className={classes.customer__el} onClick={handleOpenMenu}>
                        <div className={classes.customer__el__content}>
                            <p className={classes.customer__title}>Khách</p>
                            <p className={classes.customer__text}>Thêm khách</p>
                        </div>
                        <button className={classes.formControl__button}>
                            <SearchIcon className={classes.formControl__button__icon} />
                        </button>
                    </div>
                    <Menu
                        id="simple-menu"
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 140, left: windowWidth - 270 }}
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
                                padding: "16px 32px",
                                borderRadius: "32px",
                                backgroundColor: '#fff',
                                boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)',
                                maxHeight: 'calc(100vh -220px)',
                                overflowX: 'hidden',
                                overflowY: 'auto'
                            },
                        }}
                    >
                        <MenuItem className={classes.menu__items}>
                            <div className={classes.count}>
                                <div className={classes.count__content}>
                                    <h6>Nguời lớn</h6>
                                    <p>Từ 13 tuổi trở lên</p>
                                </div>
                                <div className={classes.count__action}>
                                    <button disabled={countAdult < 1} className={classes.count__action__button} onClick={() => handleMinusAdult()} >
                                        <span>-</span>
                                    </button>
                                    <span className={classes.count__action__display}>
                                        {countAdult}
                                    </span>
                                    <button className={classes.count__action__button} onClick={() => handleAddAdult()}>
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                        </MenuItem>

                        <MenuItem className={classes.menu__items}>
                            <div className={classes.count}>
                                <div className={classes.count__content}>
                                    <h6>Trẻ em</h6>
                                    <p>Độ tuổi 2-12</p>
                                </div>
                                <div className={classes.count__action}>
                                    <button className={classes.count__action__button} onClick={() => handleMinusBaby()}>
                                        <span>-</span>
                                    </button>
                                    <span className={classes.count__action__display}>{countBaby}</span>
                                    <button className={classes.count__action__button} onClick={() => handleAddBaby()}>
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                        </MenuItem>

                        <MenuItem className={classes.menu__items}>
                            <div className={classes.count}>
                                <div className={classes.count__content}>
                                    <h6>Em bé</h6>
                                    <p>Dưới 2 tuổi</p>
                                </div>
                                <div className={classes.count__action}>
                                    <button disabled={countToddler < 1} className={classes.count__action__button} onClick={() => handleMinusToddler()}>
                                        <span>-</span>
                                    </button>
                                    <span className={classes.count__action__display}>{countToddler}</span>
                                    <button className={classes.count__action__button} onClick={() => handleAddToddler()}>
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>

            </form>

        </Fragment>
    );
};

export default SearchBar;