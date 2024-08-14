import axios from "axios";
import { Openweather } from "./Constants";

const Axiosinstance = axios.create({
    baseURL:Openweather,
})

export default Axiosinstance