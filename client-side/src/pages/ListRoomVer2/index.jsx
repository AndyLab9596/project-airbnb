import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRentRoomsAction } from '../../store/action/RentRoomsAction';
import Card from './Card';
import useStyles from "./style";

const ListRoomVer2 = () => {

    const classes = useStyles();

    const param = useParams();
    const dispatch = useDispatch();
    const rentRooms = useSelector(state => state.RentRoomsReducer.arrListRoom);
    console.log('rentRooms', rentRooms)

    const locationId = param.locationId;

    const province = rentRooms?.[0]?.locationId.province;

    const fetchListRoom = useCallback(() => {
        dispatch(getRentRoomsAction(locationId))
    }, [dispatch, locationId]);

    useEffect(() => {
        fetchListRoom()

    }, [])

    return (
        <div className={classes.root}>

            {/* Content */}
            <div className={classes.content}>
                <div className={classes.content__header}>
                    <p>Hơn 300 chỗ ở</p>
                    <h3>Chỗ ở tại Thành Phố {province}</h3>
                </div>

                {/* Filter */}
                <div className={classes.filter}>
                    <div className={classes.filter__wrapper}>
                        <div className={classes.filter__item}>
                            <button className={classes.filter__item__button}>
                                <span>Giá</span>
                            </button>
                        </div>

                        <div className={classes.filter__item}>
                            <button className={classes.filter__item__button}>
                                <span>Bộ lọc khác</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* List Rooms */}

                <div className={classes.cards}>
                    <Card />

                </div>

            </div>

            {/* Map */}
            <div className={classes.map}>
                <div className={classes.mapBox}>

                    {/* Component mapBox */}

                </div>
            </div>

        </div>
    );
};

export default ListRoomVer2;