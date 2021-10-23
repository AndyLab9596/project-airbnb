import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { formMoney } from '../../../utilities/coordinates';
import Mapbox from '../Mapbox';
import OptionsDialog from '../OptionsDialog';
import useFetch from '../useFetch';
import useStyles from "./style";
import MobileCard from './MobileCard'


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


                        <OptionsDialog
                            resetFilter={resetFilter}
                            filter={filter}
                            setFilter={setFilter}
                        />

                        <Grid container spacing={3}>
                            {finalFiltered.map((rentRoom, index) => (
                                <MobileCard rentRoom={rentRoom} key={index} />
                            ))}
                        </Grid>
                    </section>

                </div>
            </div>




        </div>
    );
};

export default MobileListRoom;