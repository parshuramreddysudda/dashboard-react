import Auth from './index'

describe('Testing Auth services', () => {

    test('should return ADMIN as default', () => {
        expect(Auth.getAuthRole()).toEqual("ADMIN");
        expect(Auth.clientRole).toEqual("ADMIN")
    })

    test('should Return CLIENT Role ', () => {
        Auth.setAuthRole().then((response) => {
            console.log(response)
            expect(Auth.setAuthRole.clientRole).toEqual(response)
        })
    })
})
