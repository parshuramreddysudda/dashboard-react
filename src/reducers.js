import { combineReducers } from "redux";
import clientsReducer from './Clients/Services/clients.reducer'
import appReducer from './Apps/Services/apps.reducer'
import deviceReducer from './Machines/Services/machine.reducer'
import networkReducer from './Networks/Services/networks.reducer'

export default combineReducers({
   clients:clientsReducer,
   app:appReducer,
   devices:deviceReducer,
   network:networkReducer
});