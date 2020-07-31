import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import react from '../src/assets/images/react.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Access from './Components/Access'
import Overview from './Overview'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthHelper from './Auth/AuthHelper';
import permissionHelper from './Auth/PermissionHelper';

const useStyles = makeStyles({
  root: {
    flex: 1
  },
});
// console.log("role is ", AuthHelper.setAuthRole())
function App() {
  const classes = useStyles();
  var isPermission = true;
  
  useEffect(() => {
    AuthHelper.setAuthRole();
    isPermission = permissionHelper.checkPermission("APP", "READ");
    // console.log("Auth permissionis ", isPermission)
  });

  return (

    <Router>
      <div className={classes.root}>
        <Navbar className="navBar" id="navbar" bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/dashboard"><img
              alt=""
              src={react}
              width="30"
              height="30"
              className="d-inline-block align-top home-link"
            />{' '}
            React Redux
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto ">
              <Nav className="navLink"><Link className="link home-link" to="/dashboard">Dashboard</Link></Nav>
              {isPermission && <Nav className="navLink"><Link className="link home-link" to="/access">4D Access</Link></Nav>}
              <Nav className="navLink"><Link className="link home-link" to="/overview">Overview</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Redirect exact from="/" to="dashboard" /> */}
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/access">
          <Access />
        </Route>
        <Route exact path="/overview">
          <Overview />
        </Route>
      </div>
    </Router>
  );

}
export default App;