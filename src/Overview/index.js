import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './Components/Card';
import { Typography, Paper } from '@material-ui/core';
import './index.scss'
import OverviewServices from './Services/OverviewServices'
import OverviewHelper from './Services/OverviewHelper'

export default class Overview extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            app: [],
            location: [],
            cloud: [],
            machine: [],
        }
    }
    componentDidMount() {

        const { appData, cloudData, machineData, locationData } = OverviewHelper;
        OverviewServices.getAppData().then((responce) => {
            this.setState({
                app: OverviewHelper.dataFormatter(responce.data, appData)
            })
        })
        OverviewServices.getCloudData().then(responce => {
            this.setState({
                cloud: OverviewHelper.dataFormatter(responce.data, cloudData)
            });
        })
        OverviewServices.getMachineData().then(responce => {
            this.setState({
                machine: OverviewHelper.dataFormatter(responce.data, machineData)
            });
        })
        OverviewServices.getLocationData().then(responce => {
            this.setState({
                location: OverviewHelper.dataFormatter(responce.data, locationData)
            });
        })
    }

    render() {
        return (
            <div className="topMargin">
                <Paper >
                    <Grid container spacing={3}>
                        <Grid item xs={3} className="borderRight" >
                            <Typography className="heading" variant="h6"  component="h5" id="machines" > Machines running </Typography>
                            <Card data={this.state.machine} />
                        </Grid>
                        <Grid item xs={3} className="borderRight">
                            <Typography variant="h6" className="heading" component="h5" id="servers"> Servers running </Typography>
                            <Card data={this.state.cloud} />
                        </Grid>
                        <Grid item xs={3} className="borderRight">
                            <Typography variant="h6" component="h5" className="heading" id="framework"> Frameworks running </Typography>
                            <Card data={this.state.app} />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" className="heading" component="h5" id="work"> Works running </Typography>
                            <Card data={this.state.location} />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }
}
