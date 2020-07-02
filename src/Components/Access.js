import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { IconButton } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../App.scss';
import ClientContainer from '../Clients/ClientsContainer';
import AppContainer from '../Apps/AppsContainer'
import MachinesContainer from '../Machines/MachinesContainer';
import NetworkContainer from '../Networks/NetworkContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsAppsIcon from '@material-ui/icons/SettingsApplications';
import MachinesOtherIcon from '@material-ui/icons/DevicesOther';

const useStyles = makeStyles({
  root: {
    flex: 1
  },
});

function Access() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
      <Router>
        <AppBar position="sticky">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

          </IconButton>
          <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>

            <BottomNavigationAction
              label="Clients"
              value="Clients"
              icon={<PeopleAltIcon />}
              component={Link}
              to="/access/clients" />

            <BottomNavigationAction
              label="Apps"
              value="Apps"
              icon={<SettingsAppsIcon />}
              component={Link}
              to="/access/app" />

            <BottomNavigationAction
              label="Machines"
              value="Machines"
              icon={<MachinesOtherIcon />}
              component={Link}
              to="/access/machines" />
            <BottomNavigationAction
              label="Networks"
              value="Networks"
              icon={<AssessmentIcon />}
              component={Link}
              to="/access/network" />

          </BottomNavigation>
        </AppBar>
        <Redirect exact from="/access" to="/access/clients" />

        <Route exact path="/access/app"  >
          <AppContainer />
        </Route>
        <Route exact path="/access/clients"  >
          <ClientContainer />
        </Route>
        <Route exact path="/access/machines"  >
          <MachinesContainer />
        </Route>
        <Route exact path="/access/network" >
          <NetworkContainer />
        </Route>
      </Router>

    </div>
  );
}
export default Access;