import React from 'react';
import './App.css';
import UserForm from './components/userForm';
import PatientList from './components/PatientList';
import Services from './components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="cls_naviCont">
        <ul>
          <li>
            <Link to="/">Next to kin</Link>
          </li>
          <li>
            <Link to="/list">Duplication check</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <UserForm />
          </Route>
          <Route path="/list">
            <PatientList />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
