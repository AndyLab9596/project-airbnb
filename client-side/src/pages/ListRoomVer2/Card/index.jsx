import React from 'react';
import useStyles from "./style"
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { formMoney } from '../../../utilities/coordinates'

const Card = ({ fakeRoom }) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>

            {/* card top line */}
            <div className={classes.card__topLine}>
                <div></div>
            </div>

            {/* card wrapper */}
            <div className={classes.card__wrapper}>

                <div className={classes.card__img}>
                    <img src={fakeRoom.image} alt={fakeRoom.name} />
                </div>

                <div className={classes.card__content}>
                    <div className={classes.card__header}>
                        <div className={classes.card__header__text}>
                            <span>{fakeRoom.name}</span>
                        </div>
                        <button className={classes.card__header__button}>
                            <FavoriteBorderOutlinedIcon />
                        </button>
                    </div>

                    <div className={classes.card__middleLine}></div>

                    <div className={classes.card__desc1}>
                        <span>{fakeRoom.guests} Khách .</span>
                        <span>{fakeRoom.bedRoom} Giường .</span>
                        <span>{fakeRoom.bath} phòng tắm</span>
                    </div>

                    <div className={`${classes.card__desc1} ${classes.card__desc2}`}>
                        <span>{fakeRoom.elevator && 'Thang máy'}</span>
                        <span>{fakeRoom.hotTub && 'Bồn nước nóng'}</span>
                        <span>{fakeRoom.pool && 'Hồ bơi'}</span>
                        <span>{fakeRoom.gym && 'Phòng Gym'}</span>
                        <span>{fakeRoom.kitchen && 'Bếp'}</span>
                        <span>{fakeRoom.wifi && 'Wifi'}</span>
                        <span>{fakeRoom.cableTV && 'TV Cáp'}</span>
                        <span>...</span>
                    </div>

                    <div className={classes.card__footer}>
                        <div className={classes.card__footer__evaluate}>
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
                        <div className={classes.card__footer__price}>
                            <p>
                                {formMoney(fakeRoom.price)} / <span>đêm</span>
                            </p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Card;