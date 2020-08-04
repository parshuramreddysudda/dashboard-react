import * as networkActions from './networks.action'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
// jest.mock('./network.action')

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


describe('Testing Network Component Actions ', () => {
    test('should create FETCH_NETWORK_PENDING when fetching network is started and FETCH_NETWORK_SUCCESS when fetching is done and FETCH_NETWORK_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {}
        return store.dispatch(networkActions.fetchNetworks(params)).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_NETWORK_PENDING');
            expect(actions[1].type).toEqual('FETCH_NETWORK_SUCCESS');
            expect(actions[2].type).toEqual('FETCH_NETWORK_COMPLETED');
            const network = actions[1].payload;
            network.forEach(network => {
                expect(network).toHaveProperty('id');
                expect(network).toHaveProperty('name');
                expect(network).toHaveProperty('started');
                expect(network).toHaveProperty('destroy');
            });

        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_NETWORK_PENDING');
            expect(actions[1].type).toEqual('FETCH_NETWORK_ERROR');
            expect(actions[2].type).toEqual('FETCH_NETWORK_COMPLETED');
        })
    })

    test('should create FETCH_NETWORK_PENDING when fetching network is started and FETCH_NETWORK_ERROR when fetching is failed and FETCH_NETWORK_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        const params = { id: 'as//////' }
     
            try {
                store.dispatch(networkActions.fetchNetworks(params))
                const actions = store.getActions();
                // throw(error)
            } catch (error) {
                console.log("error")
                const actions = store.getActions();
                expect(actions[0].type).toEqual('FETCH_NETWORK_PENDING');
                expect(actions[1].type).toEqual('FETCH_NETWORK_ERROR');
                expect(actions[2].type).toEqual('FETCH_NETWORK_COMPLETED');
            }
        
    })

    test('should create CREATE_NETWORK_PENDING when Creating network is started and CREATE_NETWORK_SUCCESS when Creating is done and CREATE_NETWORK_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {
            "id": "0a2d01fd-ddb4-5472-5d3c-925911d234d1",
            "name": "mollit",
            "started": "1967-10-05T14:09:39.262Z",
            "destroy": "2001-06-16T04:27:03.499Z"
        }
            ;
        return store.dispatch(networkActions.createNetwork(params)).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('CREATE_NETWORK_PENDING');
            expect(actions[1].type).toEqual('CREATE_NETWORK_SUCCESS');
            expect(actions[2].type).toEqual('CREATE_NETWORK_COMPLETED');
            const network = actions[1].payload.params;
            expect(network).toHaveProperty('id');
            expect(network).toHaveProperty('name');
            expect(network).toHaveProperty('started');
            expect(network).toHaveProperty('destroy');

        })
    })
    test('should create CREATE_NETWORK_PENDING when Creating network is started and CREATE_NETWORK_ERROR when Creating is failed and CREATE_NETWORK_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {
            "id": "0a2d01fd-ddb4-5472-5d3c-925911d234d1",
            "name": "mollit",
            "started": "1967-10-05T14:09:39.262Z",
            "destroy": "2001-06-16T04:27:03.499Z"
        }
            ;
        return store.dispatch(networkActions.createNetwork(params)).then(() => {
            //TO DO When request is sucessfull

        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('CREATE_NETWORK_PENDING');
            expect(actions[1].type).toEqual('CREATE_NETWORK_ERROR');
            expect(actions[2].type).toEqual('CREATE_NETWORK_COMPLETED');
        })
    })
    test('should create DELETE_NETWORK_PENDING when Creating network is started and DELETE_NETWORK_SUCCESS when Creating is failed and DELETE_NETWORK_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = '63c45084-1880-b539-0813-c742d0b90b20'
        return store.dispatch(networkActions.deleteNetwork(params)).then((deleteResponce) => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_NETWORK_PENDING');
            expect(actions[1].type).toEqual('DELETE_NETWORK_SUCCESS');
            expect(actions[2].type).toEqual('DELETE_NETWORK_COMPLETED');
            const id = actions[1].payload;
            expect(id).toEqual(params);
            expect(deleteResponce.status).toBe(204);
        })
    })
    test('should create DELETE_NETWORK_PENDING when Creating network is started and DELETE_NETWORK_ERROR when Creating is done and DELETE_NETWORK_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = '63c45084-1880-b539-0813-c74asd2d0b90b20'
        return store.dispatch(networkActions.deleteNetwork(params)).then((deleteResponce) => {
            //To Do stuff when error is success
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_NETWORK_PENDING');
            expect(actions[1].type).toEqual('DELETE_NETWORK_ERROR');
            expect(actions[2].type).toEqual('DELETE_NETWORK_COMPLETED');
        })
    })
    test('should create UPDATE_NETWORK_PENDING when updating network is started and UPDATE_NETWORK_SUCCESS when update is done and UPDATE_NETWORK_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        // jest.spyOn(store, 'getState').mockImplementation(() => { })
        // jest.spyOn(PermissionHelper, 'checkPermission').mockImplementation(() => true)
        const params = [
            {
                "id": "0a2d01fd-ddb4-5472-5d3c-925911d234d1",
                "name": "mollit",
                "started": "1967-10-05T14:09:39.262Z",
                "destroy": "2001-06-16T04:27:03.499Z"
            }
            ,
            {
                "id": "0a2d01fd-mhb4-5472-5d3c-925911d234d1",
                "name": "mollasdit",
                "started": "1267-16-05T14:09:39.262Z",
                "destroy": "2601-26-16T04:27:03.499Z"
            }
        ]
        const newData = [
            {
                "id": "0a2d01fd-ddb4-5472-5d3c-925911d234d1",
                "name": "asdasd",
                "started": "1967-10-05T14:09:39.262Z",
                "destroy": "2001-06-16T04:27:03.499Z"
            }
            ,
            {
                "id": "0a2d01fd-mhb4-5472-5d3c-925911d234d1",
                "name": "mollasdit",
                "started": "1267-16-05T14:09:39.262Z",
                "destroy": "2601-26-16T04:27:03.499Z"
            }
        ]
        const id = '0a2d01fd-ddb4-5472-5d3c-925911d234d1'
        return store.dispatch(networkActions.updateNetwork(params, newData, id)).then(() => {
            const actions = store.getActions();
            // console.log(actions)
            expect(actions[0].type).toEqual('UPDATE_NETWORK_PENDING');
            expect(actions[1].type).toEqual('UPDATE_NETWORK_SUCCESS');
            expect(actions[2].type).toEqual('UPDATE_NETWORK_COMPLETED');
            const network = actions[1].payload.updateNetwork;
            // network.forEach(network => {
            // console.log(network)
            expect(network).toHaveProperty('id');
            expect(network).toHaveProperty('name');
            expect(network).toHaveProperty('started');
            expect(network).toHaveProperty('destroy');
            // });
        })
    })
 
    test('should create UPDATE_NETWORK_PENDING when updating network is started and UPDATE_NETWORK_ERROR when update is failed and UPDATE_NETWORK_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        // jest.spyOn(store, 'getState').mockImplementation(() => { })
        // jest.spyOn(PermissionHelper, 'checkPermission').mockImplementation(() => true)
        const params = [
            {
                "id": "0a2d01fd-ddb4-5472-5d3c-925911d234d1",
                "name": "mollit",
                "started": "1967-10-05T14:09:39.262Z",
                "destroy": "2001-06-16T04:27:03.499Z"
            }
            ,
            {
                "id": "0a2d01fd-mhb4-5472-5d3c-925911d234d1",
                "name": "mollasdit",
                "started": "1267-16-05T14:09:39.262Z",
                "destroy": "2601-26-16T04:27:03.499Z"
            }]
        const newData = [
            {
                "id": "0a2d01fd-ddb4-5472-5d3c-925911d234d1",
                "name": "mollit",
                "started": "1967-10-05T14:09:39.262Z",
                "destroy": "2001-06-16T04:27:03.499Z"
            }
            ,
            {
                "id": "0a2d01fd-mhb4-5472-5d3c-925911d234d1",
                "name": "mollasdit",
                "started": "1267-16-05T14:09:39.262Z",
                "destroy": "2601-26-16T04:27:03.499Z"
            }
        ]
        const id = '6be7b591-fc4f-3eca-7128-3a52c3asd0366e2'
        return store.dispatch(networkActions.updateNetwork(params, newData, id)).then(() => {
            //To do Something when request was success
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('UPDATE_NETWORK_PENDING');
            expect(actions[1].type).toEqual('UPDATE_NETWORK_ERROR');
            expect(actions[2].type).toEqual('UPDATE_NETWORK_COMPLETED');
        })
    })


    test('should handle FETCH_NETWORK_PENDING', () => {

        expect(networkActions.fetchNetworksPending()).toEqual({
            type: "FETCH_NETWORK_PENDING",
        })

    })
    test('should handle FETCH_NETWORK_COMPLETED', () => {

        expect(networkActions.fetchNetworksCompleted()).toEqual({
            type: "FETCH_NETWORK_COMPLETED",
        })

    })
    test('should handle FETCH_NETWORK_SUCCESS', () => {

        expect(networkActions.fetchNetworksSuccess()).toEqual({
            type: "FETCH_NETWORK_SUCCESS",
        })

    })
    test('should handle FETCH_NETWORK_ERROR', () => {
        expect(networkActions.fetchNetworksError('Error data')).toEqual({
            type: "FETCH_NETWORK_ERROR",
            payload: "Error data"
        })
    })
    test('should handle UPDATE_NETWORK_PENDING', () => {
        expect(networkActions.updateNetworkPending()).toEqual({
            type: "UPDATE_NETWORK_PENDING"
        })
    })
    test('should handle UPDATE_NETWORK_COMPLETED', () => {
        expect(networkActions.updateNetworkCompleted()).toEqual({
            type: "UPDATE_NETWORK_COMPLETED"
        })
    })
    test('should handle UPDATE_NETWORK_SUCCESS', () => {
        const updateNetwork = 'update'
        const updateData = 'data'
        const id = 'id'
        expect(networkActions.updateNetworkSuccess(updateNetwork, updateData, id)).toEqual({
            type: "UPDATE_NETWORK_SUCCESS",
            payload: { updateNetwork, updateData, id }
        })
    })
    test('should handle UPDATE_NETWORK_ERROR', () => {
        const error = 'Error'
        expect(networkActions.updateNetworkError(error)).toEqual({
            type: "UPDATE_NETWORK_ERROR",
            payload: 'Error'
        })
    })
    test('should handle DELETE_NETWORK_PENDING', () => {
        expect(networkActions.deleteNetworkPending()).toEqual({
            type: "DELETE_NETWORK_PENDING",
        })
    })
    test('should handle DELETE_NETWORK_SUCCESS', () => {
        const id = 'ID'
        expect(networkActions.deleteNetworkSuccess(id)).toEqual({
            type: "DELETE_NETWORK_SUCCESS",
            payload: 'ID'
        })
    })
    test('should handle DELETE_NETWORK_ERROR', () => {
        const error = 'error'
        expect(networkActions.deleteNetworkError(error)).toEqual({
            type: "DELETE_NETWORK_ERROR",
            payload: 'error'
        })
    })
    test('should handle CREATE_NETWORK_PENDING', () => {
        expect(networkActions.createNetworkPending()).toEqual({
            type: "CREATE_NETWORK_PENDING",
        })
    })
    test('should handle CREATE_NETWORK_COMPLETED', () => {
        expect(networkActions.createNetworkCompleted()).toEqual({
            type: "CREATE_NETWORK_COMPLETED",
        })
    })
    test('should handle CREATE_NETWORK_SUCCESS', () => {
        const params = 'Parameter'
        expect(networkActions.createNetworkSuccess(params)).toEqual({
            type: "CREATE_NETWORK_SUCCESS",
            payload: { params }
        })
    })
    test('should handle CREATE_NETWORK_ERROR', () => {
        const error = 'Error'
        expect(networkActions.createNetworkError(error)).toEqual({
            type: "CREATE_NETWORK_ERROR",
            payload: error
        })
    })
    test('should handle RESET_NETWORK', () => {
        expect(networkActions.resetNetworks()).toEqual({
            type: "RESET_NETWORK",
        })
    })



})