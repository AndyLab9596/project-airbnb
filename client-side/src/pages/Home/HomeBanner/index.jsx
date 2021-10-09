import React from 'react';
import useStyles from './style';
import bgImgW960 from '../../../assets/img/bgImgW960.webp';

const HomeBanner = () => {
    const classes = useStyles({ bannerImg: bgImgW960 })

    return (
        <div className={classes.banner}>
        </div>
    );
};

export default HomeBanner;