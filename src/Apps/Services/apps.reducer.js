const initialState = {
    items: [],
    loading: false,
    error: null,
    updating: false
  }
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'FETCH_APP_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_APP_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'FETCH_APP_SUCCESS':
        return {
          ...state,
          items: action.payload
        };
  
      case 'FETCH_APP_ERROR':
        return {
          ...state,
          error: action.payload
        };
      case 'RESET_APP':
        return {
          ...state,
          items: []
        }
      case 'UPDATE_APP_PENDING':
        return {
          ...state,
          updating: true
        };
      case 'UPDATE_APP_COMPLETED':
        return {
          ...state,
          updating: false
        };
      case 'UPDATE_APP_ERROR':
        return {
          ...state,
          error: action.payload
        }; 
      case 'UPDATE_APP_SUCCESS':
  
        return {
          ...state,
          items:action.payload.newData
        }
      case 'DELETE_APP_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'DELETE_APP_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'DELETE_APP_SUCCESS':
        let deleteAppId = action.payload
        return {
          ...state,
          items: [...state.items.filter(app => app.id !== deleteAppId)]
        };
  
      case 'DELETE_APP_ERROR':
        return {
          ...state,
          error: action.payload
        };
        case 'CREATE_APP_PENDING':
        return {
          ...state,
          loading: true
        };
      case 'CREATE_APP_COMPLETED':
        return {
          ...state,
          loading: false
        };
  
      case 'CREATE_APP_SUCCESS':
        return {
          ...state,
          items: [...state.items,action.payload.params]
        };
  
      case 'CREATE_APP_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  
  }
  export default appReducer;