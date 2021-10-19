import React, { useState } from 'react';
import useStyles from "./style";
import CloseIcon from '@material-ui/icons/Close';
import { Checkbox, FormControlLabel, Typography, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from '@material-ui/core';

const FilterDialog = ({ handleCloseFilter }) => {
    const classes = useStyles();

    const utilities = [
        { id: 1, name: 'elevator', label: 'Thang máy' },
        { id: 2, name: 'hotTub', label: 'Bồn nước nóng' },
        { id: 3, name: 'pool', label: 'Hồ bơi' },
        { id: 4, name: 'indoorFireplace', label: 'Lò sửu' },
        { id: 5, name: 'dryer', label: 'Máy sáy' },
        { id: 6, name: 'gym', label: 'Phòng gym' },
        { id: 7, name: 'kitchen', label: 'Phòng bếp' },
        { id: 8, name: 'wifi', label: 'Wifi' },

    ];

    // Rooms and beds
    const [numberServices, setNumberServices] = useState({
        bed: 0,
        bedRoom: 0,
        bath: 0,
    });

    const addBed = () => {
        if (numberServices.bed > 15) return;
        setNumberServices({ ...numberServices, bed: numberServices.bed + 1 })
    }

    const minusBed = () => {
        if (numberServices.bed < 1) return;
        setNumberServices({ ...numberServices, bed: numberServices.bed - 1 })
    }

    const addbedRoom = () => {
        if (numberServices.bedRoom > 15) return;
        setNumberServices({ ...numberServices, bedRoom: numberServices.bedRoom + 1 })
    }

    const minusbedRoom = () => {
        if (numberServices.bedRoom < 1) return;
        setNumberServices({ ...numberServices, bedRoom: numberServices.bedRoom - 1 })
    }

    const addBath = () => {
        if (numberServices.bath > 15) return;
        setNumberServices({ ...numberServices, bath: numberServices.bath + 1 })
    }

    const minusBath = () => {
        if (numberServices.bath < 1) return;
        setNumberServices({ ...numberServices, bath: numberServices.bath - 1 })
    }

    //  Checkbox state

    const [check, setCheck] = useState({
        elevator: false,
        hotTub: false,
        pool: false,
        indoorFireplace: false,
        dryer: false,
        gym: false,
        kitchen: false,
        wifi: false,
    });

    const handleChange = (event) => {
        setCheck({ ...check, [event.target.name]: event.target.checked });
    };

    console.log(check)

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
                                                <button className={classes.item__action__btn}
                                                    onClick={() => minusbedRoom()}
                                                >
                                                    <span>-</span>
                                                </button>
                                                <span className={classes.item__action__number}>
                                                    {numberServices.bedRoom}
                                                </span>
                                                <button className={classes.item__action__btn}
                                                    onClick={() => addbedRoom()}
                                                >
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
                                                <button className={classes.item__action__btn}
                                                    onClick={() => minusBath()}
                                                >
                                                    <span>-</span>
                                                </button>
                                                <span className={classes.item__action__number}>
                                                    {numberServices.bath}
                                                </span>
                                                <button className={classes.item__action__btn}
                                                    onClick={() => addBath()}
                                                >
                                                    <span>+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className={classes.content__element}>
                            <section>
                                <h3 className={classes.content__element__header}>
                                    Tiện ích
                                </h3>

                                {/* Element */}
                                <div className={classes.content__element__items}>

                                    {utilities.map((uti) => (
                                        <div className={classes.content__element__checkbox}>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    color="textSecondary"
                                                    className={classes.checkbox}
                                                    checked={check.checkedA}
                                                    onChange={handleChange}
                                                    name={uti.name}
                                                />}
                                                label={<Typography variant="body1" color="textPrimary">
                                                    {uti.label}
                                                </Typography>}
                                                className={classes.formControl}
                                                color="primary"
                                            />
                                        </div>
                                    ))}

                                </div>
                            </section>
                        </div>


                    </main>
                </div>
            </div>


            {/* Content */}

        </div>

    );
};

export default FilterDialog;