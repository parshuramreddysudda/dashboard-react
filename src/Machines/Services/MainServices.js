import API from '../../MainServices/AxiosInstance'
const MainServices ={

getAllClients,
deleteClient,
getClient,
putClient,
}

function getAllClients(){
 
   return API.get(`apps`)
}
function deleteClient(id){
    return API.delete(`apps${id}`)
}
function getClient(id){
    return API.get(`apps/${id}`).catch(function (error) {
        console.log(error);
      })
}
function putClient(id,name,state,created,updated,type){
 return API.put(`apps/${id}?id=${id}&name=${name}&state=${state}&created=${created}&updated=${updated}&type=${type}`).catch(function (error) {
    console.log(error);
  })
}

export default MainServices;