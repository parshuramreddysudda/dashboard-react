import API from '../../MainServices/AxiosInstance'

const OverviewServices = {
    getAppData,
    getLocationData,
    getMachineData,
    getCloudData
}


function getAppData() {
    return API.get(`overview/app`)

}
function getLocationData() {
    return API.get(`overview/locations`)
}
function getMachineData() {
    return API.get(`overview/machines`)
}
function getCloudData() {
    return API.get(`overview/cloud`)
}
export default OverviewServices;