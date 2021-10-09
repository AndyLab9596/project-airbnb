import axiosClient from "./axiosClient";

const manageAuthApi = {
    login(data) {
        const url = '/auth/login';
        return axiosClient.post(url, data)
        // data {email: '', password: ''}
    },
    register(data) {
        const url = '/auth/register';
        return axiosClient.post(url, data)
        // data {name: '', email: '', password: '', phone: '', birthday: '', gender: * chú ý để là true, address: ''}
    },
};

export default manageAuthApi