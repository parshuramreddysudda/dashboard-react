import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchMachines,resetMachines,updateMachine,deleteMachine,createMachine
} from './Services/machine.action'
import Machine from './Machines';

const mapStateToProps = state => ({
  devices: state.devices.items,
  loading: state.devices.loading,
  updating: state.devices.updating,
  error: state.devices.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMachines:fetchMachines,
  createMachine:createMachine,
  resetMachines:resetMachines,
  updateMachine:updateMachine,
  deleteMachine:deleteMachine
}, dispatch);

const MachinesContainer = connect(mapStateToProps, mapDispatchToProps)(Machine);

export default MachinesContainer;