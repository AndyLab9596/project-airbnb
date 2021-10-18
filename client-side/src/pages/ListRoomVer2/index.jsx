import React from 'react';
import { useParams } from 'react-router';
import useStyles from "./style"

const ListRoomVer2 = () => {
    const classes = useStyles();

    const param = useParams()

    return (
        <div className={classes.root}>

            {/* Content */}
            <div className={classes.content}>
                <p>Hơn 300 chỗ ở</p>
                <h3>Chỗ ở tại Thành Phố </h3>
            </div>

            {/* Map */}
            <div className={classes.map}>
                <div className={classes.mapBox}>

                    {/* Component mapBox */}

                </div>
            </div>

        </div>
    );
};

export default ListRoomVer2;