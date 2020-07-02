import networkReducer from './networks.reducer';

const intialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
}
describe('Testing Network Component Reducers ', () => {
    test('Should return Initial State ', () => {

        expect(networkReducer(undefined, {})).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_NETWORK_PENDING ', () => {

        expect(networkReducer(intialState, {
            type: 'FETCH_NETWORK_PENDING'
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })


    })

    test('Should handle FETCH_NETWORK_COMPLETED ', () => {

        expect(networkReducer(intialState, {
            type: 'FETCH_NETWORK_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_NETWORK_SUCCESS ', () => {

        expect(networkReducer(intialState, {
            type: 'FETCH_NETWORK_SUCCESS',
            payload: ['Data']
        })).toEqual({
            items: ["Data", ],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_NETWORK_ERROR ', () => {

        expect(networkReducer(intialState, {
            type: 'FETCH_NETWORK_ERROR',
            payload: 'Error'
        })).toEqual({
            items: [],
            loading: false,
            error: 'Error',
            updating: false
        })
    })
    test('Should handle RESET_NETWORK ', () => {

        expect(networkReducer(intialState, {
            type: 'RESET_NETWORK'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle UPDATE_NETWORK_PENDING ', () => {

        expect(networkReducer(intialState, {
            type: 'UPDATE_NETWORK_PENDING'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: true
        })
    })
    test('Should handle UPDATE_NETWORK_COMPLETED ', () => {

        expect(networkReducer(intialState, {
            type: 'UPDATE_NETWORK_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle UPDATE_NETWORK_ERROR ', () => {

        expect(networkReducer(intialState, {
            type: 'UPDATE_NETWORK_ERROR',
            payload: ["Error Data"]
        })).toEqual({
            items: [],
            loading: false,
            error: ["Error Data"],
            updating: false
        })
    })
    test('Should handle UPDATE_NETWORK_SUCCESS ', () => {

        expect(networkReducer(intialState, {
            type: 'UPDATE_NETWORK_SUCCESS',
            payload: {
                updateData:"Update State"
            }
        })).toEqual({
            items: "Update State",
            loading: false,
            error: null,
            updating: false
        })
    })

    test('Should handle DELETE_NETWORK_PENDING ', () => {

        expect(networkReducer(intialState, {
            type: 'DELETE_NETWORK_PENDING',
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })
    test('Should handle DELETE_NETWORK_COMPLETED ', () => {

        expect(networkReducer(intialState, {
            type: 'DELETE_NETWORK_COMPLETED',
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle DELETE_NETWORK_SUCCESS ', () => {

        const deleteState = {
            items: [{
                    id: '1',
                    name: 'Mac',
                    state: 'registered'
                },
                {
                    id: '2',
                    name: 'Windows',
                    state: 'unregistered'
                },
                {
                    id: '3',
                    name: 'Android',
                    state: 'registered'
                },
            ],
            loading: false,
            error: null,
            updating: false
        }

        expect(networkReducer(deleteState, {
            type: 'DELETE_NETWORK_SUCCESS',
            payload: '2'
        })).toEqual({
            items: [{
                    id: '1',
                    name: 'Mac',
                    state: 'registered'
                },
                {
                    id: '3',
                    name: 'Android',
                    state: 'registered'
                },
            ],
            loading: false,
            error: null,
            updating: false
        })
    })

    test('Should handle DELETE_NETWORK_ERROR ', () => {

        expect(networkReducer(intialState, {
            type: 'DELETE_NETWORK_ERROR',
            payload: 'Error'
        })).toEqual({
            items: [],
            loading: false,
            error: "Error",
            updating: false
        })
    })
    test('Should handle CREATE_NETWORK_PENDING ', () => {

        expect(networkReducer(intialState, {
            type: 'CREATE_NETWORK_PENDING'
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_NETWORK_COMPLETED ', () => {

        expect(networkReducer(intialState, {
            type: 'CREATE_NETWORK_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_NETWORK_SUCCESS ', () => {

        const createState = {
            items: [{
                    id: '1',
                    name: 'Mac',
                    state: 'registered'
                },
                {
                    id: '2',
                    name: 'Windows',
                    state: 'unregistered'
                }
            ],
            loading: false,
            error: null,
            updating: false
        }
        const newData = {
            id: '3',
            name: 'Android',
            state: 'registered'
        }

        expect(networkReducer(createState, {
            type: 'CREATE_NETWORK_SUCCESS',
            payload: {
                params: newData
            }
        })).toEqual({
            items: [{
                    id: '1',
                    name: 'Mac',
                    state: 'registered'
                },
                {
                    id: '2',
                    name: 'Windows',
                    state: 'unregistered'
                },
                {
                    id: '3',
                    name: 'Android',
                    state: 'registered'
                },
            ],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_NETWORK_ERROR ', () => {

        expect(networkReducer(intialState, {
            type: 'CREATE_NETWORK_ERROR',
            payload: 'Data'
        })).toEqual({
            items: [],
            loading: false,
            error: "Data",
            updating: false
        })
    })
})