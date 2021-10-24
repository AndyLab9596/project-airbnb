import { Menu, MenuItem } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { DesktopDateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { vi } from "date-fns/locale";
import moment from "moment";
import queryString from "query-string";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import manageLocationApi from "../../../../api/manageLocationApi";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../../../store/action/createAction/createAction";
import { SEARCH_RESULT } from "../../../../store/types/SearchType";
import GuestCount from "../../../../components/GuestCount";

// Data from API 9
// {
//     "_id": "61627836dd5f72001d8686eb",
//     "name": "Khu du lịch sinh thái Hồng Hào",
//     "province": "Bến tre",
//     "country": "viet nam",
//     "valueate": 8,
//     "__v": 0
// },

const SearchBar = ({ isDesktop, setSearchBarValue }) => {
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
  const dispatch = useDispatch();

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
    _adult: 0,
    _children: 0,
    _toddler: 0,
  });

  useEffect(() => {
    (async () => {
      const response = await manageLocationApi.getAll();
      setLocationList(response);
    })();
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
    id: "useAutocomplete",
    getOptionLabel: (option) => option.province,
  });

  const inputValue = { ...getInputProps() }.value;

  const locationInputValue = locationList.find(
    (location) => location.province === inputValue
  );
  const locationId = locationInputValue?._id;

  const checkInFormatted = moment(bookingTime[0]).format("Do MMM");
  const checkOutFormatted = moment(bookingTime[1]).format("Do MMM");

  const searchBarValue = {
    location: locationInputValue,
    checkIn: checkInFormatted,
    checkOut: checkOutFormatted,
    guest: numbers._adult + numbers._childrend,
  };

  const queryParams = {
    _checkIn: moment(bookingTime[0]).format("YYYY-MM-DD"),
    _checkOut: moment(bookingTime[0]).format("YYYY-MM-DD"),
    _adult: numbers._adult,
    _children: numbers._children,
    _toddler: numbers._toddler,
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createAction(SEARCH_RESULT, searchBarValue));
      history.push({
        pathname: `/list/${locationId}`,
        search: queryString.stringify(queryParams),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();

  return (
    <Fragment>
      <form className={classes.root} onSubmit={(e) => handleSearchSubmit(e)}>
        {/* Location */}
        <div className={classes.locationSearch}>
          <div className={classes.locationSearch__wrapper} {...getRootProps()}>
            <label
              htmlFor=""
              className={classes.locationSearch__label}
              {...getInputLabelProps()}
            >
              Địa điểm
            </label>
            <div>
              <input
                className={classes.locationSearch__input}
                type="text"
                placeholder="Bạn sắp đi đâu?"
                {...getInputProps()}

              />
            </div>
          </div>

          <div className={classes.locationSearch__dropdown}>
            {groupedOptions.length > 0 ? (
              <ul
                className={classes.locationSearch__lists}
                {...getListboxProps()}
              >
                {groupedOptions.map((option, index) => (
                  <li
                    {...getOptionProps({ option, index })}
                    className={classes.locationSearch__list}
                  >
                    <div className={classes.locationSearch__lists__icon}>
                      <LocationOnOutlinedIcon
                        className={classes.locationSearch__lists__icon__item}
                      />
                    </div>
                    <span className={classes.locationSearch__lists__title}>
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
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi}>
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
                    <p className={classes.datePicker__label}>Nhận phòng</p>
                    <input
                      ref={startProps.inputRef}
                      {...startProps.inputProps}
                      className={classes.datePicker__input}
                      placeholder="Thêm ngày"
                    />
                  </div>
                  <div className={classes.datePicker__el}>
                    <p className={classes.datePicker__label}>Trả phòng</p>
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
          <div className={classes.customer__el}>
            <div
              className={classes.customer__el__content}
              onClick={handleOpenMenu}
            >
              <p className={classes.customer__title}>Khách</p>
              <p className={classes.customer__text}>
                {numbers._adult === 0 ? (
                  "Thêm khách"
                ) : (
                  <>
                    {numbers._adult + numbers._children} khách
                    {numbers._toddler !== 0
                      ? `, ${numbers._toddler} em bé`
                      : null}
                  </>
                )}
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
                backgroundColor: "#fff",
                boxShadow: "0px 6px 20px rgb(0 0 0 / 20%)",
                maxHeight: "calc(100vh -220px)",
                overflowX: "hidden",
                overflowY: "auto",
              },
            }}
          >
            <GuestCount numbersFilter={numbers} setNumbersFilter={setNumbers} />
          </Menu>
        </div>
      </form>
    </Fragment>
  );
};

export default SearchBar;
