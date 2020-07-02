import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchClients,resetClients,updateClient,deleteClient,createClient
} from './Services/clients.action'
import Clients from './Clients'

const mapStateToProps = state => ({
  clients: state.clients.items,
  loading: state.clients.loading,
  updating: state.clients.updating,
  error: state.clients.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchClients:fetchClients,
  createClient:createClient,
  resetClients:resetClients,
  updateClient:updateClient,
  deleteClient:deleteClient
}, dispatch);

const ClientsContainer = connect(mapStateToProps, mapDispatchToProps)(Clients);

export default ClientsContainer;