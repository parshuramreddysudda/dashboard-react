import API from '../../MainServices/AxiosInstance'

const services = {
    getBarcharts,
}

function getBarcharts(type) {
 
    return API.get('overview/'+type.toLowerCase()+'Graph');

}

export default services;