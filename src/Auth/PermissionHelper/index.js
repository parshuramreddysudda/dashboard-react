
import AuthHelper from '../AuthHelper'

console.disableYellowBox = true;
const permissionHelper = {

    getPermissions,
    checkPermission
}

function getPermissions(role) {
    switch (role) {
        case "CLIENT":
            return {
                "MACHINES": ["READ", "UPDATE"],
                "APP": ["READ", "UPDATE"],
                "NETWORK": ["READ", "UPDATE"],
                "CLIENTS": ["READ", "UPDATE"]
            }
        case "READONLY":
            return {
                "MACHINES": ["READ"],
                "APP": ["READ"],
                "NETWORK": ["READ"],
                "CLIENTS": ["READ"]
            }
        case "CEO":
            return {
                "DASHBOARD": ["READ"]
            }
        default:
            return {
                "MACHINES": ["READ", "DELETE", "UPDATE", "CREATE"],
                "APP": ["READ", "DELETE", "UPDATE", "CREATE"],
                "NETWORK": ["READ", "DELETE", "UPDATE", "CREATE"],
                "CLIENTS": ["READ", "DELETE", "UPDATE", "CREATE"],
                "DASHBOARD": ["READ", "DELETE", "UPDATE", "CREATE"]
            }
    }
}


function checkPermission(component, permissionType) {
    let authRole = AuthHelper.getAuthRole();
    let isPermission = false;

    for (const [componentType, permissionArray] of Object.entries(getPermissions(authRole))) {
        // console.debug(componentType)
        // componentType.localeCompare("as"); //Wrrote of removing warning
        if (getPermissions(authRole).hasOwnProperty(component)) {
            if (permissionArray.indexOf(permissionType) > -1) {
                isPermission = true;
            }
        }
    }

    // console.log("Permission is ", isPermission)
    return isPermission;
}


export default permissionHelper;