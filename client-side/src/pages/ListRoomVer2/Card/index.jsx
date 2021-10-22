import React, { Fragment } from 'react';
import useStyles from "./style"
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { formMoney } from '../../../utilities/coordinates'

const Card = ({ finalFiltered, fakeRoom }) => {
    const classes = useStyles();

    return (
        <Fragment>
            {
                finalFiltered.map((card, index) => (
                    <div className={classes.card} key={index}>

                        {/* card top line */}
                        <div className={classes.card__topLine}>
                            <div></div>
                        </div>

                        {/* card wrapper */}
                        <div className={classes.card__wrapper}>

                            <div className={classes.card__img}>
                                <img src={card.image} alt={card.name} />
                            </div>

                            <div className={classes.card__content}>
                                <div className={classes.card__header}>
                                    <div className={classes.card__header__text}>
                                        <span>{card.name}</span>
                                    </div>
                                    <button className={classes.card__header__button}>
                                        <FavoriteBorderOutlinedIcon />
                                    </button>
                                </div>

                                <div className={classes.card__middleLine}></div>

                                <div className={classes.card__desc1}>
                                    <span>{card.guests} Khách .</span>
                                    <span>{card.bedRoom} Giường .</span>
                                    <span>{card.bath} phòng tắm</span>
                                </div>

                                <div className={`${classes.card__desc1} ${classes.card__desc2}`}>
                                    <span>{card.elevator && 'Thang máy'}</span>
                                    <span>{card.hotTub && 'Bồn nước nóng'}</span>
                                    <span>{card.pool && 'Hồ bơi'}</span>
                                    <span>{card.gym && 'Phòng Gym'}</span>
                                    <span>{card.kitchen && 'Bếp'}</span>
                                    <span>{card.wifi && 'Wifi'}</span>
                                    <span>{card.cableTV && 'TV Cáp'}</span>
                                    <span>...</span>
                                </div>

                                <div className={classes.card__footer}>
                                    <div className={classes.card__footer__evaluate}>
                                        <span>
                                            <StarIcon className={classes.evaluate__icon} />
                                        </span>
                                        <span className={classes.evaluate__points}>
                                            {card.locationId.valueate}
                                        </span>
                                        <span className={classes.evaluate__number}>
                                            ( 56 đánh giá )
                                        </span>
                                    </div>
                                    <div className={classes.card__footer__price}>
                                        <p>
                                            {formMoney(card.price)} / <span>đêm</span>
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                ))
            }

        </Fragment>


    );
};

export default Card;