import React from 'react';
import MaterialTable from 'material-table';
import Loader from '../Components/loader'
import Forbidden from '../Components/Forbidden';
import Snakbar from '../Components/Snakbar';
import {Button, Grid} from '@material-ui/core';
import './Network.scss'
import permissionHelper from '../Auth/PermissionHelper';
import '../index.scss'
import ClearAllIcon from '@material-ui/icons/ClearAll';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';


export default class Networks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            network: [],
            columns: [
                { title: 'Id', field: 'id', editable:'onAdd'  },
                { title: 'Name', field: 'name' },
                { title: 'Started', field: 'started' },
                { title: 'Destroy', field: 'destroy' },
            ],
            snakType: "info",
            snakOpen: false,
            snakDesc: "Nothing yet",
            selectedRow: null,
            read: false,
            delete: false,
            create: false,
            update: false,
            networkError: "Network Error, Please check your network connection and try again",

        }
        this.snakClose = this.snakClose.bind(this)
        this.resetData = this.resetData.bind(this)
        this.clearData = this.clearData.bind(this)

    }
    snakClose = () => {
        this.setState({ snakOpen: false })
    }
    clearData = () => {
        this.props.resetNetworks();
        this.setState({ snakDesc: "Network details Cleared" })
        this.setState({ snakType: "warning" })
        this.setState({ snakOpen: true })
    }
    resetData = () => {
        this.props.fetchNetworks();
        this.setState({ snakDesc: "Network details Reseted" })
        this.setState({ snakType: "info" })
        this.setState({ snakOpen: true })
    }
    addDataHandler = (newData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                this.props.createNetwork(newData);
                this.setState({ snakDesc: "Network id with" + newData.id + " has been succesfully created" })
                this.setState({ snakType: "success" })
                this.setState({ snakOpen: true })
            }, 400);
        })
    deleteDataHandler = (newData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                this.props.deleteNetwork(newData.id)
                this.setState({ snakDesc: "Network id with" + newData.id + " has been succesfully Deleted" })
                this.setState({ snakType: "error" })
                this.setState({ snakOpen: true })

            }, 400);
        })

    componentDidMount() {

        this.props.fetchNetworks();
        this.setState({ read: permissionHelper.checkPermission("NETWORK", "READ") });
        this.setState({ delete: permissionHelper.checkPermission("NETWORK", "DELETE") });
        this.setState({ create: permissionHelper.checkPermission("NETWORK", "CREATE") });
        this.setState({ update: permissionHelper.checkPermission("NETWORK", "UPDATE") });

    }
    render() {
        let { network, error, loading, updateNetwork } = this.props;
        return (

            <div>
                {error ? <h4>{<Snakbar show={true} desc={this.state.networkError} snakType="warning" closeSnak={this.snakClose} />} </h4> : null}

                {loading ?
                    <Loader /> :
                    <div>
                        {this.state.read ? 
                        <MaterialTable
                            title="Network Details"
                            columns={this.state.columns}
                            data={network}
                            onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                            options={{
                                exportButton: true,
                                // filtering:true,
                                rowStyle: rowData => ({
                                    backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
                                })
                            }}
                            editable={{
                                onRowAdd: this.state.create && this.addDataHandler,
                                onRowUpdate: this.state.update && ((newData, oldData) =>
                                    new Promise((resolve) => {
                                        setTimeout(() => {
                                            resolve();
                                            const data = [...network];
                                            data[data.indexOf(oldData)] = newData;
                                            updateNetwork(newData, { ...network, data }, newData.id)
                                            this.setState({ snakDesc: "Network id with" + newData.id + " has been succesfully Updated" })
                                            this.setState({ snakType: "info" })
                                            this.setState({ snakOpen: true })
                                        }, 400);
                                    })),
                                onRowDelete: this.state.delete && this.deleteDataHandler,
                            }}
                        /> 
                        : <Forbidden/>}
                    </div>
                }
                {this.state.read && <Grid container spacing={2} direction="row" justify="center" alignItems="center" className="buttons">
                    <Grid item >
                        <Button className="resetData" variant="contained" startIcon={<RotateLeftIcon />} onClick={() => this.resetData()}>Reset Data</Button>
                    </Grid>
                    <Grid item >
                        <Button className="clearData" variant="contained" startIcon={<ClearAllIcon />} onClick={() => this.clearData()}>Clear Data</Button>
                    </Grid>
                </Grid>
                }
                <Snakbar show={this.state.snakOpen} desc={this.state.snakDesc} snakType={this.state.snakType} closeSnak={this.snakClose} />
            </div>
        )
    }


}