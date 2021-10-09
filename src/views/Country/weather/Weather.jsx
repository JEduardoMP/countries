import { useEffect, useState } from "react";

// import useFetchData from "../../../hooks/useFetchData";
const WeatherView = ({capital, name}) => {
    const [result, setResult] = useState([]);
    // console.log(city.capital)

    
    // const {weatherConsult} = useFetchData(`api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${APIkey}`);
    
    const handleWeather = async () => {
        try {
            const APIkey = "fbe6ecc13f3bedd1124dc5d4a3f7daef";
            const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${APIkey}`);
            const result = await response.json();
            setResult(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleWeather();
    },[])
    

    return(
        <h1>
            hola
        </h1>
    )

}

export default WeatherView;