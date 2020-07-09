import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import AuthHelper from  './Auth/AuthHelper'

window.store = store;
(() => {
  AuthHelper.setAuthRole();
  console.log("Running Auth call")
})();

ReactDOM.render(<Provider store={store}>

  <App/>

</Provider>, document.getElementById('root'));