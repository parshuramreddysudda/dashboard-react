import axios from  'axios'

const services = {
    getClientBarcharts,
    // getAppBarcharts
}

function getClientBarcharts() {
   return axios.get('http://127.0.0.1:4010/api/overview/clientGraph');
}


export default services;