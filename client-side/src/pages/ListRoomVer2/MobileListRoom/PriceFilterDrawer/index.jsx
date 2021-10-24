import { SwipeableDrawer } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { AirbnbSlider, AirbnbThumbComponent, PriceInputField, useStyles } from "./style";

const PriceFilterDrawer = ({ filter, setFilter, priceValue, setPriceValue, handleChangePriceValue, handleChangeInputField }) => {


    const [state, setState] = useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.filter__item}>
                <button className={classes.filter__item__button}

                    onClick={toggleDrawer('bottom', true)}

                >
                    <span>Bộ lọc giá</span>
                </button>
            </div>

            <SwipeableDrawer
                anchor="bottom"
                open={state.bottom}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
            >
                <div className={classes.priceMenu}>
                    <div className={classes.priceMenu__wrapper}>
                        <div className={classes.priceMenu__content}>
                            <h6>Giá trung bình hàng đêm là $42</h6>
                        </div>

                        <div className={classes.priceMenu__rangePrice}>
                            <div className={classes.priceMenu__rangePrice__item}>

                                <AirbnbSlider
                                    ThumbComponent={AirbnbThumbComponent}
                                    defaultValue={[0, 1000000]}
                                    min={0}
                                    max={1000000}
                                    getAriaLabel={(index) =>
                                        index === 0 ? "Minimum price" : "Maximum price"
                                    }
                                    value={priceValue}
                                    onChange={handleChangePriceValue}
                                />

                            </div>

                            <div className={classes.priceMenu__inputField}>
                                <PriceInputField
                                    label="giá tối thiểu"
                                    defaultValue={priceValue[0]}
                                    value={priceValue[0]}
                                    variant="filled"
                                    id="price-inputfield1"
                                    onChange={handleChangeInputField}
                                />
                                <span className={classes.priceMenu__inputField__divide}>-</span>
                                <PriceInputField
                                    label="giá tối đa"
                                    // className={classes.margin}
                                    defaultValue={priceValue[1]}
                                    value={priceValue[1]}
                                    variant="filled"
                                    id="price-inputfield2"
                                    onChange={handleChangeInputField}
                                />
                            </div>
                        </div>


                    </div>
                    {/* Footer */}
                    <div className={classes.priceMenu__footer}>
                        <div className={classes.priceMenu__footer__wrapper}>
                            <button className={classes.priceMenu__footer__deleteBtn} onClick={() => setPriceValue([0, 1000000])}>
                                Xóa
                            </button>

                            <button className={classes.priceMenu__footer__saveBtn} onClick={toggleDrawer('bottom', false)}>
                                Lưu
                            </button>

                        </div>
                    </div>
                </div>

            </SwipeableDrawer>



        </Fragment>
    );
};

export default PriceFilterDrawer;