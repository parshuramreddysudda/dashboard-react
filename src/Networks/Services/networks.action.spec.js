import * as networkActions from './networks.action'

describe('Testing Network Component Actions ', () => {

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
        const params='Parameter'
        expect(networkActions.createNetworkSuccess(params)).toEqual({
            type: "CREATE_NETWORK_SUCCESS",
            payload:{params}
        })
    })
    test('should handle CREATE_NETWORK_ERROR', () => {
        const error='Error'
        expect(networkActions.createNetworkError(error)).toEqual({
            type: "CREATE_NETWORK_ERROR",
            payload:error
        })
    })
    test('should handle RESET_NETWORK', () => {
        expect(networkActions.resetNetworks()).toEqual({
            type: "RESET_NETWORK",
        })
    })
    


})