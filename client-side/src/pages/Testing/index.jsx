import React from "react";
import { useLocation, useParams } from "react-router";
import queryString from "query-string";
import axios from "axios"
const Testing = () => {
  const location = useLocation();
  console.log("location", location);
  const params = useParams();
  console.log("params", params);

  // const queryParams = queryString.parse(location);
  const queryParams = () => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _checkIn: params._checkIn,
      _checkOut: params._checkOut,
      _adult: Number.parseInt(params._adult),
      _baby: Number.parseInt(params._baby),
      _toddler: Number.parseInt(params._toddler),
    };
  };

  var data = JSON.stringify({
    "roomId": "61699651efe193001c0a5bda",
    "checkIn": "2021-05-11T17:00:00.000+00:00",
    "checkOut": "2021-05-15T17:00:00.000+00:00"
  });

  var config = {
    method: 'post',
    url: 'https://airbnb.cybersoft.edu.vn/api/rooms/booking/',
    headers: {
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYyNzY0NGRkNWY3MjAwMWQ4Njg2ZGQiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInR5cGUiOiJBRE1JTiIsImlhdCI6MTYzNDA5NjU5M30.yWByrXO0cvR6EQjedtIM24CiU6t6eXaZmS2DjtX4O_Q',
      'tokenByClass': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYyNzY0NGRkNWY3MjAwMWQ4Njg2ZGQiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInR5cGUiOiJBRE1JTiIsImlhdCI6MTYzNDA5NjU5M30.yWByrXO0cvR6EQjedtIM24CiU6t6eXaZmS2DjtX4O_Q',
      'Content-Type': 'application/json'
    },
    data: data
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });


  console.log(queryParams());

  return (
    <div>
      <h3>Location</h3>
    </div>
  );
};

export default Testing;
