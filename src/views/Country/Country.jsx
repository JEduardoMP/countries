import { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import useFetchData from "../../hooks/useFetchData";

import "../../Styles/Styles.css"
import "./Country.css"

const Country = ( { content } ) => {

    const [showing, setShowing] = useState([]);
    // const history = useHistory();

    // const handleUrl = () => {
    //     history.push({search:`/${showing}`})
    // }

    // useEffect(() => {
    //     handleUrl();
    // }, [showing])

    const {data} = useFetchData(`https://restcountries.eu/rest/v2/name/${showing}`);
    console.log(data)
    return(
        <>
            <div className="center">
                <form action="">
                    <select onChange={ (e) => {
                        setShowing(e.target.value);
                    }}>
                        <option value="">select any</option>
                        {content.map( (content) =>
                        ( 
                            <option value={content.name}>
                                {content.name} 
                            </option>
                        ) 
                        )}
                    </select>
                </form>
            </div>
            {data.map( content => (
                    <div className="center ">
                        <h2>{content.name}</h2>
                        <img src={content.flag} alt={content.flag} />
                        <Link to={`/country/${content.name}`}><button>More</button></Link>
                    </div>
                )
            )}
        </>
    )
}

export default Country;