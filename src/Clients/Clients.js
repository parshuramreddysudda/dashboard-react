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
                { title: 'Id', field: 'id', editable: 'onAdd' },
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
        // this.snakClose = this.snakClose.bind(this)
        this.resetData = this.resetData.bind(this)
        this.clearData = this.clearData.bind(this)

    }
    snakClose = () => {
        this.setState({ snakOpen: false })
        return Promise.resolve();
    }
    clearData = () => {
        this.props.resetClients();
        this.setState({
            snakDesc: "Clients details Cleared",
            snakType: "warning",
            snakOpen: true
        })
        return Promise.resolve();
    }
    resetData = () => {
        this.props.fetchClients();
        this.setState({
            snakDesc: "Clients details Reseted",
            snakType: "info",
            snakOpen: true
        })
        return Promise.resolve();
    }

    addDataHandler = (newData) =>
        new Promise((done) => {
            this.props.createClient(newData);
            this.setState({
                snakDesc: "Clients id with " + newData.id + " has been succesfully created",
                snakType: "success",
                snakOpen: true
            })
            done()
            return Promise.resolve();
        })
    deleteDataHandler = (newData) =>
        new Promise((done) => {
            this.props.deleteClient(newData.id)
            this.setState({
                snakDesc: "Clients id with " + newData.id + " has been succesfully Deleted",
                snakType: "error",
                snakOpen: true
            })
            done()
            return Promise.resolve();
        })
    updateDataHandler = ((newData, oldData) =>
        new Promise((done) => {
            const clients=this.props.clients
            const data = [...clients];
            data[data.indexOf(oldData)] = newData;
            this.props.updateClient(newData, { ...clients, data }, newData.id)
            this.setState({
                snakDesc: "Clients id with " + newData.id + " has been succesfully Updated",
                snakType: "info",
                snakOpen: true
            })
            done()
            return Promise.resolve();
        }))

    componentDidMount() {
        this.props.fetchClients();
        this.setState({
            read: permissionHelper.checkPermission("CLIENTS", "READ"),
            delete: permissionHelper.checkPermission("CLIENTS", "DELETE"),
            create: permissionHelper.checkPermission("CLIENTS", "CREATE"),
            update: permissionHelper.checkPermission("CLIENTS", "UPDATE")
        });
    }
    render() {
        let { clients, loading, error } = this.props;
        return (

            <>
                {error && <h4 className="errorClass">{<Snakbar show={true} desc={this.state.networkError} snakType="warning" closeSnak={this.snakClose} />} </h4>}
                {loading ?
                    <Loader /> :
                    <div className="materialTable">
                        {this.state.read ?
                            <MaterialTable
                                title="Clients Details"
                                columns={this.state.columns}
                                data={clients}
                                onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                                options={{
                                    exportButton: true,
                                    isLoading: true,
                                    // filtering:true,
                                    rowStyle: rowData => ({
                                        backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
                                    })
                                }}
                                editable={{
                                    onRowAdd: this.state.create && this.addDataHandler,
                                    onRowUpdate: this.state.update && this.updateDataHandler,
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
                <Snakbar
                    show={this.state.snakOpen}
                    desc={this.state.snakDesc}
                    snakType={this.state.snakType}
                    closeSnak={this.snakClose}
                />
            </>
        )
    }


}