import { NavLink } from "react-router-dom";
import "./Searchbar.css";
const SerchBar = () => {
    return(
        <div className="search">
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to ="/country" activeClassName="active">Country</NavLink></li>
            </ul>
        </div>
    )
}

export default SerchBar