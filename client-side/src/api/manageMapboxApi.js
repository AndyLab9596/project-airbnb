import axiosMapbox from './axiosMapbox';

const manageMapboxApi = {

    get(params) {
        const url = '/locations';
        return axiosMapbox.get(url, { params })
    },



}

export default manageMapboxApi;
