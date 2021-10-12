import { Menu, MenuItem, TextField } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import { vi } from 'date-fns/locale';
// import {} from 'moment/locale/vi'
import React, { Fragment, useState } from 'react';
import useStyles from './style';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { DesktopDateRangePicker } from '@mui/lab';

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


const SearchBar = ({ isDesktop }) => {
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

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    const [value, setValue] = useState([null, null]);
    const windowWidth = window.innerWidth;

    const menuLeftAnchor = isDesktop ? windowWidth - 300 : windowWidth - 100;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const [numbers, setNumbers] = useState({
        adult: 0,
        baby: 0,
        toddler: 0,
    })

    const addAdult = () => {
        if (numbers.adult > 15) return;
        setNumbers({ ...numbers, adult: numbers.adult + 1 })
    }

    const minusAdult = () => {
        if (numbers.adult < 1) return;
        setNumbers({ ...numbers, adult: numbers.adult - 1 })
    }

    const addBaby = () => {
        if (numbers.baby > 4) return;

        if (numbers.adult === 0) {
            setNumbers({ ...numbers, baby: numbers.baby + 1, adult: numbers.adult + 1 })
        } else {
            setNumbers({ ...numbers, baby: numbers.baby + 1 })
        }
    }

    const minusBaby = () => {
        if (numbers.baby < 1) return;
        setNumbers({ ...numbers, baby: numbers.baby - 1 })
    }

    const addToddler = () => {
        if (numbers.toddler > 4) return;

        if (numbers.adult === 0) {
            setNumbers({ ...numbers, toddler: numbers.toddler + 1, adult: numbers.adult + 1 })
        } else {
            setNumbers({ ...numbers, toddler: numbers.toddler + 1 })
        }
    }

    const minusToddler = () => {
        if (numbers.toddler < 1) return;
        setNumbers({ ...numbers, toddler: numbers.toddler - 1 })
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
                                        >
                                            {option.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>

                </div>

                {/* Date picker */}
                <div className={classes.datePicker}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi} >
                        <DesktopDateRangePicker
                            disablePast
                            className={classes.dateRangePicker}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <div className={classes.datePicker__el}>
                                        <p className={classes.datePicker__label}>
                                            Nhận phòng
                                        </p>
                                        <input
                                            ref={startProps.inputRef}
                                            {...startProps.inputProps}
                                            className={classes.datePicker__input}
                                            placeholder="Thêm ngày"
                                        />
                                    </div>
                                    <div className={classes.datePicker__el}>
                                        <p className={classes.datePicker__label}>
                                            Trả phòng
                                        </p>
                                        <input
                                            ref={endProps.inputRef}
                                            {...endProps.inputProps}
                                            className={classes.datePicker__input}
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
                            <p className={classes.customer__text}>
                                {numbers.adult === 0 ? 'Thêm khách' : `${numbers.adult + numbers.baby} khách, ${numbers.toddler} em bé`}
                            </p>
                        </div>
                        <button className={classes.formControl__button}>
                            <SearchIcon className={classes.formControl__button__icon} />
                        </button>
                    </div>
                    <Menu
                        id="simple-menu"
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 160, left: menuLeftAnchor }}
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
                                    <button className={classes.count__action__button} onClick={() => minusAdult()} >
                                        <span>-</span>
                                    </button>
                                    <span className={classes.count__action__display}>
                                        {numbers.adult}
                                    </span>
                                    <button className={classes.count__action__button} onClick={() => addAdult()}>
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
                                    <button className={classes.count__action__button} onClick={() => minusBaby()}>
                                        <span>-</span>
                                    </button>
                                    <span className={classes.count__action__display}>{numbers.baby}</span>
                                    <button className={classes.count__action__button} onClick={() => addBaby()}>
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
                                    <button className={classes.count__action__button} onClick={() => minusToddler()}>
                                        <span>-</span>
                                    </button>
                                    <span className={classes.count__action__display}>{numbers.toddler}</span>
                                    <button className={classes.count__action__button} onClick={() => addToddler()}>
                                        <span>+</span>
                                    </button>
                                </div>
                            </div>
                        </MenuItem>


                    </Menu>
                </div>

            </form>

        </Fragment >
    );
};

export default SearchBar;