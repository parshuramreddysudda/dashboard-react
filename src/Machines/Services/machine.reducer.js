const initialState = {
    items: [],
    loading: false,
    error: null,
    updating:false
  }
  
  const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'FETCH_MACHINES_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_MACHINES_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'FETCH_MACHINES_SUCCESS':
        return {
          ...state,
          items: action.payload
        };
  
      case 'FETCH_MACHINES_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'RESET_MACHINES':
        return {
          ...state,
          items: []
        }
      case 'UPDATE_MACHINES_PENDING':
        return {
          ...state,
          updating: true
        };
      case 'UPDATE_MACHINES_COMPLETED':
        return {
          ...state,
          updating: false
        };
      case 'UPDATE_MACHINES_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      case 'UPDATE_MACHINES_SUCCESS':
        return {
          ...state,
          items:action.payload.updateData
        }
      case 'DELETE_MACHINES_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'DELETE_MACHINES_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'DELETE_MACHINES_SUCCESS':
        let deleteMachineId = action.payload
        return {
          ...state,
          items: [...state.items.filter(device => device.id !== deleteMachineId)]
        };
  
      case 'DELETE_MACHINES_ERROR':
        return {
          ...state,
          error: action.payload
        };
        case 'CREATE_MACHINES_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'CREATE_MACHINES_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'CREATE_MACHINES_SUCCESS':
        return {
          ...state,
          items: [...state.items,action.payload.params]
        };
  
      case 'CREATE_MACHINES_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  
  }
  export default deviceReducer;