import Axiosinstance from "../helpers/AxiosInstance";

export async function Weatherfetch(key , cityname){
    try {
        const response = await Axiosinstance.get(`/2.5/weather?q=${cityname}&appid=${key}`)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}