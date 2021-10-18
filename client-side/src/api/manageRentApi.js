import axiosClient from "./axiosClient";

const manageRentApi = {
    getRentRooms(locationId) {
        const url = `rooms?locationId=${locationId}`
        return axiosClient.get(url)
    }

};

export default manageRentApi;
