import React from 'react';
import MaterialTable from 'material-table';
import Snakbar from './Components/Snakbar';
import { Grid, Button } from '@material-ui/core';
import './apps.scss'
import '../index.scss'
import permissionHelper from '../Auth/PermissionHelper';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Loader from './Components/loader'
import Forbidden from '../Components/Forbidden';

export default class Apps extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apps: [],
            columns: [
                { title: 'Id', field: 'id', editable: 'onAdd' },
                { title: 'Name', field: 'name' },
                { title: 'Version', field: 'version' },
                { title: 'Released', field: 'installed' },
                { title: 'Type', field: 'type' },
                { title: 'Available At', field: 'availableat' },
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
        this.props.resetApps();
        this.setState({
            snakDesc: "Apps details Cleared",
            snakOpen: true,
            snakType: "warning",
        });
        return Promise.resolve();
    }
    resetData = () => {
        this.props.fetchApps();
        this.setState({
            snakDesc: "Apps details Reseted",
            snakType: "info",
            snakOpen: true
        })
    }
    addDatahandler = (newData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                this.props.createApp(newData);
                this.setState({ snakDesc: "Apps id with" + newData.id + " has been succesfully created" })
                this.setState({ snakType: "success" })
                this.setState({ snakOpen: true })
            }, 400);
        })
    deleteDataHandler = (newData) =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                this.props.deleteApp(newData.id)
                this.setState({ snakDesc: "Apps id with" + newData.id + " has been succesfully Deleted" })
                this.setState({ snakType: "error" })
                this.setState({ snakOpen: true })

            }, 400);
        })

    componentDidMount() {
        this.props.fetchApps();
        this.setState({
            read: permissionHelper.checkPermission("APP", "READ"),
            delete: permissionHelper.checkPermission("APP", "DELETE"),
            create: permissionHelper.checkPermission("APP", "CREATE"),
            update: permissionHelper.checkPermission("APP", "UPDATE")
        });
        console.log("Console Read", this.state.read)
    }
    render() {
        let { apps, loading, error, updateApp, } = this.props;
        return (

            <div>

                <Snakbar id="infoSnakbar"
                    show={this.state.snakOpen}
                    desc={this.state.snakDesc}
                    snakType={this.state.snakType}
                    closeSnak={this.snakClose}
                />
                {error ? <h4 id="Error">{<Snakbar id="errorSnakbar" show={true} desc={this.state.networkError} snakType="warning" closeSnak={this.snakClose} />} </h4> : null}
                {
                    loading ?
                        <Loader /> :
                        <div>
                            {this.state.read ?

                                <MaterialTable
                                    title="App Details"
                                    columns={this.state.columns}
                                    data={apps}
                                    onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                                    options={{
                                        exportButton: true,
                                        // filtering:true,
                                        rowStyle: rowData => ({
                                            backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
                                        })
                                    }}
                                    editable={{
                                        onRowAdd: this.state.create && this.addDatahandler,
                                        onRowUpdate: this.state.update && ((newData, oldData) =>
                                            new Promise((resolve) => {
                                                setTimeout(() => {
                                                    resolve();
                                                    const data = [...apps];
                                                    data[data.indexOf(oldData)] = newData;
                                                    updateApp(newData, { ...apps, data }, newData.id)
                                                    this.setState({ snakDesc: "Apps id with" + newData.id + " has been succesfully Updated" })
                                                    this.setState({ snakType: "info" })
                                                    this.setState({ snakOpen: true })
                                                }, 1000);
                                                console.log(error)
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

            </div>
        )
    }


}