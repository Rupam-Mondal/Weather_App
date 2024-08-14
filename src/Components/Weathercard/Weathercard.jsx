import { useQuery } from "react-query"
import { Weatherfetch } from "../../Services/Weatherfetch"
import { API_KEY } from "../../helpers/Constants"

function Weathercard(){
    const {data , isLoading , isError , error} = useQuery(['weather'] , () => Weatherfetch(API_KEY , 'kolkata'))
    function temp(t){
        const tempCelsius = Math.round(t - 273.15);
        return tempCelsius
    }
    function speed(s){
        const windSpeedKmH = Math.round(s * 3.6);
        return windSpeedKmH
    }
    return (
        <>
            {data && 
                <div className="max-w-sm w-full p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold">{data.name}</h2>
                            <p className="text-sm">Monday, 10:00 AM</p>
                        </div>
                        <div className="text-white text-right">
                            <p className="text-4xl font-bold">{temp(data.main.temp)}</p>
                            <p className="text-sm">{data.weather[0].main}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="text-center">
                            <p className="text-white text-sm">Wind</p>
                            <p className="text-white font-bold">{speed(data.wind.speed)}km/hr</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-sm">Humidity</p>
                            <p className="text-white font-bold">{data.main.humidity}</p>
                        </div>
                        <div className="text-center">
                            <p className="text-white text-sm">Feels like</p>
                            <p className="text-white font-bold">{temp(data.main.feels_like)}</p>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
export default Weathercard