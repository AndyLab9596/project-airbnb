
import { useMediaQuery, useTheme } from '@material-ui/core';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import manageRentApi from "../../api/manageRentApi";
import DeskTopView from './DeskTopView';
import ListRoomSkeleton from './ListRoomSkeleton';
import ListRoomSkeletonMobile from './ListRoomSkeletonMobile';
import MobileView from './MobileView';
import { useDispatch } from "react-redux";
import { getLocations } from '../../store/action/LocationAction';

const ListRoomVer3 = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const locationSearch = location.search;
    const theme = useTheme();
    const locationParams = useParams();
    const locationId = locationParams.locationId;
    const isDeskTop = useMediaQuery(theme.breakpoints.up("md"));
    const [loading, setLoading] = useState(true);
    const [listRoom, setListRoom] = useState([])

  // filter data
  const initialFilter = {
    guests: 0,
    bedRoom: 0,
    bath: 0,
    elevator: false,
    hotTub: false,
    pool: false,
    indoorFireplace: false,
    dryer: false,
    gym: false,
    kitchen: false,
    wifi: false,
    heating: false,
    cableTV: false,
  };
  const [priceValue, setPriceValue] = useState([0, 1000000]);
  const [filter, setFilter] = useState(initialFilter);
  const filtered = listRoom.filter((item) => {
    if (Object.keys(filter).every((p) => item[p] >= filter[p])) {
      return true;
    }
  });
  const finalFiltered = filtered.filter((item) => {
    if (item.price > priceValue[0] && item.price < priceValue[1]) {
      return true;
    }
  });

  const handleChangePriceValue = (event, newValue) => {
    setPriceValue(newValue);
  };
  const handleChangeInputField = (event) => {
    setPriceValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const resetFilter = () => {
    setFilter(initialFilter);
  };

  const resetPrice = () => {
    setPriceValue([0, 1000000]);
  };


  // paginate
  const paginate = (data) => {
    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(data.length / itemsPerPage);
    const newData = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    });
    return newData;
  };
  const listRoomPaginate = paginate(finalFiltered);

    // dispatch locations for header

    const fetchLocations = useCallback(() => {
        dispatch(getLocations())
    }, [dispatch])

    useEffect(() => {
        fetchLocations()

    }, [])



  useEffect(() => {
    (async () => {
      try {
        const res = await manageRentApi.getRentRooms(locationId);
        setListRoom(res);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [locationId, filter, priceValue, locationSearch]);

  if (loading) {
    return (
      <Fragment>
        {/* Skeleton */}
        {isDeskTop ? <ListRoomSkeleton /> : <ListRoomSkeletonMobile />}
      </Fragment>
    );
  }

  return (
    <div>
      {isDeskTop ? (
        <DeskTopView
          listRoomPaginate={listRoomPaginate}
          setPriceValue={setPriceValue}
          priceValue={priceValue}
          handleChangePriceValue={handleChangePriceValue}
          handleChangeInputField={handleChangeInputField}
          filter={filter}
          setFilter={setFilter}
          resetFilter={resetFilter}
          resetPrice={resetPrice}
        />
      ) : (
        <MobileView
          listRoomPaginate={listRoomPaginate}
          setPriceValue={setPriceValue}
          priceValue={priceValue}
          handleChangePriceValue={handleChangePriceValue}
          handleChangeInputField={handleChangeInputField}
          filter={filter}
          setFilter={setFilter}
          resetFilter={resetFilter}
          resetPrice={resetPrice}
        />
      )}
    </div>
  );
};

export default ListRoomVer3;
