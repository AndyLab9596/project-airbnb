import StarIcon from '@material-ui/icons/Star';
import React, { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import useStyles from "./style";

const Pin = ({ location }) => {
    const classes = useStyles()
    const [showPopup, togglePopup] = useState(false);


    return (
        <div className={classes.root}>
            {showPopup && (
                <Popup
                    className={classes.popupComponent}
                    tipSize={0}
                    latitude={location.latitude}
                    longitude={location.longitude}
                    closeButton={false}
                    closeOnClick={true}
                    onClose={() => togglePopup(false)}
                    offsetTop={10}
                    anchor="left" >
                    <div className={classes.popup}>
                        <img src={location.image} alt={location.name}
                            className={classes.popup__img} />
                        <div className={classes.popup__content}>
                            <div className={classes.popup__content__top}>
                                <StarIcon className={classes.popup__content__top__icon} />
                                <span>{location.locationId.valueate}</span>
                            </div>
                            <div className={classes.popup__content__title}>
                                <p>{location.name}</p>
                            </div>
                            <p>
                                <span className={classes.popup__content__price}>
                                    {Number.parseInt(location.price / 23000)}$
                                </span>
                                / đêm
                            </p>
                        </div>
                    </div>
                </Popup>
            )}
            <Marker
                className={classes.pinComponent}
                key={location._id}
                latitude={location.latitude}
                longitude={location.longitude}
                offsetLeft={-20}
                offsetTop={-10}
                onClick={() => togglePopup(state => !state)}
            >
                <div className={classes.pin}>
                    <div className={classes.pin__content}>
                        <span>{Number.parseInt(location.price / 23000)}$</span>
                    </div>
                </div>
            </Marker>

        </div>
    );
};

export default Pin;