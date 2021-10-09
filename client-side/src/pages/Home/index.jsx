import React from "react";
import useStyles from "./style";
import HomeBanner from "./HomeBanner";
import ExploreNearby from "./ExploreNearby";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeBanner />
      <ExploreNearby />
    </div>
  );
};

export default Home;
