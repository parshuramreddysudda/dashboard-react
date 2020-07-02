
class AuthHelper {

    constructor() {
        this.clientRole = "ADMIN";
        this.getAuthRole = this.getAuthRole.bind(this);

    }
    getAuthRole() {
        return this.clientRole;
    }
    setAuthRole() {
        this.clientRole = "CLIENT";
        return Promise.resolve()
    }
}

export default new AuthHelper();