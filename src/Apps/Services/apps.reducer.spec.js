import appReducer from './apps.reducer';

const intialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
}
describe('Testing Apps Component Reducers ', () => {
    test('Should return Initial State ', () => {

        expect(appReducer(undefined, {})).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_APP_PENDING ', () => {

        expect(appReducer(intialState, {
            type: 'FETCH_APP_PENDING'
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })

    test('Should handle FETCH_APP_COMPLETED ', () => {

        expect(appReducer(intialState, {
            type: 'FETCH_APP_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_APP_SUCCESS ', () => {

        expect(appReducer(intialState, {
            type: 'FETCH_APP_SUCCESS',
            payload: ['Data']
        })).toEqual({
            items: ["Data", ],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle FETCH_APP_ERROR ', () => {

        expect(appReducer(intialState, {
            type: 'FETCH_APP_ERROR',
            payload: 'Error'
        })).toEqual({
            items: [],
            loading: false,
            error: 'Error',
            updating: false
        })
    })
    test('Should handle RESET_APP ', () => {

        expect(appReducer(intialState, {
            type: 'RESET_APP'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle UPDATE_APP_PENDING ', () => {

        expect(appReducer(intialState, {
            type: 'UPDATE_APP_PENDING'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: true
        })
    })
    test('Should handle UPDATE_APP_COMPLETED ', () => {

        expect(appReducer(intialState, {
            type: 'UPDATE_APP_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle UPDATE_APP_ERROR ', () => {

        expect(appReducer(intialState, {
            type: 'UPDATE_APP_ERROR',
            payload: ["Error Data"]
        })).toEqual({
            items: [],
            loading: false,
            error: ["Error Data"],
            updating: false
        })
    })
    test('Should handle UPDATE_APP_SUCCESS ', () => {

        expect(appReducer(intialState, {
            type: 'UPDATE_APP_SUCCESS',
            payload: {
                newData:"Update State"
            }
        })).toEqual({
            items: "Update State",
            loading: false,
            error: null,
            updating: false
        })
    })

    test('Should handle DELETE_APP_PENDING ', () => {

        expect(appReducer(intialState, {
            type: 'DELETE_APP_PENDING',
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })
    test('Should handle DELETE_APP_COMPLETED ', () => {

        expect(appReducer(intialState, {
            type: 'DELETE_APP_COMPLETED',
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle DELETE_APP_SUCCESS ', () => {

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

        expect(appReducer(deleteState, {
            type: 'DELETE_APP_SUCCESS',
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

    test('Should handle DELETE_APP_ERROR ', () => {

        expect(appReducer(intialState, {
            type: 'DELETE_APP_ERROR',
            payload: 'Error'
        })).toEqual({
            items: [],
            loading: false,
            error: "Error",
            updating: false
        })
    })
    test('Should handle CREATE_APP_PENDING ', () => {

        expect(appReducer(intialState, {
            type: 'CREATE_APP_PENDING'
        })).toEqual({
            items: [],
            loading: true,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_APP_COMPLETED ', () => {

        expect(appReducer(intialState, {
            type: 'CREATE_APP_COMPLETED'
        })).toEqual({
            items: [],
            loading: false,
            error: null,
            updating: false
        })
    })
    test('Should handle CREATE_APP_SUCCESS ', () => {

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

        expect(appReducer(createState, {
            type: 'CREATE_APP_SUCCESS',
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
    test('Should handle CREATE_APP_ERROR ', () => {

        expect(appReducer(intialState, {
            type: 'CREATE_APP_ERROR',
            payload: 'Data'
        })).toEqual({
            items: [],
            loading: false,
            error: "Data",
            updating: false
        })
    })
})