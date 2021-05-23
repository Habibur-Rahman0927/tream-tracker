import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './Component/Home/Home';
import TeamDetails from './Component/TeamDetails/TeamDetails';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/:idTeam">
          <TeamDetails></TeamDetails>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
{/* https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604 */ }
