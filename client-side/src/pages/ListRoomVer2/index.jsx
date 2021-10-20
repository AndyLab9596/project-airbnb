import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import manageRentApi from '../../api/manageRentApi';
import Card from './Card';
import Mapbox from './Mapbox';
import OptionsDialog from './OptionsDialog';
import PriceMenuFilter from './PriceMenuFilter';
import useStyles from "./style";


const ListRoomVer2 = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const param = useParams();
    const locationId = param.locationId;

    const [rentRooms, setRentRooms] = useState([]);
    const province = rentRooms?.[0]?.locationId.province;

    const [priceValue, setPriceValue] = useState([0, 1000000]);

    const handleChangePriceValue = (event, newValue) => {
        setPriceValue(newValue);

    };

    const handleChangeInputField = (event) => {
        setPriceValue(event.target.value === '' ? '' : Number(event.target.value))
    };


    const [filter, setFilter] = useState({
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
    });

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

    // console.log(filtered)
    console.log('finalFiltered', finalFiltered);


    useEffect(() => {
        (async () => {
            try {
                const res = await manageRentApi.getRentRooms(locationId)
                setRentRooms(res)

            } catch (error) {
                console.log(error)
            }
        })()

    }, [locationId])


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
                        <PriceMenuFilter
                            filter={filter}
                            setFilter={setFilter}
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

                {/* List Rooms */}

                <div className={classes.cards}>
                    {finalFiltered?.map((fakeRoom => (
                        <Card key={fakeRoom._id} fakeRoom={fakeRoom} />
                    )))}
                </div>

            </div>

            {/* Map */}
            <div className={classes.map}>
                <div className={classes.mapBox}>
                    <Mapbox />
                </div>
            </div>

        </div>
    );
};

export default ListRoomVer2;