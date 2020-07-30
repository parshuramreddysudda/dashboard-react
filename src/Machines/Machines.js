import React from 'react';
import MaterialTable from 'material-table';
import Snakbar from '../Components/Snakbar';
import { Grid, Button } from '@material-ui/core';
import './Machines.scss'
import '../index.scss'
import permissionHelper from '../Auth/PermissionHelper';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Loader from '../Components/loader'
import Forbidden from '../Components/Forbidden';;

export default class Machines extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            machines: [],
            columns: [
                { title: 'Id', field: 'id', editable: 'onAdd' },
                { title: 'Name', field: 'name' },
                { title: 'Operating System', field: 'os' },
                { title: 'IP Adress', field: 'ip' },
                { title: 'Mac Address', field: 'mac' },
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
        this.props.resetMachines();
        this.setState({
            snakDesc: "Machine details Cleared",
            snakType: "warning",
            snakOpen: true
        })
        return Promise.resolve();
    }
    resetData = () => {
        this.props.fetchMachines();
        this.setState({
            snakDesc: "Machine details Reseted",
            snakType: "info",
            snakOpen: true
        })
        return Promise.resolve();
    }
    deleteDataHandler = (newData) => (
        new Promise((done) => {
            this.props.deleteMachine(newData.id)
            this.setState({
                snakDesc: "Machine id with " + newData.id + " has been succesfully Deleted",
                snakType: "error",
                snakOpen: true
            })
            done()
            return Promise.resolve()
        })
    )
    addDataHandler = (newData) => (
        new Promise((done) => {
            this.props.createMachine(newData);
            this.setState({
                snakDesc: "Machine id with " + newData.id + " has been succesfully created",
                snakType: "success",
                snakOpen: true
            })
            done()
            return Promise.resolve();
        })
    )
    updateDataHandler = (newData, oldData) => (
        new Promise((done) => {
            const machine = this.props.machine;
            const data = [...machine];
            data[data.indexOf(oldData)] = newData;
            this.props.updateMachine(newData, { ...machine, data }, newData.id)
            this.setState({
                snakDesc: "Machine id with " + newData.id + " has been succesfully Updated",
                snakType: "info",
                snakOpen: true
            })
            done()
            return Promise.resolve()
        })
    )
    componentDidMount() {
        this.props.fetchMachines();
        this.setState({
            read: permissionHelper.checkPermission("MACHINES", "READ"),
            delete: permissionHelper.checkPermission("MACHINES", "DELETE"),
            create: permissionHelper.checkPermission("MACHINES", "CREATE"),
            update: permissionHelper.checkPermission("MACHINES", "UPDATE")
        });
    }
    render() {
        let { machine, loading, error } = this.props;
        return (
            <div>
                {error ? <h4 className="errorClass">{<Snakbar show={true} desc={this.state.networkError} snakType="warning" closeSnak={this.snakClose} />} </h4> : null}
                {loading ?
                    <Loader /> :
                    <div>
                        {this.state.read ?

                            <MaterialTable
                                title="Machines Details"
                                columns={this.state.columns}
                                data={machine}
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
            </div>
        )
    }


}
