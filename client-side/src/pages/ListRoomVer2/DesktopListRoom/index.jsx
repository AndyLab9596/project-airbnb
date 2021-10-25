import { Pagination } from '@material-ui/lab';
import queryString from 'query-string';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router';
import Card from '../Card'
import Mapbox from '../Mapbox';
import OptionsDialog from '../OptionsDialog';
import PriceMenuFilter from '../PriceMenuFilter';
import SkeletonCard from '../SkeletonCard';
import useStyles from "./style";
import useFetch from '../useFetch'
import DehazeIcon from '@material-ui/icons/Dehaze';
import MapIcon from '@material-ui/icons/Map';

const DesktopListRoom = () => {

    const dispatch = useDispatch();
    const param = useParams();
    const locationId = param.locationId;
    const history = useHistory()

    const { loading, data } = useFetch(locationId);


    const [rentRooms, setRentRooms] = useState([]);

    const [page, setPage] = useState(1);

    const handlePageChange = (event, page) => {
        setPage(page)
    }


    // Params

    const location = useLocation();
    const [roomCoors, setRoomCors] = useState([]);
    const [locationCoors, setLocationCoors] = useState({})
    const queryParams = useMemo(() => {
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
    const province = queryParams._location;

    const handleChangePage = (roomId) => {

        const pickedRoom = roomCoors.find((room => room._id === roomId));

        history.push({
            pathname: `/detail/${roomId}`,
            search: queryString.stringify({
                ...queryParams,
                _roomLatitude: pickedRoom.latitude, _roomLongitude: pickedRoom.longitude,
                _locationLatitude: locationCoors.latitude, _locationLongitude: locationCoors.longitude
            }),
        })
    }

    // Filter
    const [priceValue, setPriceValue] = useState([0, 1000000]);

    const handleChangePriceValue = (event, newValue) => {
        setPriceValue(newValue);

    };

    const handleChangeInputField = (event) => {
        setPriceValue(event.target.value === '' ? '' : Number(event.target.value))
    };

    const initialFilter = {
        guests: 0,
        bedRoom: 0,
        bath: 0,
        elevator: false,
        hotTub: false,
        pool: false,
        indoorFireplace: false,
        dryer: false,
        gym: false,
        kitchen: false,
        wifi: false,
        heating: false,
        cableTV: false,
    }


    const [filter, setFilter] = useState(initialFilter);

    const filtered = rentRooms.filter((item) => {

        if (Object.keys(filter).every((p) => item[p] >= filter[p])) {
            return true;
        }
    })

    const finalFiltered = filtered.filter((item) => {
        if (item.price > priceValue[0] && item.price < priceValue[1]) {
            return true
        }
    })

    const resetFilter = () => {
        setFilter(initialFilter)
    }

    // Button transform between map and content:
    const [transform, setTransform] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (loading) return

        setRentRooms(data[page - 1])

    }, [loading, page])

    const classes = useStyles({ transform });


    return (
        <Fragment>
            <div className={classes.root}>

                {/* Content */}
                <div className={classes.content}>
                    <div className={classes.content__header}>
                        <p>Hơn 300 chỗ ở</p>
                        <h3>
                            Chỗ ở tại thành phố {province}
                        </h3>
                    </div>

                    {/* Filter */}
                    <div className={classes.filter}>
                        <div className={classes.filter__wrapper}>
                            <PriceMenuFilter
                                filter={filter}
                                setFilter={setFilter}
                                priceValue={priceValue}
                                setPriceValue={setPriceValue}
                                handleChangePriceValue={handleChangePriceValue}
                                handleChangeInputField={handleChangeInputField}
                            />
                            <OptionsDialog
                                resetFilter={resetFilter}
                                filter={filter}
                                setFilter={setFilter}
                            />
                        </div>

                    </div>

                    {/* List Rooms */}

                    <div className={classes.cards}>
                        {loading ? <SkeletonCard length={4} /> :
                            <Card handleChangePage={handleChangePage}
                                queryParams={queryParams}
                                finalFiltered={finalFiltered}

                            />}


                        {/* Pagination */}
                        <div className={classes.pagination__wrapper}>
                            <div className={classes.pagination__topLine}>
                                <div></div>
                            </div>
                            <Pagination
                                className={classes.pagination}
                                boundaryCount={1}
                                defaultPage={1}
                                count={data?.length}
                                page={page}
                                onChange={handlePageChange}
                                color="standard" />
                        </div>

                    </div>

                </div>

                {/* Map */}
                <div className={classes.map}>
                    <div className={classes.mapBox}>
                        <Mapbox
                            setLocationCoors={setLocationCoors}
                            setRoomCors={setRoomCors}
                            handleChangePage={handleChangePage}
                            province={province}
                            rentRooms={rentRooms} />
                    </div>
                </div>

                {/* Button transform map and content tablet screen */}

            </div>
            <div className={classes.button__tablet__wrapper} >
                <button className={classes.button__tablet__item} onClick={() => setTransform(state => !state)}>
                    {transform ? (
                        <>
                            <span>
                                Hiện danh sách
                            </span>
                            <DehazeIcon />
                        </>
                    ) : (

                        <>
                            <span>
                                Hiện bản đồ
                            </span>
                            <MapIcon />
                        </>
                    )}
                </button>
            </div>
        </Fragment>

    );
};

export default DesktopListRoom;