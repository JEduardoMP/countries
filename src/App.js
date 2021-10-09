// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Hooks
import useFetchData from "./hooks/useFetchData";

// Views
import CountryId from "./views/Country/id/CountryPerId";
import HomePage from "./views/HomePage/HomePage";
import Country from "./views/Country/Country";
import ErrorPage from "./views/Error404/ErrorPage";

function App() {
  const { data } = useFetchData('https://restcountries.com/rest/v4/all')
  const limit = data.splice(0, 20)
  // console.log(limit)
  return (
    <Router >
        <SerchBar /> 
        <Switch>
          <Route exact path="/">
            <HomePage content={limit} />
          </Route>
          <Route exact path="/country">
            <Country content={limit} />
          </Route>
          <Route exact path="/country/:name" component={CountryId} />
          <Route path="*" component={ErrorPage} />
        </Switch>

      </Router>
  );
};

export default App;
