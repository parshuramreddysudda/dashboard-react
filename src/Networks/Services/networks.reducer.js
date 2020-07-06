const initialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
  }
  
  const networkReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'FETCH_NETWORK_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_NETWORK_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'FETCH_NETWORK_SUCCESS':
        return {
          ...state,
          items: action.payload
        };
  
      case 'FETCH_NETWORK_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'RESET_NETWORK':
        return {
          ...state,
          items: []
        }
      case 'UPDATE_NETWORK_PENDING':
        return {
          ...state,
          updating: true
        };
      case 'UPDATE_NETWORK_COMPLETED':
        return {
          ...state,
          updating: false,
        };
      case 'UPDATE_NETWORK_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      case 'UPDATE_NETWORK_SUCCESS':
        return {
          ...state,
          items:action.payload.updateData
        }
      case 'DELETE_NETWORK_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'DELETE_NETWORK_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'DELETE_NETWORK_SUCCESS':
        let deleteNetworkId = action.payload
        return {
          ...state,
          items: [...state.items.filter(machine => machine.id !== deleteNetworkId)]
        };
  
      case 'DELETE_NETWORK_ERROR':
        return {
          ...state,
          error: action.payload
        };
        case 'CREATE_NETWORK_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'CREATE_NETWORK_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'CREATE_NETWORK_SUCCESS':
        return {
          ...state,
          items: [...state.items,action.payload.params]
        };
  
      case 'CREATE_NETWORK_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  
  }
  export default networkReducer;