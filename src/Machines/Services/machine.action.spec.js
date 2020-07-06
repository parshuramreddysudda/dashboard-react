import * as machineActions from './machine.action'

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
    test('should handle DELETE_machine_PENDING', () => {
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
        const params='Parameter'
        expect(machineActions.createMachineSuccess(params)).toEqual({
            type: "CREATE_MACHINES_SUCCESS",
            payload:{params}
        })
    })
    test('should handle CREATE_MACHINES_ERROR', () => {
        const error='Error'
        expect(machineActions.createMachineError(error)).toEqual({
            type: "CREATE_MACHINES_ERROR",
            payload:error
        })
    })
    test('should handle RESET_MACHINES', () => {
        expect(machineActions.resetMachines()).toEqual({
            type: "RESET_MACHINES",
        })
    })
    


})