import { Menu, MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import manageRentApi from '../../api/manageRentApi';
import Card from './Card';
import PriceMenu from './PriceMenu';
import useStyles from "./style";

const fakeRooms = [
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },
    {
        "_id": "61698b62efe193001c0a5ba3",
        "name": "Nha Trang Panorama",
        "guests": 3,
        "bedRoom": 2,
        "bath": 2,
        "description": "Trên cả tuyệt vời",
        "price": 500000,
        "elevator": true,
        "hotTub": true,
        "pool": true,
        "indoorFireplace": false,
        "dryer": true,
        "gym": true,
        "kitchen": false,
        "wifi": true,
        "heating": false,
        "cableTV": true,
        "locationId": {
            "name": "Khu phố tây Trần Phú",
            "province": "Nha Trang",
            "country": "viet nam",
            "valueate": 8,
            "image": "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg"
        },
        "__v": 0,
        "image": "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg"
    },

]

const ListRoomVer2 = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const param = useParams();
    const locationId = param.locationId;

    const [rentRooms, setRentRooms] = useState([]);
    const province = rentRooms?.[0]?.locationId.province;

    // Handle Menu Price:
    const [anchorElPrice, setAnchorElPrice] = useState(null);

    const handleOpenPrice = (event) => {
        setAnchorElPrice(event.currentTarget);
    };

    const handleClosePrice = () => {
        setAnchorElPrice(null);
    };

    const [viewport, setViewport] = useState({
        latitude: 12.233032276052878,
        longitude: 109.19698601839609,
        zoom: 12,
    });

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
    // props drilling

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
                            <button className={classes.filter__item__button} onClick={(event) => handleOpenPrice(event)}>
                                <span>Giá</span>
                            </button>
                        </div>

                        {/* Modal Price */}
                        <Menu
                            id="price-menu"
                            anchorReference="anchorPosition"
                            anchorPosition={{ top: 250, left: 10 }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            anchorEl={anchorElPrice}
                            keepMounted
                            open={Boolean(anchorElPrice)}
                            onClose={handleClosePrice}
                            className={classes.rootPriceMenu}
                        >

                            {/* Price Menu Item */}

                            <PriceMenu />


                        </Menu>

                        <div className={classes.filter__item}>
                            <button className={classes.filter__item__button}>
                                <span>Bộ lọc khác</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* List Rooms */}

                <div className={classes.cards}>
                    {rentRooms?.map((fakeRoom => (
                        <Card key={fakeRoom._id} fakeRoom={fakeRoom} />
                    )))}
                </div>

            </div>

            {/* Map */}
            <div className={classes.map}>
                <div className={classes.mapBox}>
                    <ReactMapGL
                        {...viewport}
                        className={classes.ReactMapGL}
                        width="100%"
                        height="100%"
                        mapStyle="mapbox://styles/thienvy95/ckuvywfwtntgx17pr1vnuxbj8"
                        mapboxApiAccessToken="pk.eyJ1IjoidGhpZW52eTk1IiwiYSI6ImNrdXFkcTlycjByem8yeHBnbXVmNmwwMzQifQ.rLTXpQcU4iZjpeNw8DblUQ"
                        onViewportChange={(viewport) => setViewport(viewport)}
                    >
                    </ReactMapGL>

                </div>
            </div>

        </div>
    );
};

export default ListRoomVer2;