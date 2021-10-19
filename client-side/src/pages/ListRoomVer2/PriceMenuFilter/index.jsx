import { Menu } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import PriceMenu from '../PriceMenu';
import useStyles from './style';

const PriceMenuFilter = () => {
    const classes = useStyles();
    const [anchorElPrice, setAnchorElPrice] = useState(null);

    const handleOpenPrice = (event) => {
        setAnchorElPrice(event.currentTarget);
    };

    const handleClosePrice = () => {
        setAnchorElPrice(null);
    };

    return (
        <Fragment>
            <div className={classes.filter__item}>
                <button className={classes.filter__item__button} onClick={(event) => handleOpenPrice(event)}>
                    <span>Giá</span>
                </button>
            </div>

            {/* Modal Price */}
            <Menu
                id="price-menu"
                anchorReference="anchorPosition"
                anchorPosition={{ top: 250, left: 10 }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                anchorEl={anchorElPrice}
                keepMounted
                open={Boolean(anchorElPrice)}
                onClose={handleClosePrice}
                className={classes.rootPriceMenu}
            >
                <PriceMenu />
            </Menu>


        </Fragment>
    );
};

export default PriceMenuFilter;