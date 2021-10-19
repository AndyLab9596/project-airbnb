import React, { useState } from 'react';
import useStyles from "./style";
import CloseIcon from '@material-ui/icons/Close';

const FilterDialog = ({ handleCloseFilter }) => {
    const classes = useStyles();

    // Rooms and beds
    const [numberServices, setNumberServices] = useState({
        bed: 0,
        bedRoom: 0,
        bath: 0,
    })

    const addBed = () => {
        if (numberServices.bed > 15) return;
        setNumberServices({ ...numberServices, bed: numberServices.bed + 1 })
    }

    const minusBed = () => {
        if (numberServices.bed < 1) return;
        setNumberServices({ ...numberServices, bed: numberServices.bed - 1 })
    }

    return (
        <div className={classes.root}>
            {/* Header */}
            <header className={classes.header}>
                <div className={classes.header__closeBtn}>
                    <button className={classes.closeBtn__item} onClick={handleCloseFilter}>
                        <CloseIcon className={classes.closeBtn__item__icon} />
                    </button>
                </div>
                <h6 className={classes.header__title}>Bộ lọc khác</h6>
            </header>
            {/* Content */}
            <div className={classes.content}>
                <header className={classes.content__header}></header>
                <div className={classes.content__container}>
                    <main>
                        <div className={classes.content__element}>
                            <section>
                                <h3 className={classes.content__element__header}>
                                    Phòng và phòng ngủ
                                </h3>

                                {/* Element */}
                                <div className={classes.content__element__items}>


                                    <div className={classes.content__element__item}>
                                        <div className={classes.itemWrapper}>
                                            <div className={classes.item__text}>
                                                <p>Giường</p>
                                            </div>
                                            <div className={classes.item__action}>
                                                <button className={classes.item__action__btn}
                                                    onClick={() => minusBed()}
                                                >
                                                    <span>-</span>
                                                </button>
                                                <span className={classes.item__action__number}>
                                                    {numberServices.bed}
                                                </span>
                                                <button className={classes.item__action__btn}
                                                    onClick={() => addBed()}
                                                >
                                                    <span>+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={classes.content__element__item}>
                                        <div className={classes.itemWrapper}>
                                            <div className={classes.item__text}>
                                                <p>Phòng ngủ</p>
                                            </div>
                                            <div className={classes.item__action}>
                                                <button className={classes.item__action__btn}>
                                                    <span>-</span>
                                                </button>
                                                <span className={classes.item__action__number}>
                                                    {numberServices.bedRoom}
                                                </span>
                                                <button className={classes.item__action__btn}>
                                                    <span>+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={classes.content__element__item}>
                                        <div className={classes.itemWrapper}>
                                            <div className={classes.item__text}>
                                                <p>Phòng tắm</p>
                                            </div>
                                            <div className={classes.item__action}>
                                                <button className={classes.item__action__btn}>
                                                    <span>-</span>
                                                </button>
                                                <span className={classes.item__action__number}>
                                                    {numberServices.bath}
                                                </span>
                                                <button className={classes.item__action__btn}>
                                                    <span>+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* Element */}



                            </section>

                        </div>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default FilterDialog;