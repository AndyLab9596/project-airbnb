import { AppBar, Box, Chip, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import React, { Fragment, useRef, useState } from 'react';
import airbnbIcon from '../../../assets/img/airbnblogo.png';
import useStyles from './style';

const MenuItems = ['Đăng nhập', 'Đăng kí', 'Cho thuê nhà', 'Tổ chức trải nghiệm', 'Trợ giúp'];


const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const windowWidth = window.innerWidth;

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            {/* AppBar */}
            <AppBar position="fixed"
                elevation={0}
                className={classes.root}>
                <Toolbar className={classes.navbar__content}>
                    <Box>
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={airbnbIcon} alt="icon" className={classes.navbar__content__icon} />
                        </a>
                    </Box>

                    <Box className={classes.navbar__content__menu}>
                        <span>
                            Nơi ở
                        </span>
                        <span>
                            Trải nghiệm
                        </span>
                        <span>
                            Trải nghiệm trực tuyến

                        </span>
                    </Box>

                    <div className={classes.navbar__content__left}>
                        <span >
                            Trở thành chủ nhà
                        </span>
                        <IconButton className={classes.language__icon}>
                            <LanguageIcon fontSize="small" />
                        </IconButton>
                        <Chip
                            onClick={handleOpenMenu}
                            className={classes.chip}
                            size="medium"
                            icon={<MenuOutlinedIcon fontSize="small" />}
                            label={<AccountCircleOutlinedIcon fontSize="medium" />}
                            // onClick={handleClick}
                            // onDelete={handleDelete}
                            variant="default"
                            color="#ffffff"
                        />
                    </div>
                </Toolbar>
            </AppBar>

            {/* Menu Toggle from Chip*/}
            <Menu
                id="simple-menu"
                anchorReference="anchorPosition"
                anchorPosition={{ top: 80, left: windowWidth - 80 }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                PaperProps={{
                    style: {
                        minWidth: '200px',
                        padding: '8px',
                        borderRadius: '16px'
                    },
                }}
            >
                {MenuItems.map((item, index) => (
                    <MenuItem key={index} className={classes.menu__items}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
};

export default Header;