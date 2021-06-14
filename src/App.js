import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import CustomerForm from '../src/Screens/CustomerForm';
import CustomerList from '../src/Screens/CustomerList';
import CustomerShowInfo from '../src/Screens/CustomerShowInfo';
import CustomerEditForm from '../src/Screens/CustomerEditForm';
function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="CustomerList" />
        <Route path="/CustomerList">
          <CustomerList />
        </Route>
        {/* <Route path="/CustomerList">
          <CustomerList />
        </Route> */}
        <Route exact path="/CustomerForm">
          <CustomerForm />
        </Route>
        <Route exact path="/CustomerShowInfo">
          <CustomerShowInfo />
        </Route>
        <Route exact path="/CustomerEditForm/:id">
          <CustomerEditForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
