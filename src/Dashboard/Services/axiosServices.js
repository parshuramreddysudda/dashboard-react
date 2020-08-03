import axios from 'axios'

const services = {
    getBarcharts,
}

function getBarcharts(type) {
 
    return axios.get('http://127.0.0.1:4010/api/overview/'+type.toLowerCase()+'Graph');

}


export default services;