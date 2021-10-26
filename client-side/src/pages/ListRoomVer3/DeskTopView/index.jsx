import React, { useState, useEffect, useMemo } from 'react';
import useStyles from "./style";
import Card from "../Card/";
import { Pagination } from '@material-ui/lab';
import { useLocation } from 'react-router';
import queryString from "query-string";
import OptionsDialog from '../OptionsDialog';
import PriceMenuFilter from '../PriceMenuFilter';


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


    //  Transform map to list and backward
    const [transform, setTransform] = useState(false);
    const classes = useStyles({ transform });

    return (
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
                        // handleChangePage={handleChangePage}
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
        </div>
    );
};

export default DeskTopView;