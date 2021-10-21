import axios from "axios";
import { MAPBOX_URL } from "../constants/config";

const axiosMapbox = axios.create({
    baseURL: "https://api.mapbox.com",
    headers: {

    }
})

export default axiosMapbox;