import React from "react";
import useStyles from "./style";
import HomeBanner from "./HomeBanner";
import ExploreNearby from "./ExploreNearby";
import News from "./News";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeBanner />
      <ExploreNearby />
      <News />
    </div>
  );
};

export default Home;
