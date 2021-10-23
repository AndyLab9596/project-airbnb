import { useState, useEffect } from "react";
import manageRentApi from "../../api/manageRentApi";

const useFetch = (locationId) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const paginate = (data) => {
    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(data.length / itemsPerPage);
    const newData = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    });
    return newData;
  };
  // [{} {} {} ... (8 cai)]
  //  [{} 4cai[ [{} 4 cai]] ]
  useEffect(() => {
    (async () => {
      try {
        const res = await manageRentApi.getRentRooms(locationId);
        setData(paginate(res));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [locationId]);

  return { loading, data };
};

export default useFetch;
