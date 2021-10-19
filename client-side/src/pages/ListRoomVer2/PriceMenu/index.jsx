import { MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { AirbnbSlider, AirbnbThumbComponent, PriceInputField, useStyles } from "./style";

const PriceMenu = () => {
    const classes = useStyles();
    const [priceValue, setPriceValue] = useState([10, 1000]);

    const handleChangePriceValue = (event, newValue) => {
        setPriceValue(newValue)
    };

    const handleChangeInputField = (event) => {
        setPriceValue(event.target.value === '' ? '' : Number(event.target.value))

    };


    return (
        <MenuItem className={classes.priceMenu}>
            <div className={classes.priceMenu__wrapper}>
                <div className={classes.priceMenu__content}>
                    <h6>Giá trung bình hàng đêm là $42</h6>
                </div>

                <div className={classes.priceMenu__rangePrice}>
                    <div className={classes.priceMenu__rangePrice__item}>

                        <AirbnbSlider
                            ThumbComponent={AirbnbThumbComponent}
                            defaultValue={[10, 1000]}
                            min={10}
                            max={1000}
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
                    <button className={classes.priceMenu__footer__deleteBtn}>
                        Xóa
                    </button>

                    <button className={classes.priceMenu__footer__saveBtn}>
                        Lưu
                    </button>

                </div>
            </div>
        </MenuItem>
    );
};

export default PriceMenu;