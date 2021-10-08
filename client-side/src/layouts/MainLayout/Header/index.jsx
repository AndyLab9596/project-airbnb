import { AppBar, Box, Chip, IconButton, Toolbar } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import React from 'react';
import airbnbIcon from '../../../assets/img/airbnblogo.png';
import useStyles from './style';

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position="sticky" className={classes.root}>
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
    );
};

export default Header;