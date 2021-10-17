import axios from "axios";
import { MAPBOX_URL } from "../constants/config";

const axiosMapbox = axios.create({
    baseURL: MAPBOX_URL,
    headers: {

    }
})