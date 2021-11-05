import axiosClient from "./axiosClient";

const manageTicketApi = {
    getTicketRooms(locationId) {
        const url = `/tickets/${locationId}`
        return axiosClient.get(url)
    },
  

};

export default manageTicketApi;
