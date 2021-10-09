import React from "react";
import useStyles from "./style";
import HomeBanner from "./HomeBanner";
import ExploreNearby from "./ExploreNearby";
import News from "./News";
import Stay from "./Stay";
import ExploreToExp from "./ExploreToExp";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeBanner />
      <ExploreNearby />
      <Stay />
      <News />
      <ExploreToExp />
    </div>
  );
};

export default Home;
