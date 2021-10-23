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
    deleteLocation(id) {
        const url = `/locations/${id}`;
        return axiosClient.delete(url);
    },
    postCreateLocation(data) {
        const url = `/locations`
        return axiosClient.post(url, data)
    }

}

export default manageLocationApi;
