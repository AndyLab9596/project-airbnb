import { Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLocations } from "../../../store/action/LocationAction";
import useStyles from "./style";

const ExploreNearby = () => {


  const history = useHistory();
  const dispatch = useDispatch();
  const { locations } = useSelector(state => state.LocationReducer);
  console.log(locations)

  const handleCityClick = (locationId) => {
    history.push(`/list/${locationId}`)
  }


  useEffect(() => {
    // (async () => {
    //   try {
    //     const response = await manageLocationApi.getAll()
    //     setCities(response);
    //     dispatch(GET_LOCATIONS, response)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // })()
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
              <div className={classes.cities} onClick={() => handleCityClick(city._id)}>
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
