import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './dashboard.scss'
import OverviewAmchart from '../Components/Amcharts/Charts'
import AuthHelper from '../Auth/AuthHelper'
import GaugeChart from '../Components/Amcharts/Gauge'
import Container from '@material-ui/core/Container';

export default class Machine extends React.Component {

    constructor(props) {
        super(props)
        AuthHelper.setAuthRole();
    }

    render() {
        return (
            <div className="topMargin">
                <Container maxWidth="xl">
                    <Paper className="paper"><OverviewAmchart /></Paper>
                </Container>
            </div>
        )
    }
}