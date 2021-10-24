import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import Mapbox from '../Mapbox';
import OptionsDialog from '../OptionsDialog';
import useFetch from '../useFetch';
import MobileCard from './MobileCard';
import PriceFilterDrawer from './PriceFilterDrawer';
import useStyles from "./style";

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

    const [transform, setTransform] = useState(false);

    const handleOpenMapFullScreen = () => {
        setTransform(state => !state)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if (loading) return

        setRentRooms(data[page - 1])

    }, [loading, page])

    const classes = useStyles({ transform });

    return (
        <div className={classes.root}>

            {/* Mapbox */}
            <div className={classes.map}>
                <div className={classes.mapBox}>
                    <Mapbox province={province} rentRooms={rentRooms} />
                </div>
            </div>
            {/* this div is used to press the main content downward */}
            <div className={classes.content__top__transparent}

            ></div>

            {/* Content */}
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    {/* Header */}
                    <div className={classes.header} onClick={() => handleOpenMapFullScreen()}>
                        <div className={classes.header__content}>
                            <h6 className={classes.header__content__text}>
                                Hơn 300 chỗ ở
                            </h6>
                        </div>

                    </div>

                    {/* Cards */}
                    <section className={classes.section}>

                        {/* <PriceFilterDrawer /> */}
                        <div className={classes.filter__group}>
                            <PriceFilterDrawer
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

                        <Grid container spacing={3}>
                            {finalFiltered?.map((rentRoom, index) => (
                                <MobileCard rentRoom={rentRoom} key={index} />
                            ))}
                        </Grid>

                        <div className={classes.pagination__wrapper}>
                            <Pagination
                                className={classes.pagination}
                                boundaryCount={1}
                                defaultPage={1}
                                count={data?.length}
                                page={page}
                                onChange={handlePageChange}
                                color="standard" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MobileListRoom;