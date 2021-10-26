import React, { useState, useEffect, useMemo, Fragment } from 'react';
import useStyles from "./style";
import Card from "../Card/";
import { Pagination } from '@material-ui/lab';
import { useHistory, useLocation } from 'react-router';
import queryString from "query-string";
import OptionsDialog from '../OptionsDialog';
import PriceMenuFilter from '../PriceMenuFilter';
import Mapbox from '../Mapbox';
import MapIcon from '@material-ui/icons/Map';
import DehazeIcon from '@material-ui/icons/Dehaze';


const DeskTopView = (props) => {

    const {
        listRoomPaginate,
        priceValue,
        setPriceValue,
        handleChangePriceValue,
        handleChangeInputField,
        filter,
        setFilter,
    } = props;

    const history = useHistory()

    // Pagination
    const [page, setPage] = useState(1);
    const [listRooms, setListRooms] = useState([]);
    const handlePagination = (event, page) => {
        setPage(page)
    }
    useEffect(() => {
        setListRooms(listRoomPaginate[page - 1])

    }, [listRoomPaginate, page])
    // End Pagination

    // Query Params
    const location = useLocation();
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
            _roomLatitude: Number(params._roomLatitude),
            _roomLongitude: Number(params._roomLongitude),
            _locationLatitude: Number(params._locationLatitude),
            _locationLongitude: Number(params._locationLongitude)
        };
    }, [location.search]);


    // Coordinates 
    const [roomCoors, setRoomCors] = useState([]);
    const [locationCoors, setLocationCoors] = useState({})

    // handleChangePage
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

    //  Transform map to list and backward
    const [transform, setTransform] = useState(false);
    const classes = useStyles({ transform });

    return (
        <Fragment>
            <div className={classes.root}>

                {/* Content */}
                <div className={classes.content}>
                    <div className={classes.content__header}>
                        <p>Hơn 300 chỗ ở</p>
                        <h3>
                            Chỗ ở tại thành phố {queryParams._location}
                        </h3>
                    </div>

                    {/* Filter */}
                    <div className={classes.filter}>
                        <div className={classes.filter__wrapper}>
                            <PriceMenuFilter
                                priceValue={priceValue}
                                setPriceValue={setPriceValue}
                                handleChangePriceValue={handleChangePriceValue}
                                handleChangeInputField={handleChangeInputField}
                            />
                            <OptionsDialog
                                filter={filter}
                                setFilter={setFilter}
                            />
                        </div>
                    </div>

                    <div className={classes.cards}>
                        <Card
                            handleChangePage={handleChangePage}
                            listRooms={listRooms}
                        />
                        {/* Pagination */}
                        <div className={classes.pagination__wrapper}>
                            <div className={classes.pagination__topLine}>
                                <div></div>
                            </div>
                            <Pagination
                                className={classes.pagination}
                                boundaryCount={1}
                                defaultPage={1}
                                count={listRoomPaginate.length}
                                page={page}
                                onChange={handlePagination}
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
                            province={queryParams._location}
                            listRooms={listRooms}

                        />
                    </div>
                </div>

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

export default DeskTopView;