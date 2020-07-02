import * as deviceActions from './machine.action'

describe('Testing Machine Component Actions ', () => {

    test('should handle FETCH_MACHINES_PENDING', () => {
        expect(deviceActions.fetchMachinesPending()).toEqual({
            type: "FETCH_MACHINES_PENDING",
        })
    })
    test('should handle FETCH_MACHINES_COMPLETED', () => {
        expect(deviceActions.fetchMachinesCompleted()).toEqual({
            type: "FETCH_MACHINES_COMPLETED",
        })
    })
    test('should handle FETCH_MACHINES_SUCCESS', () => {
        expect(deviceActions.fetchMachinesSuccess()).toEqual({
            type: "FETCH_MACHINES_SUCCESS",
        })
    })
    test('should handle FETCH_MACHINES_ERROR', () => {
        expect(deviceActions.fetchMachinesError('Error data')).toEqual({
            type: "FETCH_MACHINES_ERROR",
            payload: "Error data"
        })
    })
    test('should handle UPDATE_MACHINES_PENDING', () => {
        expect(deviceActions.updateMachinePending()).toEqual({
            type: "UPDATE_MACHINES_PENDING"
        })
    })
    test('should handle UPDATE_MACHINES_COMPLETED', () => {
        expect(deviceActions.updateMachineCompleted()).toEqual({
            type: "UPDATE_MACHINES_COMPLETED"
        })
    })
    test('should handle UPDATE_MACHINES_SUCCESS', () => {
        const updateMachine = 'update'
        const updateData = 'data'
        const id = 'id'
        expect(deviceActions.updateMachineSuccess(updateMachine, updateData, id)).toEqual({
            type: "UPDATE_MACHINES_SUCCESS",
            payload: { updateMachine, updateData, id }
        })
    })
    test('should handle UPDATE_MACHINES_ERROR', () => {
        const error = 'Error'
        expect(deviceActions.updateMachineError(error)).toEqual({
            type: "UPDATE_MACHINES_ERROR",
            payload: 'Error'
        })
    })
    test('should handle DELETE_DEVICE_PENDING', () => {
        expect(deviceActions.deleteMachinePending()).toEqual({
            type: "DELETE_MACHINES_PENDING",
        })
    })
    test('should handle DELETE_MACHINES_SUCCESS', () => {
        const id = 'ID'
        expect(deviceActions.deleteMachineSuccess(id)).toEqual({
            type: "DELETE_MACHINES_SUCCESS",
            payload: 'ID'
        })
    })
    test('should handle DELETE_MACHINES_ERROR', () => {
        const error = 'error'
        expect(deviceActions.deleteMachineError(error)).toEqual({
            type: "DELETE_MACHINES_ERROR",
            payload: 'error'
        })
    })
    test('should handle CREATE_MACHINES_PENDING', () => {
        expect(deviceActions.createMachinePending()).toEqual({
            type: "CREATE_MACHINES_PENDING",
        })
    })
    test('should handle CREATE_MACHINES_COMPLETED', () => {
        expect(deviceActions.createMachineCompleted()).toEqual({
            type: "CREATE_MACHINES_COMPLETED",
        })
    })
    test('should handle CREATE_MACHINES_SUCCESS', () => {
        const params='Parameter'
        expect(deviceActions.createMachineSuccess(params)).toEqual({
            type: "CREATE_MACHINES_SUCCESS",
            payload:{params}
        })
    })
    test('should handle CREATE_MACHINES_ERROR', () => {
        const error='Error'
        expect(deviceActions.createMachineError(error)).toEqual({
            type: "CREATE_MACHINES_ERROR",
            payload:error
        })
    })
    test('should handle RESET_MACHINES', () => {
        expect(deviceActions.resetMachines()).toEqual({
            type: "RESET_MACHINES",
        })
    })
    


})