import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchApps,resetApps,updateApp,deleteApp,createApp
} from './Services/apps.action'
import app from './Apps'

const mapStateToProps = state => ({
  apps: state.app.items,
  loading: state.app.loading,
  updating: state.app.updating,
  error: state.app.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchApps:fetchApps,
  createApp:createApp,
  resetApps:resetApps,
  updateApp:updateApp,
  deleteApp:deleteApp
}, dispatch);

const AppsContainer = connect(mapStateToProps, mapDispatchToProps)(app);

export default AppsContainer;