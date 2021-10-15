import { Menu, MenuItem } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { DesktopDateRangePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { vi } from 'date-fns/locale';
import queryString from 'query-string';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import manageLocationApi from '../../../../api/manageLocationApi';
import useStyles from './style';


// Data from API 9 
// {
//     "_id": "61627836dd5f72001d8686eb",
//     "name": "Khu du lịch sinh thái Hồng Hào",
//     "province": "Bến tre",
//     "country": "viet nam",
//     "valueate": 8,
//     "__v": 0
// },


const SearchBar = ({ isDesktop }) => {
    // const [clickSearchLocation, setClickSearchLocation] = useState(false)

    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);
    // const [focusedInput, setFocusedInput] = useState(null);
    // const handleDatesChange = ({ startDate, endDate }) => {
    //     setStartDate(startDate);
    //     setEndDate(endDate);
    // };
    const history = useHistory();
    const location = useLocation();


    const [locationList, setLocationList] = useState([]);

    const [bookingTime, setBookingTime] = useState([null, null]);
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



    useEffect(() => {
        (async () => {
            const response = await manageLocationApi.getAll();
            setLocationList(response)
        })()
    }, []);

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        options: locationList,
        id: 'useAutocomplete',
        getOptionLabel: (option) => (option.province && option.name),
    });

    const inputValue = ({ ...getInputProps() }).value;

    const locationInputValue = locationList.find((location) => location.name === inputValue);
    const locationId = locationInputValue?._id;

    const queryParams = {
        _checkIn: bookingTime[0],
        _checkOut: bookingTime[1],
        _adult: numbers.adult,
        _baby: numbers.baby,
        _toddler: numbers.toddler,
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        history.push({
            pathname: `/list/${locationId}`,
            search: queryString.stringify(queryParams)
        })
    };

    const classes = useStyles();

    return (
        <Fragment>
            <form className={classes.root} onSubmit={(e) => handleSearchSubmit(e)}>

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
                                            {option.province}, {option.name}
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
                            value={bookingTime}
                            onChange={(newValue) => {
                                setBookingTime(newValue);
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