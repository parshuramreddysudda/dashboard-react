import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './dashboard.scss'
import OverviewAmchart from './Charts/OverviewChart'
import AuthHelper from '../Auth/AuthHelper'
import Container from '@material-ui/core/Container';
import BarChart from './Charts/BarChart'

export default class Machine extends React.Component {

    constructor(props) {
        super(props)
        AuthHelper.setAuthRole();
    }
    render() {
        return (
            <div className="topMargin">
                <Container maxWidth="xl">
                    <Paper className="paper">
                        <OverviewAmchart />
                    </Paper>
                    <Grid className="dashboardCharts" container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Paper>
                                <BarChart
                                    graphType={"Clients"}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper >
                                <BarChart
                                    graphType={"Applications"}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper>
                                <BarChart
                                    graphType={"Machines"}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

            </div>
        )
    }
}