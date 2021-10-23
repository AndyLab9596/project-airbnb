import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import Mapbox from '../Mapbox';
import useStyles from "./style";
import queryString from 'query-string';
import useFetch from '../useFetch';

const MobileListRoom = () => {

    const location = useLocation();
    const params = queryString.parse(location.search);
    const province = params._location;

    const param = useParams();
    const locationId = param.locationId;
    const { loading, data } = useFetch(locationId);

    const [rentRooms, setRentRooms] = useState([]);

    const [page, setPage] = useState(1);


    useEffect(() => {
        window.scrollTo(0, 0)
        if (loading) return

        setRentRooms(data[page - 1])

    }, [loading, page])

    const classes = useStyles();

    return (
        <div className={classes.root}>

            {/* Mapbox */}
            <div className={classes.map}>
                <div className={classes.mapBox}>
                    <Mapbox province={province} rentRooms={rentRooms} />
                </div>
            </div>
            {/* this div is used to press the main content downward */}
            <div className={classes.content__top__transparent}></div>

            {/* <div className={classes.content}>

            </div> */}

            {/* Content */}
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    <div className={classes.header}>
                        <div className={classes.header__content}>
                            <h6 className={classes.header__content__text}>
                                Hơn 300 chỗ ở
                            </h6>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default MobileListRoom;