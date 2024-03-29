import React from 'react';
import MaterialTable from 'material-table';
import Loader from '../Components/loader'
import Forbidden from '../Components/Forbidden';
import Snakbar from '../Components/Snakbar';
import { Button, Grid } from '@material-ui/core';
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
                { title: 'Id', field: 'id', editable: 'onAdd' },
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
        return Promise.resolve();
    }
    clearData = () => {
        this.props.resetNetworks();
        this.setState({
            snakDesc: "Network details Cleared",
            snakType: "warning",
            snakOpen: true
        })
        return Promise.resolve();
    }
    resetData = () => {
        this.props.fetchNetworks();
        this.setState({
            snakDesc: "Network details Reseted",
            snakType: "info",
            snakOpen: true
        })
        return Promise.resolve();
    }
    addDataHandler = (newData) =>
        new Promise((done) => {
            this.props.createNetwork(newData);
            this.setState({
                snakDesc: "Network id with " + newData.id + " has been succesfully created",
                snakType: "success",
                snakOpen: true
            })
            done()
            return Promise.resolve();
        })
    deleteDataHandler = (newData) =>
        new Promise((done) => {
            this.props.deleteNetwork(newData.id)
            this.setState({
                snakDesc: "Network id with " + newData.id + " has been succesfully Deleted",
                snakType: "error",
                snakOpen: true
            })
            done()
            return Promise.resolve();
        })
    updateDataHandler = (newData, oldData) => (
        new Promise((done) => {
            const network = this.props.network
            const data = [...network];
            data[data.indexOf(oldData)] = newData;
            this.props.updateNetwork(newData, { ...network, data }, newData.id)
            this.setState({
                snakDesc: "Network id with " + newData.id + " has been succesfully Updated",
                snakType: "info",
                snakOpen: true
            })
            done()
            return Promise.resolve();
        }))

    componentDidMount() {

        this.props.fetchNetworks();
        this.setState({
            read: permissionHelper.checkPermission("NETWORK", "READ"),
            delete: permissionHelper.checkPermission("NETWORK", "DELETE"),
            create: permissionHelper.checkPermission("NETWORK", "CREATE"),
            update: permissionHelper.checkPermission("NETWORK", "UPDATE")
        });
    }
    render() {
        let { network, error, loading } = this.props;
        return (

            <div>
                {error ? <h4 className="errorClass">{<Snakbar show={true} desc={this.state.networkError} snakType="warning" closeSnak={this.snakClose} />} </h4> : null}

                {loading ?
                    <Loader /> :
                    <div className="materialTable">
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
                                    onRowUpdate: this.state.update && this.updateDataHandler,
                                    onRowDelete: this.state.delete && this.deleteDataHandler,
                                }}
                            />
                            : <Forbidden />}
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
            </div>
        )
    }


}