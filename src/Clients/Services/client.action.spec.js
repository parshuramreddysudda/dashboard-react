import * as clientActions from './clients.action'

describe('Testing Clients Component Actions ', () => {

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
        const params='Parameter'
        expect(clientActions.createClientSuccess(params)).toEqual({
            type: "CREATE_CLIENTS_SUCCESS",
            payload:{params}
        })
    })
    test('should handle CREATE_CLIENTS_ERROR', () => {
        const error='Error'
        expect(clientActions.createClientError(error)).toEqual({
            type: "CREATE_CLIENTS_ERROR",
            payload:error
        })
    })
    test('should handle RESET_CLIENTS', () => {
        expect(clientActions.resetClients()).toEqual({
            type: "RESET_CLIENTS",
        })
    })
    


})