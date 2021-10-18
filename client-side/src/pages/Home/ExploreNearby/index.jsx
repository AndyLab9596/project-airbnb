import { Container, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAction } from "../../../store/action/createAction/createAction";
import { getLocations } from "../../../store/action/LocationAction";
import { SEARCH_RESULT } from "../../../store/types/SearchType";
import useStyles from "./style";

const ExploreNearby = () => {


  const history = useHistory();
  const dispatch = useDispatch();
  const { locations } = useSelector(state => state.LocationReducer);


  const handleCityClick = async (locationId, location) => {
    const checkInDate = moment(new Date()).format('Do MMM');
    const checkOutDate = moment(new Date()).add(1, 'days').format('Do MMM')
    // console.log('checkOutDate', checkOutDate)
    const searchBarValue = {
      location: location,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guest: 1
    }
    try {
      await dispatch(createAction(SEARCH_RESULT, searchBarValue))
      history.push(`/list/${locationId}`)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    dispatch(getLocations())

  }, [dispatch])


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth={false} className={classes.places}>
        <Typography variant="h4" className={classes.places__title}>
          Khám phá những điểm đến gần đây
        </Typography>

        <Grid container spacing={2}>
          {locations?.map((city, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className={classes.cities} onClick={() => handleCityClick(city._id, city)}>
                <img src={city.image} alt="city" className={classes.city__img} />
                <div className={classes.city__info}>
                  <Typography variant="subtitle2">{city.province}</Typography>
                  <p>{city.name}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ExploreNearby;
