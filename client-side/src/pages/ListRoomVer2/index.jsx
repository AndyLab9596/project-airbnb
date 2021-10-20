import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import manageRentApi from '../../api/manageRentApi';
import Card from './Card';
import Mapbox from './Mapbox';
import OptionsDialog from './OptionsDialog';
import PriceMenuFilter from './PriceMenuFilter';
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

    // const initFilter = {
    //     utilities: [],
    // };

    // const filterSelect = {type, checked, item} 


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
                        <PriceMenuFilter />
                        <OptionsDialog />
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
                    <Mapbox />
                </div>
            </div>

        </div>
    );
};

export default ListRoomVer2;