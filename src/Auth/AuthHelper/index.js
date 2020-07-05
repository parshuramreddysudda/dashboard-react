import API from '../../MainServices/AxiosInstance';

class AuthHelper {

  constructor() {
    this.clientRole = "ADMIN";
    this.getAuthRole = this.getAuthRole.bind(this);

  }
  getAuthRole() {
    // console.log("Get Clients Role: ",this.clientRole)
    return this.clientRole;
    // return "CEO";
  }
  setAuthRole() {
    return new Promise((resolve, reject) => {
      API.get(`myrole`).then(response => {
        this.clientRole = response.data;
      })
    })
}
}

export default new AuthHelper();