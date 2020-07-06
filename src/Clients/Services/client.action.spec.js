import * as clientActions from './clients.action'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
// jest.mock('./client.action')

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Testing Clients Component Actions ', () => {

    test('should create FETCH_CLIENTS_PENDING when fetching client is started and FETCH_CLIENTS_SUCCESS when fetching is done and FETCH_CLIENTS_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {}
        return store.dispatch(clientActions.fetchClients(params)).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_CLIENTS_PENDING');
            expect(actions[1].type).toEqual('FETCH_CLIENTS_SUCCESS');
            expect(actions[2].type).toEqual('FETCH_CLIENTS_COMPLETED');
            const client = actions[1].payload;
            client.forEach(client => {
                expect(client).toHaveProperty('id');
                expect(client).toHaveProperty('name');
                expect(client).toHaveProperty('state');
                expect(client).toHaveProperty('created');
                expect(client).toHaveProperty('updated');
                expect(client).toHaveProperty('type');
            });

        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_CLIENTS_PENDING');
            expect(actions[1].type).toEqual('FETCH_CLIENTS_ERROR');
            expect(actions[2].type).toEqual('FETCH_CLIENTS_COMPLETED');
        })
    })

    test('should create FETCH_CLIENTS_PENDING when fetching client is started and FETCH_CLIENTS_ERROR when fetching is failed and FETCH_CLIENTS_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = { id: 'as' }
        return store.dispatch(clientActions.fetchClients(params)).then(() => {
            //To-Do stuff when Request is success
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_CLIENTS_PENDING');
            expect(actions[1].type).toEqual('FETCH_CLIENTS_ERROR');
            expect(actions[2].type).toEqual('FETCH_CLIENTS_COMPLETED');
        })
    })

    test('should create CREATE_CLIENTS_PENDING when Creating client is started and CREATE_CLIENTS_SUCCESS when Creating is done and CREATE_CLIENTS_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {
            "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
            "name": "esse veniam in dolore ut",
            "state": "deleted",
            "created": "2009-02-09T10:53:07.39Z",
            "updated": "1988-06-03T19:40:09.248Z",
            "type": "mollit in"
        };
        return store.dispatch(clientActions.createClient(params)).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('CREATE_CLIENTS_PENDING');
            expect(actions[1].type).toEqual('CREATE_CLIENTS_SUCCESS');
            expect(actions[2].type).toEqual('CREATE_CLIENTS_COMPLETED');
            const client = actions[1].payload.params;
            expect(client).toHaveProperty('id');
            expect(client).toHaveProperty('name');
            expect(client).toHaveProperty('state');
            expect(client).toHaveProperty('created');
            expect(client).toHaveProperty('updated');
            expect(client).toHaveProperty('type');

        })
    })
    test('should create CREATE_CLIENTS_PENDING when Creating client is started and CREATE_CLIENTS_ERROR when Creating is failed and CREATE_CLIENTS_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {
            "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
            "name": "esse veniam in dolore ut",
            "state": "deleted",
            "created": "2009-02-09T10:53:07.39Z",
            "updated": "1988-06-03T19:40:09.248Z",
            "type": "mollit in"
        };
        return store.dispatch(clientActions.createClient(params)).then(() => {
            //TO DO When request is sucessfull

        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('CREATE_CLIENTS_PENDING');
            expect(actions[1].type).toEqual('CREATE_CLIENTS_ERROR');
            expect(actions[2].type).toEqual('CREATE_CLIENTS_COMPLETED');
        })
    })
    test('should create DELETE_CLIENTS_PENDING when Creating client is started and DELETE_CLIENTS_SUCCESS when Creating is failed and DELETE_CLIENTS_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = '63c45084-1880-b539-0813-c742d0b90b20'
        return store.dispatch(clientActions.deleteClient(params)).then((deleteResponce) => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_CLIENTS_PENDING');
            expect(actions[1].type).toEqual('DELETE_CLIENTS_SUCCESS');
            expect(actions[2].type).toEqual('DELETE_CLIENTS_COMPLETED');
            const id = actions[1].payload;
            expect(id).toEqual(params);
            expect(deleteResponce.status).toBe(204);
        })
    })
    test('should create DELETE_CLIENTS_PENDING when Creating client is started and DELETE_CLIENTS_ERROR when Creating is done and DELETE_CLIENTS_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = '63c45084-1880-b539-0813-c74asd2d0b90b20'
        return store.dispatch(clientActions.deleteClient(params)).then((deleteResponce) => {
            //To Do stuff when error is success
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_CLIENTS_PENDING');
            expect(actions[1].type).toEqual('DELETE_CLIENTS_ERROR');
            expect(actions[2].type).toEqual('DELETE_CLIENTS_COMPLETED');
        })
    })
    test('should create UPDATE_CLIENTS_PENDING when updating client is started and UPDATE_CLIENTS_SUCCESS when update is done and UPDATE_CLIENTS_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        // jest.spyOn(store, 'getState').mockImplementation(() => { })
        // jest.spyOn(PermissionHelper, 'checkPermission').mockImplementation(() => true)
        const params = [
            {
                "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
                "name": "esse veniam in dolore ut",
                "state": "deleted",
                "created": "2009-02-09T10:53:07.39Z",
                "updated": "1988-06-03T19:40:09.248Z",
                "type": "mollit in"
            },
            {
                "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
                "name": "esse veniam in dolore ut",
                "state": "deleted",
                "created": "2009-02-09T10:53:07.39Z",
                "updated": "1988-06-03T19:40:09.248Z",
                "type": "mollit in"
            }]
        const newData = [
            {
                "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
                "name": "esse veniam in dolore ut",
                "state": "deleted",
                "created": "2009-02-09T10:53:07.39Z",
                "updated": "1988-06-03T19:40:09.248Z",
                "type": "mollit in"
            },
            {
                "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
                "name": "esse veniam in dolore ut",
                "state": "deleted",
                "created": "2009-02-09T10:53:07.39Z",
                "updated": "1988-06-03T19:40:09.248Z",
                "type": "mollit in"
            }
        ]
        const id = '6be7b591-fc4f-3eca-7128-3a52c30366e2'
        return store.dispatch(clientActions.updateClient(params, newData, id)).then(() => {
            const actions = store.getActions();
            // console.log(actions)
            expect(actions[0].type).toEqual('UPDATE_CLIENT_PENDING');
            expect(actions[1].type).toEqual('UPDATE_CLIENT_SUCCESS');
            expect(actions[2].type).toEqual('UPDATE_CLIENT_COMPLETED');
            const client = actions[1].payload.updateClient;
            // client.forEach(client => {
            // console.log(client)
            expect(client).toHaveProperty('id');
            expect(client).toHaveProperty('name');
            expect(client).toHaveProperty('state');
            expect(client).toHaveProperty('created');
            expect(client).toHaveProperty('updated');
            expect(client).toHaveProperty('type');
            const state = store.getState()
            // });
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('UPDATE_CLIENT_PENDING');
            expect(actions[1].type).toEqual('UPDATE_CLIENT_ERROR');
            expect(actions[2].type).toEqual('UPDATE_CLIENT_COMPLETED');
        })
    })

    test('should create UPDATE_CLIENT_PENDING when updating client is started and UPDATE_CLIENT_ERROR when update is failed and UPDATE_CLIENT_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        // jest.spyOn(store, 'getState').mockImplementation(() => { })
        // jest.spyOn(PermissionHelper, 'checkPermission').mockImplementation(() => true)
        const params = [
            {
                "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
                "name": "esse veniam in dolore ut",
                "state": "deleted",
                "created": "2009-02-09T10:53:07.39Z",
                "updated": "1988-06-03T19:40:09.248Z",
                "type": "mollit in"
            },
            {
                "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
                "name": "esse veniam in dolore ut",
                "state": "deleted",
                "created": "2009-02-09T10:53:07.39Z",
                "updated": "1988-06-03T19:40:09.248Z",
                "type": "mollit in"
            }]
        const newData = [
            {
                "id": "51f19c93-361e-5e38-f0c4-342fe51f2770",
                "name": "esse veniam in dolore ut",
                "state": "deleted",
                "created": "2009-02-09T10:53:07.39Z",
                "updated": "1988-06-03T19:40:09.248Z",
                "type": "mollit in"
            },
            {
                "id": "51f19c93-343e-5e38-f0c4-342fe51f2770",
                "name": "esse veniam in  ut",
                "state": "deleted",
                "created": "2009-02-09T10:58:07.39Z",
                "updated": "1988-06-03T19:40:09.248Z",
                "type": "mollit in"
            }
        ]
        const id = '6be7b591-fc4f-3eca-7128-3a52c3asd0366e2'
        return store.dispatch(clientActions.updateClient(params, newData, id)).then(() => {
            //To do Something when request was success
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('UPDATE_CLIENT_PENDING');
            expect(actions[1].type).toEqual('UPDATE_CLIENT_ERROR');
            expect(actions[2].type).toEqual('UPDATE_CLIENT_COMPLETED');
        })
    })

    test('should handle FETCH_CLIENTS_PENDING', () => {

        expect(clientActions.fetchClientsPending()).toEqual({
            type: "FETCH_CLIENTS_PENDING",
        })

    })
    test('should handle FETCH_CLIENTS_COMPLETED', () => {

        expect(clientActions.fetchClientsCompleted()).toEqual({
            type: "FETCH_CLIENTS_COMPLETED",
        })

    })
    test('should handle FETCH_CLIENTS_SUCCESS', () => {

        expect(clientActions.fetchClientsSuccess()).toEqual({
            type: "FETCH_CLIENTS_SUCCESS",
        })

    })
    test('should handle FETCH_CLIENTS_ERROR', () => {
        expect(clientActions.fetchClientsError('Error data')).toEqual({
            type: "FETCH_CLIENTS_ERROR",
            payload: "Error data"
        })
    })
    test('should handle UPDATE_CLIENT_PENDING', () => {
        expect(clientActions.updateClientPending()).toEqual({
            type: "UPDATE_CLIENT_PENDING"
        })
    })
    test('should handle UPDATE_CLIENT_COMPLETED', () => {
        expect(clientActions.updateClientCompleted()).toEqual({
            type: "UPDATE_CLIENT_COMPLETED"
        })
    })
    test('should handle UPDATE_CLIENT_SUCCESS', () => {
        const updateClient = 'update'
        const newState = 'data'
        const id = 'id'
        expect(clientActions.updateClientSuccess(updateClient, newState, id)).toEqual({
            type: "UPDATE_CLIENT_SUCCESS",
            payload: { updateClient, newState, id }
        })
    })
    test('should handle UPDATE_CLIENT_ERROR', () => {
        const error = 'Error'
        expect(clientActions.updateClientError(error)).toEqual({
            type: "UPDATE_CLIENT_ERROR",
            payload: 'Error'
        })
    })
    test('should handle DELETE_CLIENTS_PENDING', () => {
        expect(clientActions.deleteClientPending()).toEqual({
            type: "DELETE_CLIENTS_PENDING",
        })
    })
    test('should handle DELETE_CLIENTS_SUCCESS', () => {
        const id = 'ID'
        expect(clientActions.deleteClientSuccess(id)).toEqual({
            type: "DELETE_CLIENTS_SUCCESS",
            payload: 'ID'
        })
    })
    test('should handle DELETE_CLIENTS_ERROR', () => {
        const error = 'error'
        expect(clientActions.deleteClientError(error)).toEqual({
            type: "DELETE_CLIENTS_ERROR",
            payload: 'error'
        })
    })
    test('should handle CREATE_CLIENTS_PENDING', () => {
        expect(clientActions.createClientPending()).toEqual({
            type: "CREATE_CLIENTS_PENDING",
        })
    })
    test('should handle CREATE_CLIENTS_COMPLETED', () => {
        expect(clientActions.createClientCompleted()).toEqual({
            type: "CREATE_CLIENTS_COMPLETED",
        })
    })
    test('should handle CREATE_CLIENTS_SUCCESS', () => {
        const params = 'Parameter'
        expect(clientActions.createClientSuccess(params)).toEqual({
            type: "CREATE_CLIENTS_SUCCESS",
            payload: { params }
        })
    })
    test('should handle CREATE_CLIENTS_ERROR', () => {
        const error = 'Error'
        expect(clientActions.createClientError(error)).toEqual({
            type: "CREATE_CLIENTS_ERROR",
            payload: error
        })
    })
    test('should handle RESET_CLIENTS', () => {
        expect(clientActions.resetClients()).toEqual({
            type: "RESET_CLIENTS",
        })
    })



})