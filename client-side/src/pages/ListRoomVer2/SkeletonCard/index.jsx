import { Skeleton } from '@material-ui/lab';
import useStyles from "./style"
import React from 'react';

const SkeletonCard = ({ length }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {Array.from(new Array(length)).map((skes, index) => (
                <div className={classes.ske} key={index}>
                    <div className={classes.ske__rect}>
                        <Skeleton animation="wave" variant="rect" width="100%" height={200} />
                    </div>
                    <div className={classes.ske__text}>
                        <Skeleton />
                        <Skeleton width="60%" />
                        <Skeleton width="60%" />
                    </div>
                </div>
            ))}

        </div>
    );
};

export default SkeletonCard;