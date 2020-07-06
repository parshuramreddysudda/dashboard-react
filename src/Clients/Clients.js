import React from 'react';
import MaterialTable from 'material-table';
import Snakbar from '../Components/Snakbar';
import { Grid, Button } from '@material-ui/core';
import Loader from '../Components/loader';
import './Clients.scss'
import '../index.scss'
import permissionHelper from '../Auth/PermissionHelper';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Forbidden from '../Components/Forbidden';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

export default class Clients extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            columns: [
                { title: 'Id', field: 'id',editable:'onAdd' },
                { title: 'Name', field: 'name' },
                { title: 'State', field: 'state' },
                { title: 'Created', field: 'created' },
                { title: 'Updated', field: 'updated' },
                { title: 'Type', field: 'type' },
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
        this.props.resetClients();
        this.setState({ snakDesc: "Clients details Cleared" })
        this.setState({ snakType: "warning" })
        this.setState({ snakOpen: true })
    }
    resetData = () => {
        this.props.fetchClients();
        this.setState({ snakDesc: "Clients details Reseted" })
        this.setState({ snakType: "info" })
        this.setState({ snakOpen: true })
    }

    addDataHandler = (newData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                this.props.createClient(newData);
                this.setState({ snakDesc: "Clients id with" + newData.id + " has been succesfully created" })
                this.setState({ snakType: "success" })
                this.setState({ snakOpen: true })
            }, 400);
        })
    deleteDataHandler = (newData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                this.props.deleteClient(newData.id)
                this.setState({ snakDesc: "Clients id with" + newData.id + " has been succesfully Deleted" })
                this.setState({ snakType: "error" })
                this.setState({ snakOpen: true })

            }, 400);
        })

    componentDidMount() {

        this.props.fetchClients();
        this.setState({ read: permissionHelper.checkPermission("CLIENTS", "READ") });
        this.setState({ delete: permissionHelper.checkPermission("CLIENTS", "DELETE") });
        this.setState({ create: permissionHelper.checkPermission("CLIENTS", "CREATE") });
        this.setState({ update: permissionHelper.checkPermission("CLIENTS", "UPDATE") });
    }
    render() {
        let { clients, loading, error, updateClient } = this.props;
        return (

            <>
                {error && <h4>{<Snakbar show={true} desc={this.state.networkError} snakType="warning" closeSnak={this.snakClose} />} </h4>}
                {loading ?
                    <Loader /> :
                    <div>
                        {this.state.read ?
                            <MaterialTable
                                title="Clients Details"
                                columns={this.state.columns}
                                data={clients}
                                onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                                options={{
                                    exportButton: true,
                                    isLoading:true,
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
                                                const data = [...clients];
                                                data[data.indexOf(oldData)] = newData;
                                                updateClient(newData, { ...clients, data }, newData.id)
                                                this.setState({ snakDesc: "Clients id with" + newData.id + " has been succesfully Updated" })
                                                this.setState({ snakType: "info" })
                                                this.setState({ snakOpen: true })
                                            }, 400);
                                        })),
                                    onRowDelete: this.state.delete && this.deleteDataHandler,
                                }}
                            /> : <Forbidden />
                        }
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
            </>
        )
    }


}