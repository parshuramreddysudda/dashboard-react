import clientReducer from './clients.reducer';

const intialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
}
describe('Testing Clients Component Reducers ', () => {
    test('Should return Initial State ', () => {

        expect(clientReducer(undefined, {})).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_CLIENTS_PENDING ', () => {

        expect(clientReducer(intialState, {
            type: 'FETCH_CLIENTS_PENDING'
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })


    })

    test('Should handle FETCH_CLIENTS_COMPLETED ', () => {

        expect(clientReducer(intialState, {
            type: 'FETCH_CLIENTS_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_CLIENTS_SUCCESS ', () => {

        expect(clientReducer(intialState, {
            type: 'FETCH_CLIENTS_SUCCESS',
            payload: ['Data']
        })).toEqual({
            items: ["Data", ],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_CLIENTS_ERROR ', () => {

        expect(clientReducer(intialState, {
            type: 'FETCH_CLIENTS_ERROR',
            payload: 'Error'
        })).toEqual({
            items: [],
            loading: false,
            error: 'Error',
            updating: false
        })
    })
    test('Should handle RESET_CLIENTS ', () => {

        expect(clientReducer(intialState, {
            type: 'RESET_CLIENTS'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle UPDATE_CLIENT_PENDING ', () => {

        expect(clientReducer(intialState, {
            type: 'UPDATE_CLIENT_PENDING'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: true
        })
    })
    test('Should handle UPDATE_CLIENT_COMPLETED ', () => {

        expect(clientReducer(intialState, {
            type: 'UPDATE_CLIENT_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle UPDATE_CLIENT_ERROR ', () => {

        expect(clientReducer(intialState, {
            type: 'UPDATE_CLIENT_ERROR',
            payload: ["Error Data"]
        })).toEqual({
            items: [],
            loading: false,
            error: ["Error Data"],
            updating: false
        })
    })
    test('Should handle UPDATE_CLIENT_SUCCESS ', () => {

        expect(clientReducer(intialState, {
            type: 'UPDATE_CLIENT_SUCCESS',
            payload: {
                newState: {
                    data: "Update State"
                }
            }
        })).toEqual({
            items: "Update State",
            loading: false,
            error: null,
            updating: false
        })
    })

    test('Should handle DELETE_CLIENTS_PENDING ', () => {

        expect(clientReducer(intialState, {
            type: 'DELETE_CLIENTS_PENDING',
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })
    test('Should handle DELETE_CLIENTS_COMPLETED ', () => {

        expect(clientReducer(intialState, {
            type: 'DELETE_CLIENTS_COMPLETED',
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle DELETE_CLIENTS_SUCCESS ', () => {

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

        expect(clientReducer(deleteState, {
            type: 'DELETE_CLIENTS_SUCCESS',
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

    test('Should handle DELETE_CLIENTS_ERROR ', () => {

        expect(clientReducer(intialState, {
            type: 'DELETE_CLIENTS_ERROR',
            payload: 'Error'
        })).toEqual({
            items: [],
            loading: false,
            error: "Error",
            updating: false
        })
    })
    test('Should handle CREATE_CLIENTS_PENDING ', () => {

        expect(clientReducer(intialState, {
            type: 'CREATE_CLIENTS_PENDING'
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_CLIENTS_COMPLETED ', () => {

        expect(clientReducer(intialState, {
            type: 'CREATE_CLIENTS_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_CLIENTS_SUCCESS ', () => {

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

        expect(clientReducer(createState, {
            type: 'CREATE_CLIENTS_SUCCESS',
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
    test('Should handle CREATE_CLIENTS_ERROR ', () => {

        expect(clientReducer(intialState, {
            type: 'CREATE_CLIENTS_ERROR',
            payload: 'Data'
        })).toEqual({
            items: [],
            loading: false,
            error: "Data",
            updating: false
        })
    })
})