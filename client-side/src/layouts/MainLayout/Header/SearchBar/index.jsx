import { Menu } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { DesktopDateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { vi } from "date-fns/locale";
import moment from "moment";
import queryString from "query-string";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import manageLocationApi from "../../../../api/manageLocationApi";
import GuestCount from "../../../../components/GuestCount";
import useStyles from "./style";

const SearchBar = ({ isDesktop, listPageDisplaySearchBar, listpageRoute }) => {

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const receivedQueryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _location: params._location,
      _checkIn: params._checkIn,
      _checkOut: params._checkOut,
      _adult: Number.parseInt(params._adult),
      _children: Number.parseInt(params._children),
      _toddler: Number.parseInt(params._toddler),
    };
  }, [location.search]);

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
    defaultValue: receivedQueryParams._location
  });

  const inputValue = { ...getInputProps() }.value;

  const locationInputValue = locationList.find(
    (location) => location.province === inputValue
  );
  const locationId = locationInputValue?._id;

  const checkInFormatted = moment(bookingTime[0]).format("YYYY-MM-DD");
  const checkOutFormatted = moment(bookingTime[1]).format("YYYY-MM-DD");


  const queryParams = {
    _location: locationInputValue?.province || "",
    _checkIn: checkInFormatted,
    _checkOut: checkOutFormatted,
    _adult: numbers._adult,
    _children: numbers._children,
    _toddler: numbers._toddler,
  };

  const historyPush = () => {
    history.push({
      pathname: `/list/${locationId}`,
      search: queryString.stringify(queryParams),
    });
  }

  useEffect(() => {
    if (listpageRoute) {
      historyPush()
    }

  }, [listPageDisplaySearchBar])


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return
    history.push({
      pathname: `/list/${locationId}`,
      search: queryString.stringify(queryParams),
    });

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
              // defaultValue={receivedQueryParams._location}
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
