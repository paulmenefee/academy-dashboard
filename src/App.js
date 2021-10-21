
import './App.css';
import { BrowserRouter as Router, Route }from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import ListCohort from "./components/list-cohorts.component";
import EditCohort from "./components/edit-cohort.component";
import CreateCohort from "./components/create-cohort.component";
import CreateUser from "./components/create-user.component";

import useGoogleCharts from './components/charts/useGoogleCharts';


function App() {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ ListCohort} />
        <Route path="/edit/:id" exact component={EditCohort} />
        <Route path="/create" exact component={CreateCohort} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
