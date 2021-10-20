import React, { Fragment, useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "./style";
import { Checkbox, FormControlLabel, Slide, Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function OptionsDialog({ onCheckboxFilter, onFilterElevator }) {
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

    // console.log(check)

    const handleChange = (event) => {
        setCheck({ ...check, [event.target.name]: event.target.checked });
    };

    const handleInput = (field) => (event) => {
        const { checked } = event.target;
        setCheck({ ...check, [event.target.name]: checked });
        console.log(event.target.name)
        const checkName = event.target.name;
        switch (field) {
            case checkName:
                onFilterElevator(checkName, checked)
                break;

            default:
        }
    };

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);



    return (
        <Fragment>
            <div className={classes.filter__item}>
                <button className={classes.filter__item__button} onClick={handleClickOpen('paper')}>
                    <span>Bộ lọc khác</span>
                </button>
            </div>

            <Dialog
                fullWidth="true"
                maxWidth="md"
                open={open}
                onClose={handleClose}
                scroll={scroll}
                TransitionComponent={Transition}
                keepMounted
            >
                <DialogTitle id="scroll-dialog-title">
                    <header className={classes.header}>
                        <div className={classes.header__closeBtn}>
                            <button className={classes.closeBtn__item} onClick={handleClose}>
                                <CloseIcon className={classes.closeBtn__item__icon} />
                            </button>
                        </div>
                        <h6 className={classes.header__title}>Bộ lọc khác</h6>
                    </header>
                </DialogTitle>
                <DialogContent >
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <div className={classes.content}>
                            {/* <header className={classes.content__header}></header> */}
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
                                                                name={uti.name}
                                                                checked={check.name}
                                                                // onChange={handleChange}
                                                                onChange={handleInput(uti.name)}

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
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <div className={classes.footer__wrapper}>
                        <button className={classes.footer__deleteAll}>
                            Xóa tất cả
                        </button>

                        <button className={classes.footer__display}>
                            Hiển thị hơn 300 chỗ ở
                        </button>
                    </div>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}