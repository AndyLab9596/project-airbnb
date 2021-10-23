import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { formMoney } from '../../../utilities/coordinates';
import Mapbox from '../Mapbox';
import useFetch from '../useFetch';
import useStyles from "./style";



const fakeRoom = {
    "_id": "61699651efe193001c0a5bda",
    "name": "KHA Hostel & Cafe",
    "guests": 1,
    "bedRoom": 1,
    "bath": 2,
    "description": "Kiến trúc độc đáo",
    "price": 200000,
    "elevator": true,
    "hotTub": true,
    "pool": true,
    "indoorFireplace": true,
    "dryer": true,
    "gym": true,
    "kitchen": false,
    "wifi": true,
    "heating": true,
    "cableTV": true,
    "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634310184889_khahostel.jpg",
    "locationId": {
        "name": "Hồ Chí Minh",
        "province": "Hồ Chí Minh",
        "country": "VN",
        "valueate": 8,
        "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304216447_saigonbuivien.jpg"
    }
};

const MobileListRoom = () => {

    const location = useLocation();
    const params = queryString.parse(location.search);
    const province = params._location;

    const param = useParams();
    const locationId = param.locationId;
    const { loading, data } = useFetch(locationId);

    const [rentRooms, setRentRooms] = useState([]);

    const [page, setPage] = useState(1);

    const handlePageChange = (event, page) => {
        setPage(page)
    }


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
                    {/* Header */}
                    <div className={classes.header}>
                        <div className={classes.header__content}>
                            <h6 className={classes.header__content__text}>
                                Hơn 300 chỗ ở
                            </h6>
                        </div>
                    </div>

                    {/* Cards */}
                    <section className={classes.section}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <div className={classes.card}>
                                    <div className={classes.card__media}>
                                        <img src={fakeRoom.image} alt={fakeRoom.name}
                                            className={classes.card__media__img} />
                                    </div>
                                    <div className={classes.card__content}>

                                        <div className={classes.card__content_evaluate}>
                                            <span>
                                                <StarIcon className={classes.evaluate__icon} />
                                            </span>
                                            <span className={classes.evaluate__points}>
                                                {fakeRoom.locationId.valueate}
                                            </span>
                                            <span className={classes.evaluate__number}>
                                                ( 56 đánh giá )
                                            </span>
                                        </div>

                                        <div className={classes.card__content__name}>
                                            <h3>
                                                {fakeRoom.name}
                                            </h3>
                                        </div>

                                        <div className={classes.card__content__price}>
                                            <p>
                                                {formMoney(fakeRoom.price)} / <span>đêm</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </section>

                </div>
            </div>




        </div>
    );
};

export default MobileListRoom;