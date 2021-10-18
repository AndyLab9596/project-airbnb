import React from 'react';
import useStyles from "./style"
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const fakeRooms = {
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
};

const Card = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.card}>

                {/* card top line */}
                <div className={classes.card__topLine}>
                    <div></div>
                </div>

                {/* card wrapper */}
                <div className={classes.card__wrapper}>

                    <div className={classes.card__img}>
                        <img src={fakeRooms.image} alt={fakeRooms.name} />
                    </div>

                    <div className={classes.card__content}>
                        <div className={classes.card__header}>
                            <div className={classes.card__header__text}>
                                <span>{fakeRooms.name}</span>
                            </div>
                            <button className={classes.card__header__button}>
                                <FavoriteBorderOutlinedIcon />
                            </button>
                        </div>

                        <div className={classes.card__middleLine}></div>

                        <div className={classes.card__desc1}>
                            <span>{fakeRooms.guests} Khách .</span>
                            <span>{fakeRooms.bedRoom} Giường .</span>
                            <span>{fakeRooms.bath} phòng tắm</span>
                        </div>

                        <div className={`${classes.card__desc1} ${classes.card__desc2}`}>
                            <span>{fakeRooms.elevator && 'Thang máy'}</span>
                            <span>{fakeRooms.hotTub && 'Bồn nước nóng'}</span>
                            <span>{fakeRooms.pool && 'Hồ bơi'}</span>
                            <span>{fakeRooms.gym && 'Phòng Gym'}</span>
                            <span>{fakeRooms.kitchen && 'Bếp'}</span>
                            <span>{fakeRooms.wifi && 'Wifi'}</span>
                            <span>{fakeRooms.cableTV && 'TV Cáp'}</span>
                            <span>...</span>
                        </div>

                        <div className={classes.card__footer}>
                            <div className={classes.card__footer__evaluate}>
                                <span>
                                    <StarIcon className={classes.evaluate__icon} />
                                </span>
                                <span className={classes.evaluate__points}>
                                    {fakeRooms.locationId.valueate}
                                </span>
                                <span className={classes.evaluate__number}>
                                    ( 56 đánh giá )
                                </span>
                            </div>
                            <div className={classes.card__footer__price}>
                                <p>
                                    {`$${Number.parseInt(fakeRooms.price / 23000)}`} / <span>đêm</span>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Card;