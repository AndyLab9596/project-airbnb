import { Grid } from '@material-ui/core';
import React from 'react';
import useStyles from "./style";
import StarIcon from '@material-ui/icons/Star';
import { formMoney } from '../../../../utilities/coordinates';

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
const MobileList = ({ rentRoom, handleChangePage }) => {
    const classes = useStyles();

    return (

        <Grid item xs={12}>
            <div className={classes.card} onClick={() => handleChangePage(rentRoom._id)}>
                <div className={classes.card__media}>
                    <img src={rentRoom.image} alt={rentRoom.name}
                        className={classes.card__media__img} />
                </div>
                <div className={classes.card__content}>

                    <div className={classes.card__content_evaluate}>
                        <span>
                            <StarIcon className={classes.evaluate__icon} />
                        </span>
                        <span className={classes.evaluate__points}>
                            {rentRoom.locationId.valueate}
                        </span>
                        <span className={classes.evaluate__number}>
                            ( 56 đánh giá )
                        </span>
                    </div>

                    <div className={classes.card__content__name}>
                        <h3>
                            {rentRoom.name}
                        </h3>
                    </div>

                    <div className={classes.card__content__price}>
                        <p>
                            {formMoney(rentRoom.price)} / <span>đêm</span>
                        </p>
                    </div>
                </div>
            </div>
        </Grid>

    );
};

export default MobileList;