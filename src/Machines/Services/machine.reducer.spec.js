import machineReducer from './machine.reducer';

const intialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
}
describe('Testing Machines Component Reducers ', () => {
    test('Should return Initial State ', () => {

        expect(machineReducer(undefined, {})).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_MACHINES_PENDING ', () => {

        expect(machineReducer(intialState, {
            type: 'FETCH_MACHINES_PENDING'
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })


    })

    test('Should handle FETCH_MACHINES_COMPLETED ', () => {

        expect(machineReducer(intialState, {
            type: 'FETCH_MACHINES_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_MACHINES_SUCCESS ', () => {

        expect(machineReducer(intialState, {
            type: 'FETCH_MACHINES_SUCCESS',
            payload: ['Data']
        })).toEqual({
            items: ["Data", ],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_MACHINES_ERROR ', () => {

        expect(machineReducer(intialState, {
            type: 'FETCH_MACHINES_ERROR',
            payload: 'Error'
        })).toEqual({
            items: [],
            loading: false,
            error: 'Error',
            updating: false
        })
    })
    test('Should handle RESET_MACHINES ', () => {

        expect(machineReducer(intialState, {
            type: 'RESET_MACHINES'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle UPDATE_MACHINES_PENDING ', () => {

        expect(machineReducer(intialState, {
            type: 'UPDATE_MACHINES_PENDING'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: true
        })
    })
    test('Should handle UPDATE_MACHINES_COMPLETED ', () => {

        expect(machineReducer(intialState, {
            type: 'UPDATE_MACHINES_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle UPDATE_MACHINES_ERROR ', () => {

        expect(machineReducer(intialState, {
            type: 'UPDATE_MACHINES_ERROR',
            payload: ["Error Data"]
        })).toEqual({
            items: [],
            loading: false,
            error: ["Error Data"],
            updating: false
        })
    })
    test('Should handle UPDATE_MACHINES_SUCCESS ', () => {

        expect(machineReducer(intialState, {
            type: 'UPDATE_MACHINES_SUCCESS',
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

    test('Should handle DELETE_MACHINES_PENDING ', () => {

        expect(machineReducer(intialState, {
            type: 'DELETE_MACHINES_PENDING',
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })
    test('Should handle DELETE_MACHINES_COMPLETED ', () => {

        expect(machineReducer(intialState, {
            type: 'DELETE_MACHINES_COMPLETED',
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle DELETE_MACHINES_SUCCESS ', () => {

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

        expect(machineReducer(deleteState, {
            type: 'DELETE_MACHINES_SUCCESS',
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

    test('Should handle DELETE_MACHINES_ERROR ', () => {

        expect(machineReducer(intialState, {
            type: 'DELETE_MACHINES_ERROR',
            payload: 'Error'
        })).toEqual({
            items: [],
            loading: false,
            error: "Error",
            updating: false
        })
    })
    test('Should handle CREATE_MACHINES_PENDING ', () => {

        expect(machineReducer(intialState, {
            type: 'CREATE_MACHINES_PENDING'
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_MACHINES_COMPLETED ', () => {

        expect(machineReducer(intialState, {
            type: 'CREATE_MACHINES_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_MACHINES_SUCCESS ', () => {

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

        expect(machineReducer(createState, {
            type: 'CREATE_MACHINES_SUCCESS',
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
    test('Should handle CREATE_MACHINES_ERROR ', () => {

        expect(machineReducer(intialState, {
            type: 'CREATE_MACHINES_ERROR',
            payload: 'Data'
        })).toEqual({
            items: [],
            loading: false,
            error: "Data",
            updating: false
        })
    })
})