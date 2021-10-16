import axiosClient from './axiosClient';

const manageListApi = {

    getListRoom(id) {
        const url = `/rooms?locationId=${id}`;
        return axiosClient.get(url)
    },



}

export default manageListApi;
