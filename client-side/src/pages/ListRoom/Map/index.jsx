import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import { useParams } from "react-router";
import manageLocationApi from "../../../api/manageLocationApi";
import { MAPBOX_TOKEN } from "../../../constants/config";
import Pin from "./Pin";
import useStyles from "./style";

const fakeRentRooms = [
  {
    _id: "61698b62efe193001c0a5ba3",
    name: "Nha Trang Panorama",
    guests: 3,
    bedRoom: 2,
    bath: 2,
    description: "Trên cả tuyệt vời",
    price: 500000,
    elevator: true,
    hotTub: true,
    pool: true,
    indoorFireplace: false,
    dryer: true,
    gym: true,
    kitchen: false,
    wifi: true,
    heating: false,
    cableTV: true,
    locationId: {
      name: "Khu phố tây Trần Phú",
      province: "Nha Trang",
      country: "viet nam",
      valueate: 8,
      image:
        "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg",
    },
    __v: 0,
    image:
      "https://airbnb.cybersoft.edu.vn/public/images/room/1634308330102_panoramanhatrang.jpg",
  },
  {
    _id: "61698c1eefe193001c0a5ba8",
    name: "Nha Trang Galina Hotel",
    guests: 5,
    bedRoom: 3,
    bath: 2,
    description: "Dịch vụ rất tốt",
    price: 700000,
    elevator: true,
    hotTub: true,
    pool: true,
    indoorFireplace: true,
    dryer: true,
    gym: true,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: {
      name: "Khu phố tây Trần Phú",
      province: "Nha Trang",
      country: "viet nam",
      valueate: 8,
      image:
        "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg",
    },
    __v: 0,
    image:
      "https://airbnb.cybersoft.edu.vn/public/images/room/1634308382098_panoramanhatrang.jpg",
  },
  {
    _id: "61698c5fefe193001c0a5baa",
    name: "Nha Trang Cẩm Tiên Hotel",
    guests: 2,
    bedRoom: 1,
    bath: 1,
    description: "Phòng hơi nhỏ",
    price: 300000,
    elevator: false,
    hotTub: false,
    pool: false,
    indoorFireplace: false,
    dryer: true,
    gym: true,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: {
      name: "Khu phố tây Trần Phú",
      province: "Nha Trang",
      country: "viet nam",
      valueate: 8,
      image:
        "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg",
    },
    __v: 0,
    image:
      "https://airbnb.cybersoft.edu.vn/public/images/room/1634308467196_camtienhotel.jpg",
  },
  {
    _id: "61698ceeefe193001c0a5bae",
    name: "Mường Thanh Nha Trang",
    guests: 4,
    bedRoom: 2,
    bath: 2,
    description: "Phòng nội thất đẹp",
    price: 800000,
    elevator: true,
    hotTub: false,
    pool: true,
    indoorFireplace: false,
    dryer: true,
    gym: true,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: {
      name: "Khu phố tây Trần Phú",
      province: "Nha Trang",
      country: "viet nam",
      valueate: 8,
      image:
        "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg",
    },
    __v: 0,
    image:
      "https://airbnb.cybersoft.edu.vn/public/images/room/1634308509402_muongthanhnhatrang.jpg",
  },
  {
    _id: "61698d2befe193001c0a5bb0",
    name: "Khách sạn Thiên Nga",
    guests: 2,
    bedRoom: 1,
    bath: 1,
    description: "Khách sạn khá cũ",
    price: 200000,
    elevator: false,
    hotTub: true,
    pool: true,
    indoorFireplace: false,
    dryer: true,
    gym: true,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: {
      name: "Khu phố tây Trần Phú",
      province: "Nha Trang",
      country: "viet nam",
      valueate: 8,
      image:
        "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg",
    },
    __v: 0,
    image:
      "https://airbnb.cybersoft.edu.vn/public/images/room/1634308573629_thienngahotel.jpg",
  },
  {
    _id: "61698d46efe193001c0a5bb2",
    name: "Khách sạn Hoàng Sa",
    guests: 1,
    bedRoom: 1,
    bath: 1,
    description: "Khách sạn khá cũ",
    price: 100000,
    elevator: false,
    hotTub: true,
    pool: true,
    indoorFireplace: false,
    dryer: true,
    gym: true,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: {
      name: "Khu phố tây Trần Phú",
      province: "Nha Trang",
      country: "viet nam",
      valueate: 8,
      image:
        "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg",
    },
    __v: 0,
    image:
      "https://airbnb.cybersoft.edu.vn/public/images/room/1634308631947_hoangsanhatrang.jpg",
  },
  {
    _id: "61698d73efe193001c0a5bb4",
    name: "Khách sạn Cát Vàng",
    guests: 2,
    bedRoom: 2,
    bath: 2,
    description: "View khách sạn đẹp",
    price: 700000,
    elevator: false,
    hotTub: true,
    pool: true,
    indoorFireplace: false,
    dryer: true,
    gym: true,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: {
      name: "Khu phố tây Trần Phú",
      province: "Nha Trang",
      country: "viet nam",
      valueate: 8,
      image:
        "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg",
    },
    __v: 0,
  },
  {
    _id: "61698f8befe193001c0a5bba",
    name: "Khách sạn Nagar Nha Trang",
    guests: 5,
    bedRoom: 2,
    bath: 2,
    description: "Đồ ăn buffet ngon",
    price: 900000,
    elevator: true,
    hotTub: true,
    pool: true,
    indoorFireplace: true,
    dryer: true,
    gym: true,
    kitchen: true,
    wifi: true,
    heating: true,
    cableTV: true,
    locationId: {
      name: "Khu phố tây Trần Phú",
      province: "Nha Trang",
      country: "viet nam",
      valueate: 8,
      image:
        "https://airbnb.cybersoft.edu.vn/public/temp/1634304173728_nhatrang.jpg",
    },
    __v: 0,
    image:
      "https://airbnb.cybersoft.edu.vn/public/images/room/1634308710646_nagarnhatrang.jpg",
  },
];

const Map = ({ arrListRoom }) => {
  const classes = useStyles();
  const [locationInfo, setLocationInfo] = useState({});
  const [locationCoordinate, setLocationCoordinate] = useState({});
  const [markerLocation, setMarkerLocation] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: locationCoordinate.latitude,
    longitude: locationCoordinate.longitude,
    zoom: 12,
  });

  const params = useParams();
  const locationId = params.locationId;
  const searchTerm = locationInfo.province;

  console.log("searchTerm", searchTerm);
  // This is used to get the current location

  useEffect(() => {
    (async () => {
      try {
        const res = await manageLocationApi.get(locationId);
        setLocationInfo(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // This is used to take the location into Mapbox Url in order to locate the center coordinate of the map
  useEffect(() => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?country=vn&limit=5&proximity=-73.990593%2C40.740121&access_token=${MAPBOX_TOKEN}`
      )
      .then(function (response) {
        // handle success
        console.log(response);

        setViewport({
          ...viewport,
          longitude: response.data.features?.[0]?.center?.[0],
          latitude: response.data.features?.[0]?.center?.[1],
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [searchTerm]);

  useEffect(() => {
    let newMarkerLocation = [];
    arrListRoom.map((room) => {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${room.name}.json?country=vn&limit=${fakeRentRooms.length}&proximity=-73.990593%2C40.740121&types=poi&access_token=${MAPBOX_TOKEN}`
        )
        .then(function (response) {
          // handle success
          console.log("rent room", response);
          newMarkerLocation.push({
            ...room,
            longitude: response.data.features?.[0].center?.[0],
            latitude: response.data.features?.[0].center?.[1],
          });
          setMarkerLocation(newMarkerLocation);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    });
  }, []);

  const navControlStyle = {
    right: 10,
    top: 10,
  };

  console.log(markerLocation);

  return (
    <div className={classes.root}>
      <ReactMapGL
        {...viewport}
        className={classes.ReactMapGL}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/thienvy95/ckuvywfwtntgx17pr1vnuxbj8"
        mapboxApiAccessToken="pk.eyJ1IjoidGhpZW52eTk1IiwiYSI6ImNrdXFkcTlycjByem8yeHBnbXVmNmwwMzQifQ.rLTXpQcU4iZjpeNw8DblUQ"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <NavigationControl style={navControlStyle} />

        {markerLocation.map((location, index) => (
          <div key={location._id}>
            <Pin location={location} />
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
