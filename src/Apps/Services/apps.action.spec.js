import * as AppAction from './apps.action'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
// jest.mock('./app.action')

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Testing Apps Component Actions ', () => {

    test('should create FETCH_APP_PENDING when fetching app is started and FETCH_APP_SUCCESS when fetching is done and FETCH_APP_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        // jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {}
        return store.dispatch(AppAction.fetchApps(params)).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_APP_PENDING');
            expect(actions[1].type).toEqual('FETCH_APP_SUCCESS');
            expect(actions[2].type).toEqual('FETCH_APP_COMPLETED');
            const app = actions[1].payload;
            app.forEach(app => {
                expect(app).toHaveProperty('id');
                expect(app).toHaveProperty('name');
                expect(app).toHaveProperty('version');
                expect(app).toHaveProperty('installed');
                expect(app).toHaveProperty('type');
                expect(app).toHaveProperty('availableat');
            });

        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_APP_PENDING');
            expect(actions[1].type).toEqual('FETCH_APP_ERROR');
            expect(actions[2].type).toEqual('FETCH_APP_COMPLETED');
        })
    })

    test('should create FETCH_APP_PENDING when fetching app is started and FETCH_APP_ERROR when fetching is failed and FETCH_APP_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = { id: 'as' };
        try {
            store.dispatch(AppAction.fetchApps(params));

        } catch (error) {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_APP_PENDING');
            expect(actions[1].type).toEqual('FETCH_APP_ERROR');
            expect(actions[2].type).toEqual('FETCH_APP_COMPLETED');
        }
    })

    test('should create CREATE_APP_PENDING when Creating app is started and CREATE_APP_SUCCESS when Creating is done and CREATE_APP_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {
            "id": "63c45084-1880-b539-0813-c742d0b90b20",
            "name": "amet aute aliqua Ut",
            "version": "beta",
            "installed": "1965-08-29T14:18:23.7Z",
            "type": "Contain in app purchase",
            "availableat": "Windows store"
        };
        return store.dispatch(AppAction.createApp(params)).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('CREATE_APP_PENDING');
            expect(actions[1].type).toEqual('CREATE_APP_SUCCESS');
            expect(actions[2].type).toEqual('CREATE_APP_COMPLETED');
            const app = actions[1].payload.params;
            expect(app).toHaveProperty('id');
            expect(app).toHaveProperty('name');
            expect(app).toHaveProperty('version');
            expect(app).toHaveProperty('installed');
            expect(app).toHaveProperty('type');
            expect(app).toHaveProperty('availableat');

        })
    })
    test('should create CREATE_APP_PENDING when Creating app is started and CREATE_APP_ERROR when Creating is failed and CREATE_APP_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        const params = {
            "id": "63c45084-1880-b539-0813-c742dasd///////",
            "name": "amet aute aliqua Ut",
            "version": "beta",
            "installed": "1965-08-29T14:18:23.7Z",
            "type": "Contain in app purchase",
            "availableat": "Windows store"
        };

        try {
            const actions = store.getActions();
            store.dispatch(AppAction.createApp(params))
        } catch (error) {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('CREATE_APP_PENDING');
            expect(actions[1].type).toEqual('CREATE_APP_ERROR');
            expect(actions[2].type).toEqual('CREATE_APP_COMPLETED');
        }
    })
    test('should create DELETE_APP_PENDING when Creating app is started and DELETE_APP_SUCCESS when Creating is failed and DELETE_APP_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = '63c45084-1880-b539-0813-c742d0b90b20'
        return store.dispatch(AppAction.deleteApp(params)).then((deleteResponce) => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_APP_PENDING');
            expect(actions[1].type).toEqual('DELETE_APP_SUCCESS');
            expect(actions[2].type).toEqual('DELETE_APP_COMPLETED');
            const id = actions[1].payload;
            expect(id).toEqual(params);
            expect(deleteResponce.status).toBe(204);
        })
    })
    test('should create DELETE_APP_PENDING when Deleting app is started and DELETE_APP_ERROR when Creating is done and DELETE_APP_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = '63c45084-1880-b539-0/////////'

        try {
            const actions = store.getActions();
            store.dispatch(AppAction.deleteApp(params))
        } catch (error) {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_APP_PENDING');
            expect(actions[1].type).toEqual('DELETE_APP_ERROR');
            expect(actions[2].type).toEqual('DELETE_APP_COMPLETED');
        }

    })
    test('should create UPDATE_APP_PENDING when updating app is started and UPDATE_APP_SUCCESS when update is done and UPDATE_APP_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        // jest.spyOn(store, 'getState').mockImplementation(() => { })
        // jest.spyOn(PermissionHelper, 'checkPermission').mockImplementation(() => true)
        const params = [
            {
                "id": "6be7b591-fc4f-3eca-7128-3a52c30366e2",
                "name": "fugiat dolore culpa occaecat consect",
                "version": "released",
                "installed": "1977-04-05T13:28:04.577Z",
                "type": "Free & no ads",
                "availableat": "App store"
            },
            {
                "id": "6c0b8248-ba99-11dd-6a0f-8764c06334db",
                "name": "dolore est",
                "version": "released",
                "installed": "1967-05-21T21:53:00.513Z",
                "type": "Paid",
                "availableat": "Mac store"
            }]
        const newData = [
            {
                "id": "6be7b591-fc4f-3eca-7128-3a52c30366e2",
                "name": "Updated Data",
                "version": "released",
                "installed": "1977-04-05T13:28:04.577Z",
                "type": "Free & no ads",
                "availableat": "App store"
            },
            {
                "id": "6c0b8248-ba99-11dd-6a0f-8764c06334db",
                "name": "dolore est",
                "version": "released",
                "installed": "1967-05-21T21:53:00.513Z",
                "type": "Paid",
                "availableat": "Mac store"
            }
        ]
        const id = '6be7b591-fc4f-3eca-7128-3a52c30366e2'
        return store.dispatch(AppAction.updateApp(params, newData, id)).then(() => {
            const actions = store.getActions();
            // console.log(actions)
            expect(actions[0].type).toEqual('UPDATE_APP_PENDING');
            expect(actions[1].type).toEqual('UPDATE_APP_SUCCESS');
            expect(actions[2].type).toEqual('UPDATE_APP_COMPLETED');
            const app = actions[1].payload.updateApp;
            // app.forEach(app => {
            // console.log(app)
            expect(app).toHaveProperty('id');
            expect(app).toHaveProperty('name');
            expect(app).toHaveProperty('version');
            expect(app).toHaveProperty('installed');
            expect(app).toHaveProperty('type');
            expect(app).toHaveProperty('availableat');
            const state = store.getState()
            // });
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('UPDATE_APP_PENDING');
            expect(actions[1].type).toEqual('UPDATE_APP_ERROR');
            expect(actions[2].type).toEqual('UPDATE_APP_COMPLETED');
        })
    })

    test('should create UPDATE_APP_PENDING when updating app is started and UPDATE_APP_ERROR when update is failed and UPDATE_APP_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        // jest.spyOn(store, 'getState').mockImplementation(() => { })
        // jest.spyOn(PermissionHelper, 'checkPermission').mockImplementation(() => true)
        const params = [
            {
                "id": "6be7b591-f/////////////2",
                "name": "fugiat dolore culpa occaecat consect",
                "version": "released",
                "installed": "1977-04-05T13:28:04.577Z",
                "type": "Free & no ads",
                "availableat": "App store"
            },
            {
                "id": "6c0b8248-ba99-11d////////",
                "name": "dolore est",
                "version": "released",
                "installed": "1967-05-21T21:53:00.513Z",
                "type": "Paid",
                "availableat": "Mac store"
            }]
        const newData = [
            {
                "id": "6be7b591-fc4f-3eca-71asd/////////",
                "name": "Updated Data",
                "version": "released",
                "installed": "1977-04-05T13:28:04.577Z",
                "type": "Free & no ads",
                "availableat": "App store"
            },
            {
                "id": "6c0b8248-ba99-11dd-6/////////",
                "name": "dolore est",
                "version": "released",
                "installed": "1967-05-21T21:53:00.513Z",
                "type": "Paid",
                "availableat": "Mac store"
            }
        ]
        const id = '6be7b591-fc4f-3eca-7128-3a5/////////'
        return store.dispatch(AppAction.updateApp(params, newData, id)).then(() => {
            try {
                throw (error)
            } catch (error) {
                const actions = store.getActions();
                expect(actions[0].type).toEqual('UPDATE_APP_PENDING');
                expect(actions[1].type).toEqual('UPDATE_APP_ERROR');
                expect(actions[2].type).toEqual('UPDATE_APP_COMPLETED');
            }
        })
    })


    test('should handle FETCH_APP_PENDING', () => {

        expect(AppAction.fetchAppsPending()).toEqual({
            type: "FETCH_APP_PENDING",
        })

    })
    test('should handle FETCH_APP_COMPLETED', () => {

        expect(AppAction.fetchAppsCompleted()).toEqual({
            type: "FETCH_APP_COMPLETED",
        })

    })
    test('should handle FETCH_APP_SUCCESS', () => {
        const machines = [
            { id: '1' },
            { name: 'Machine1' }
        ]

        expect(AppAction.fetchAppsSuccess(machines)).toEqual({
            type: "FETCH_APP_SUCCESS",
            payload: machines
        })

    })
    test('should handle FETCH_APP_ERROR', () => {
        expect(AppAction.fetchAppsError('Error data')).toEqual({
            type: "FETCH_APP_ERROR",
            payload: "Error data"
        })
    })
    test('should handle UPDATE_APP_PENDING', () => {
        expect(AppAction.updateAppPending()).toEqual({
            type: "UPDATE_APP_PENDING"
        })
    })
    test('should handle UPDATE_APP_COMPLETED', () => {
        expect(AppAction.updateAppCompleted()).toEqual({
            type: "UPDATE_APP_COMPLETED"
        })
    })
    test('should handle UPDATE_APP_SUCCESS', () => {
        const updateApp = 'update'
        const newData = 'data'
        const id = 'id'
        expect(AppAction.updateAppSuccess(updateApp, newData, id)).toEqual({
            type: "UPDATE_APP_SUCCESS",
            payload: { updateApp, newData, id }
        })
    })
    test('should handle UPDATE_APP_ERROR', () => {
        const error = 'Error'
        expect(AppAction.updateAppError(error)).toEqual({
            type: "UPDATE_APP_ERROR",
            payload: 'Error'
        })
    })
    test('should handle DELETE_APP_PENDING', () => {
        expect(AppAction.deleteAppPending()).toEqual({
            type: "DELETE_APP_PENDING",
        })
    })
    test('should handle DELETE_APP_COMPLETED', () => {
        expect(AppAction.deleteAppCompleted()).toEqual({
            type: "DELETE_APP_COMPLETED",
        })
    })
    test('should handle DELETE_APP_SUCCESS', () => {
        const id = 'ID'
        expect(AppAction.deleteAppSuccess(id)).toEqual({
            type: "DELETE_APP_SUCCESS",
            payload: 'ID'
        })
    })
    test('should handle DELETE_APP_ERROR', () => {
        const error = 'error'
        expect(AppAction.deleteAppError(error)).toEqual({
            type: "DELETE_APP_ERROR",
            payload: 'error'
        })
    })
    test('should handle CREATE_APP_PENDING', () => {
        expect(AppAction.createAppPending()).toEqual({
            type: "CREATE_APP_PENDING",
        })
    })
    test('should handle CREATE_APP_COMPLETED', () => {
        expect(AppAction.createAppCompleted()).toEqual({
            type: "CREATE_APP_COMPLETED",
        })
    })
    test('should handle CREATE_APP_SUCCESS', () => {
        const params = 'Parameter'
        expect(AppAction.createAppSuccess(params)).toEqual({
            type: "CREATE_APP_SUCCESS",
            payload: { params }
        })
    })
    test('should handle CREATE_APP_ERROR', () => {
        const error = 'Error'
        expect(AppAction.createAppError(error)).toEqual({
            type: "CREATE_APP_ERROR",
            payload: error
        })
    })
    test('should handle RESET_APP', () => {
        expect(AppAction.resetApps()).toEqual({
            type: "RESET_APP",
        })
    })


})