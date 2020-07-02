const initialState = {
    items: [],
    loading: false,
    error: null,
    updating:false
  }
  
  const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'FETCH_CLIENTS_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_CLIENTS_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'FETCH_CLIENTS_SUCCESS':
        return {
          ...state,
          items: action.payload
        };
  
      case 'FETCH_CLIENTS_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'RESET_CLIENTS':
        return {
          ...state,
          items: []
        }
      case 'UPDATE_CLIENT_PENDING':
        return {
          ...state,
          updating: true
        };
      case 'UPDATE_CLIENT_COMPLETED':
        return {
          ...state,
          updating: false
        };
      case 'UPDATE_CLIENT_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      case 'UPDATE_CLIENT_SUCCESS':
        return {
          ...state,
          items:action.payload.newState.data
        }
      case 'DELETE_CLIENTS_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'DELETE_CLIENTS_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'DELETE_CLIENTS_SUCCESS':
        let deleteClientID = action.payload
        return {
          ...state,
          items: [...state.items.filter(client => client.id !== deleteClientID)]
        };
  
      case 'DELETE_CLIENTS_ERROR':
        return {
          ...state,
          error: action.payload
        };
        case 'CREATE_CLIENTS_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'CREATE_CLIENTS_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'CREATE_CLIENTS_SUCCESS':
        return {
          ...state,
          items: [...state.items,action.payload.params]
        };
  
      case 'CREATE_CLIENTS_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  
  }
  export default clientsReducer;