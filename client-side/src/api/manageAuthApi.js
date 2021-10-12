import axiosClient from "./axiosClient";

const manageAuthApi = {
    login(data) {
        const path = '/auth/login';
        return axiosClient.post(path, data)
        // data {email: '', password: ''}
    },
    register(data) {
        const path = '/auth/register';
        return axiosClient.post(path, data)
        // data {name: '', email: '', password: '', phone: '', birthday: '', gender: * chú ý để là true, address: ''}
    },
};

export default manageAuthApi