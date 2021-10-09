import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
// import ErrorPage from "../Error404/ErrorPage";

import "../../Styles/Styles.css"

const HomePage = ({content}) => {
    const [name, setName] = useState(null);
    const [resultSearch, setResultSearch] = useState([]);

    
    const filterApp = () => {
        const container = content.map( e => (e.name))
        setResultSearch(container.filter(e => e.name === name))
    }
    useEffect(() => {
        filterApp();
    }, [name]);

    console.log(resultSearch);

    return(
        <div className="center">
            <input
            style={{padding: '0.6rem', width: '80%', textAlign: 'center', borderRadius: '100px', border: 'solid goldenrod'}}
            type="text" 
            placeholder="Search a country"
            onChange={(e) => setName(e.target.value)}
            />
            <div className="grid">
            {name && name ? resultSearch (
                content.map( cont => (
                    <h2>{cont.name}</h2>
                ))
                ) : (
                content.map( content => (
                    <>
                    <div>
                        <h2 className="subtitle-container">{content.name}</h2>
                        <Link to={`/country/${content.name}`}>
                            <img src={content.flag} alt={content.flag} />
                        </Link>
                    </div>
                    <br />
                    </>
                )  
                )
            )}
            </div>
        </div>
    )
}

export default HomePage;