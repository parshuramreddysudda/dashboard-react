import * as machineActions from './machine.action'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Testing Machine Component Actions ', () => {

    test('should handle FETCH_MACHINES_PENDING', () => {
        expect(machineActions.fetchMachinesPending()).toEqual({
            type: "FETCH_MACHINES_PENDING",
        })
    })
    test('should handle FETCH_MACHINES_COMPLETED', () => {
        expect(machineActions.fetchMachinesCompleted()).toEqual({
            type: "FETCH_MACHINES_COMPLETED",
        })
    })
    test('should handle FETCH_MACHINES_SUCCESS', () => {
        expect(machineActions.fetchMachinesSuccess()).toEqual({
            type: "FETCH_MACHINES_SUCCESS",
        })
    })
    test('should handle FETCH_MACHINES_ERROR', () => {
        expect(machineActions.fetchMachinesError('Error data')).toEqual({
            type: "FETCH_MACHINES_ERROR",
            payload: "Error data"
        })
    })
    test('should handle UPDATE_MACHINES_PENDING', () => {
        expect(machineActions.updateMachinePending()).toEqual({
            type: "UPDATE_MACHINES_PENDING"
        })
    })
    test('should handle UPDATE_MACHINES_COMPLETED', () => {
        expect(machineActions.updateMachineCompleted()).toEqual({
            type: "UPDATE_MACHINES_COMPLETED"
        })
    })
    test('should handle UPDATE_MACHINES_SUCCESS', () => {
        const updateMachine = 'update'
        const updateData = 'data'
        const id = 'id'
        expect(machineActions.updateMachineSuccess(updateMachine, updateData, id)).toEqual({
            type: "UPDATE_MACHINES_SUCCESS",
            payload: { updateMachine, updateData, id }
        })
    })
    test('should handle UPDATE_MACHINES_ERROR', () => {
        const error = 'Error'
        expect(machineActions.updateMachineError(error)).toEqual({
            type: "UPDATE_MACHINES_ERROR",
            payload: 'Error'
        })
    })
    test('should handle DELETE_DEVICE_PENDING', () => {
        expect(machineActions.deleteMachinePending()).toEqual({
            type: "DELETE_MACHINES_PENDING",
        })
    })
    test('should handle DELETE_MACHINES_SUCCESS', () => {
        const id = 'ID'
        expect(machineActions.deleteMachineSuccess(id)).toEqual({
            type: "DELETE_MACHINES_SUCCESS",
            payload: 'ID'
        })
    })
    test('should handle DELETE_MACHINES_ERROR', () => {
        const error = 'error'
        expect(machineActions.deleteMachineError(error)).toEqual({
            type: "DELETE_MACHINES_ERROR",
            payload: 'error'
        })
    })
    test('should handle CREATE_MACHINES_PENDING', () => {
        expect(machineActions.createMachinePending()).toEqual({
            type: "CREATE_MACHINES_PENDING",
        })
    })
    test('should handle CREATE_MACHINES_COMPLETED', () => {
        expect(machineActions.createMachineCompleted()).toEqual({
            type: "CREATE_MACHINES_COMPLETED",
        })
    })
    test('should handle CREATE_MACHINES_SUCCESS', () => {
        const params = 'Parameter'
        expect(machineActions.createMachineSuccess(params)).toEqual({
            type: "CREATE_MACHINES_SUCCESS",
            payload: { params }
        })
    })
    test('should handle CREATE_MACHINES_ERROR', () => {
        const error = 'Error'
        expect(machineActions.createMachineError(error)).toEqual({
            type: "CREATE_MACHINES_ERROR",
            payload: error
        })
    })
    test('should handle RESET_MACHINES', () => {
        expect(machineActions.resetMachines()).toEqual({
            type: "RESET_MACHINES",
        })
    })
    test('should create FETCH_MACHINES_PENDING when fetching app is started and FETCH_MACHINES_SUCCESS when fetching is done and FETCH_MACHINES_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {}
        return store.dispatch(machineActions.fetchMachines(params)).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_MACHINES_PENDING');
            expect(actions[1].type).toEqual('FETCH_MACHINES_SUCCESS');
            expect(actions[2].type).toEqual('FETCH_MACHINES_COMPLETED');
            const machine = actions[1].payload;
            machine.forEach(machine => {
                expect(machine).toHaveProperty('id');
                expect(machine).toHaveProperty('name');
                expect(machine).toHaveProperty('os');
                expect(machine).toHaveProperty('ip');
                expect(machine).toHaveProperty('mac');
            });

        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('FETCH_MACHINES_PENDING');
            expect(actions[1].type).toEqual('FETCH_MACHINES_ERROR');
            expect(actions[2].type).toEqual('FETCH_MACHINES_COMPLETED');
        })
    })
    test('should create CREATE_MACHINE_PENDING when Creating app is started and CREATE_MACHINE_SUCCESS when Creating is done and CREATE_MACHINE_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = {
            "id": "67asdd2b441-e565-b1a7-1770-19300c29c9ac",
            "name": "qusadis aute minim ad",
            "os": "tyasdpe-not-found",
            "ip": "23343.222.151.112",
            "mac": "99:9I:32:Y9:6J:E7"
        }
        return store.dispatch(machineActions.createMachine(params)).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('CREATE_MACHINES_PENDING');
            expect(actions[1].type).toEqual('CREATE_MACHINES_SUCCESS');
            expect(actions[2].type).toEqual('CREATE_MACHINES_COMPLETED');
            const machine = actions[1].payload.params;
            expect(machine).toHaveProperty('id');
            expect(machine).toHaveProperty('name');
            expect(machine).toHaveProperty('os');
            expect(machine).toHaveProperty('ip');
            expect(machine).toHaveProperty('mac');

        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('CREATE_MACHINES_PENDING');
            expect(actions[1].type).toEqual('CREATE_MACHINES_ERROR');
            expect(actions[2].type).toEqual('CREATE_MACHINES_COMPLETED');
        })
    })
    test('should create DELETE_MACHINE_PENDING when Creating app is started and DELETE_MACHINE_SUCCESS when Creating is done and DELETE_MACHINE_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        jest.spyOn(store, 'getState').mockImplementation(() => { })
        const params = '63c45084-1880-b539-0813-c742d0bas90b20'
        return store.dispatch(machineActions.deleteMachine(params)).then((deleteResponce) => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_MACHINES_PENDING');
            expect(actions[1].type).toEqual('DELETE_MACHINES_SUCCESS');
            expect(actions[2].type).toEqual('DELETE_MACHINES_COMPLETED');
            const id = actions[1].payload;
            expect(id).toEqual(params);
            expect(deleteResponce.status).toBe(204);
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_MACHINES_PENDING');
            expect(actions[1].type).toEqual('DELETE_MACHINES_ERROR');
            expect(actions[2].type).toEqual('DELETE_MACHINES_COMPLETED');
        })
    })
    test('should create UPDATE_MACHINE_PENDING when updating app is started and UPDATE_MACHINE_SUCCESS when update is done and UPDATE_MACHINE_COMPLETED finally completed  ', () => {
        const initialState = {}
        const store = mockStore(initialState)
        // jest.spyOn(store, 'getState').mockImplementation(() => { })
        // jest.spyOn(PermissionHelper, 'checkPermission').mockImplementation(() => true)
        const params = [
            {
                "id": "67d2b441-e565-b1a7-1770-19300c29c9ac",
                "name": "quis aute minim ad",
                "os": "type-not-found",
                "ip": "233.222.151.112",
                "mac": "99:9I:32:Y9:6J:E7"
            },
            {
                "id": "42d5abb8-1416-6630-331c-c3da79c25f28",
                "name": "in Excepteur",
                "os": "Unix",
                "ip": "124.241.141.134",
                "mac": "78:6R:18:J9:8E:C6"
            }]
        const newData = [
            {
                "id": "67d2b441-e665-b1a7-1770-19300c29c9ac",
                "name": "quis aute minim ad",
                "os": "type-found",
                "ip": "233.2892.151.112",
                "mac": "99:9I:32:Y9:6J:E7"
            },
            {
                "id": "42d5abb8-1416-6630-331c-c3da79c25f28",
                "name": "in Excepteur",
                "os": "Unix",
                "ip": "154.241.141.134",
                "mac": "78:6R:18:J9:8E:C6"
            }
        ]
        const id = '6be7b591-fc4f-3eca-7128-3a52c30366e2'
        return store.dispatch(machineActions.updateMachine(params, newData, id)).then(() => {
            const actions = store.getActions();
            // console.log(actions)
            expect(actions[0].type).toEqual('UPDATE_MACHINES_PENDING');
            expect(actions[1].type).toEqual('UPDATE_MACHINES_SUCCESS');
            expect(actions[2].type).toEqual('UPDATE_MACHINES_COMPLETED');
            const machine = actions[1].payload.updateMachine;
            // app.forEach(app => {
            // console.log(app)
            expect(machine).toHaveProperty('id');
            expect(machine).toHaveProperty('name');
            expect(machine).toHaveProperty('os');
            expect(machine).toHaveProperty('ip');
            expect(machine).toHaveProperty('mac');
            // });
        }).catch(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('UPDATE_MACHINES_PENDING');
            expect(actions[1].type).toEqual('UPDATE_MACHINES_ERROR');
            expect(actions[2].type).toEqual('UPDATE_MACHINES_COMPLETED');
        })
    })




})