import React, { Component } from 'react'
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
import permissionHelper from './Auth/PermissionHelper';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isPermission: true,
    }
  }
  componentDidMount() {
    this.setState({
      isPermission: permissionHelper.checkPermission("DASHBOARD", "READ")
    },()=>{
      console.log("isPermission",this.state.isPermission);
    })
  }

  render() {
    return (
      <Router>
        <div >
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
                {this.state.isPermission && <Nav className="navLink"><Link className="link home-link" to="/access">4D Access</Link></Nav>}
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
    )
  }
}