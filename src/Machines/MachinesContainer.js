import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchMachines,resetMachines,updateMachine,deleteMachine,createMachine
} from './Services/machine.action'
import Machine from './Machines';

const mapStateToProps = state => ({
  machine: state.machines.items,
  loading: state.machines.loading,
  updating: state.machines.updating,
  error: state.machines.error
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