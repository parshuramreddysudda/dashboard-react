import React from 'react';
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

const useStyles = makeStyles({
  root: {
    flex: 1
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Navbar className="navBar "  bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/dashboard"><img
              alt=""
              src={react}
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
            React Redux
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto ">
              <Nav className="navLink"><Link className="link" to="/dashboard">Dashboard</Link></Nav>
              <Nav className="navLink"><Link className="link" to="/access">4D Access</Link></Nav>
              <Nav className="navLink"><Link className="link" to="/overview">Overview</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          {/* <Redirect exact from="/" to="dashboard" /> */}
          <Route exact  path="/">
            <Dashboard />
          </Route>
          <Route exact  path="/dashboard">
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
export default App