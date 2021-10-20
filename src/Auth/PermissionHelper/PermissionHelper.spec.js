import permissionHelper from './index'
// import { jssPreset } from '@material-ui/core'
import AuthHelper from '../AuthHelper'

describe('Testing PermissionHelper Component', () => {

    describe('Testing getPermission function', () => {

        test('should handle getPermission(CLIENT)', () => {
            const expectedResult = {
                "MACHINES": ["READ", "UPDATE"],
                "APP": ["READ", "UPDATE"],
                "NETWORK": ["READ", "UPDATE"],
                "CLIENTS": ["READ", "UPDATE"]
            }
            expect(permissionHelper.getPermissions('CLIENT')).toEqual(expectedResult)
        })
        test('should hanlde getPermission(READONLY)', () => {
            const expectedResult = {
                "MACHINES": ["READ"],
                "APP": ["READ"],
                "NETWORK": ["READ"],
                "CLIENTS": ["READ"]
            }
            expect(permissionHelper.getPermissions('READONLY')).toEqual(expectedResult)
        })
        test('should hanlde getPermission(CEO)', () => {
            const expectedResult = { "DASHBOARD": ["READ"] }
            expect(permissionHelper.getPermissions('CEO')).toEqual(expectedResult)
        })

        test('should hanlde getPermission(undefined)', () => {
            const expectedResult = {
                "MACHINES": ["READ", "DELETE", "UPDATE", "CREATE"],
                "APP": ["READ", "DELETE", "UPDATE", "CREATE"],
                "NETWORK": ["READ", "DELETE", "UPDATE", "CREATE"],
                "CLIENTS": ["READ", "DELETE", "UPDATE", "CREATE"],
                "DASHBOARD": ["READ", "DELETE", "UPDATE", "CREATE"]
            }
            expect(permissionHelper.getPermissions(undefined)).toEqual(expectedResult)
        })
  

    })
    describe('Testing checkPermission Component', () => {

        test('should handle CLIENT Check Permissions', () => {
            jest.spyOn(AuthHelper,'getAuthRole').mockImplementation(()=>'CLIENT')
            expect(permissionHelper.checkPermission("MACHINES", "READ")).toEqual(true)
            expect(permissionHelper.checkPermission("MACHINES", "DELETE")).toEqual(false)
            
        })

        test('should handle CLIENT Check Permissions', () => {
            jest.spyOn(AuthHelper,'getAuthRole').mockImplementation(()=>'CLIENT')

            expect(permissionHelper.checkPermission("MACHINES", "WRITE")).toEqual(false)
        })



    })


})
