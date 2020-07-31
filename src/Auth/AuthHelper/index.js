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
    API.get(`myrole`).then(response => {
      this.clientRole = response.data;
    })
    // console.log("Auth role is",this.clientRole)
    return Promise.resolve();
  }
}

export default new AuthHelper();