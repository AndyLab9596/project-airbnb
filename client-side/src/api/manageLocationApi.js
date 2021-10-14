import axiosClient from './axiosClient';

const manageLocationApi = {

    getAll(params) {
        const url = '/locations';
        return axiosClient.get(url, { params })
    },

    get(id) {
        const url = `/locations/${id}`;
        return axiosClient.get(url)
    },

}

export default manageLocationApi;
