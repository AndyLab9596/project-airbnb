import React from "react";
import hcmIcon from "../../../assets/img/hcmIcon.webp";
import ntIcon from "../../../assets/img/ntIcon.webp";
import vtIcon from "../../../assets/img/vtIcon.webp";
import pqIcon from "../../../assets/img/pqIcon.webp";
import ctIcon from "../../../assets/img/ctIcon.webp";
import thIcon from "../../../assets/img/thIcon.webp";
import bhIcon from "../../../assets/img/bhIcon.webp";
import prIcon from "../../../assets/img/prIcon.webp";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";

const ExploreNearby = () => {
  const fakeCities = [
    {
      name: "Thành phố Hồ Chí Minh",
      driveHour: "15 phút lái xe",
      img: hcmIcon,
    },
    { name: "Nha Trang", driveHour: "6.5 giờ lái xe", img: ntIcon },
    { name: "Vũng Tàu", driveHour: "2 phút lái xe", img: vtIcon },
    { name: "Phú Quốc", driveHour: "", img: pqIcon },
    { name: "Cần Thơ", driveHour: "3 giờ lái xe", img: ctIcon },
    { name: "Thành phố Tuy Hòa", driveHour: "7,5 giờ lái xe", img: thIcon },
    { name: "Thành phố Biên Hòa", driveHour: "45 phút lái xe", img: bhIcon },
    { name: "Thành phố Phan Rang", driveHour: "5 giờ lái xe", img: prIcon },
  ];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth={false} className={classes.places}>
        <Typography variant="h4" className={classes.places__title}>
          Khám phá những điểm đến gần đây
        </Typography>

        <Grid container spacing={2}>
          {fakeCities.map((city, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className={classes.cities}>
                <img src={city.img} alt="city" className={classes.city__img} />
                <div className={classes.city__info}>
                  <Typography variant="subtitle2">{city.name}</Typography>
                  <p>{city.driveHour}</p>
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
