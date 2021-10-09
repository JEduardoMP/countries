import { useParams, Link } from "react-router";

import WeatherView from "../weather/Weather"

import useFetchData from "../../../hooks/useFetchData";

import "../../../Styles/Styles.css"

const CountryId = () => {

    const name = useParams();
    const {data} = useFetchData(`https://restcountries.eu/rest/v2/name/${name.name}`);
    // console.log(data)

    return(
        data.map(content => (
        <div className="center">
            <h2>{content.name}</h2>
            <img src={content.flag} alt={content.flag} />
            <br />
            <p><b>Lenguages: </b>{content.languages.map( (languages, index, arr) => (
                arr.length > 1 ? <>{languages.name}, </> : <>{languages.name}.</>
            ))} </p>
            <p><b>Borders: </b>{content.borders.map( (border, i, arr) => (
                arr.length > 1 ? <>{border}, </> : <>{border}.</>
            ))}</p>
            <p><b>Capital: </b>{content.capital}</p>
            <p><b>Population: </b>{content.population}</p>
            <p><b>Currencies: </b>{content.currencies.map( currency => (
                <>Code: {currency.code}, Name: {currency.name}</>
            ))}</p>
                <button>Weather</button>
            <WeatherView country={content.name} capital={content.capital}/>
        </div>
        ))
    )
}

export default CountryId