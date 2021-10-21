import { Pagination } from '@material-ui/lab';
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

    const [data, setData] = useState([]);
    const province = data?.[0]?.locationId.province;


    // input : tổng trang, phần tử mỗi trang, khi handleChange ở pagination thì sẽ tự động cập nhập page
    // output: phần tử mỗi page
    // filter trên 1 page

    // Pagination:
    // const itemsPerPage = 3;
    // const [paginationPage, setPaginationPage] = useState(1);
    // const handlePageChange = (event, value) => {
    //     setPaginationPage(value)
    // };

    // const paginate = (rentRooms) => {
    //     const newRentRooms = Array.from({ length: rentRooms.length }, (_, index) => {
    //         const start = index * itemsPerPage
    //         return rentRooms.slice(start, start + itemsPerPage)
    //     })
    //     return newRentRooms;
    // }

    // const [rentRooms, setRentRooms] = useState([]);

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

    const filtered = data.filter((item) => {

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
        (async () => {
            try {
                const res = await manageRentApi.getRentRooms(locationId)
                setData(res)

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
                    <h3>Chỗ ở tại Thành Phố
                        {province}
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
                    {finalFiltered?.map((fakeRoom => (
                        <Card key={fakeRoom._id} fakeRoom={fakeRoom} />
                    )))}

                    {/* {rentRooms?.map((fakeRoom => (
                        <Card key={fakeRoom._id} fakeRoom={fakeRoom} />
                    )))} */}

                    {/* Pagination */}
                    <div className={classes.pagination}>
                        {/* <Pagination
                            count={Math.ceil(data.length / itemsPerPage)}
                            page={paginationPage}
                            onChange={handlePageChange}
                            color="primary" /> */}
                    </div>

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