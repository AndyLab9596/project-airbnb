import React from 'react';
import axios from 'axios';
import fs from 'fs';

const TestingApi = () => {


    // var config = {
    //     method: 'get',
    //     url: 'https://airbnb.cybersoft.edu.vn/api/locations',
    //     headers: {
    //         'tokenByClass': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOSIsIkhldEhhblN0cmluZyI6IjI3LzAxLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0MzI0MTYwMDAwMCIsIm5iZiI6MTYxNjM0NjAwMCwiZXhwIjoxNjQzMzg5MjAwfQ.NEQRF8SKORq7R7kYbYCCO9ZZXYxTWlbaTc2wxXWMfiw'
    //     }
    // };

    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // var axios = require('axios');
    // var FormData = require('form-data');
    // var data = new FormData();
    // data.append('room', fs.createReadStream('/src/assets/img/stayhome2.png'));

    // var config = {
    //     method: 'post',
    //     url: 'https://airbnb.cybersoft.edu.vn/api/rooms/upload-image/6166562edc423b001dd9c0cf',
    //     headers: {
    //         'tokenByClass': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOSIsIkhldEhhblN0cmluZyI6IjI3LzAxLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0MzI0MTYwMDAwMCIsIm5iZiI6MTYxNjM0NjAwMCwiZXhwIjoxNjQzMzg5MjAwfQ.NEQRF8SKORq7R7kYbYCCO9ZZXYxTWlbaTc2wxXWMfiw',
    //         'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYyNzY0NGRkNWY3MjAwMWQ4Njg2ZGQiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInR5cGUiOiJBRE1JTiIsImlhdCI6MTYzNDExNTA3M30.rzovaxkEE7VMEr1vR9PE3Ht4J88tn4zHWMiHTHuaplQ',
    //         ...data.getHeaders()
    //     },
    //     data: data
    // };

    // axios(config)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });



    return (
        <div>
            <h3>Testing API</h3>

        </div>
    );
};

export default TestingApi;