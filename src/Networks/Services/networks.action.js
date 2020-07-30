import API from '../../MainServices/AxiosInstance'
export const fetchNetworksPending = () => ({
  type: 'FETCH_NETWORK_PENDING'
});

export const fetchNetworksCompleted = () => ({
  type: 'FETCH_NETWORK_COMPLETED'
});

export const fetchNetworksSuccess = (network) => ({
  type: 'FETCH_NETWORK_SUCCESS',
  payload: network
});
export const fetchNetworksError = (error) => ({
  type: 'FETCH_NETWORK_ERROR',
  payload: error
});
export const updateNetworkPending = () => ({
  type: 'UPDATE_NETWORK_PENDING'
});
export const updateNetworkCompleted = () => ({
  type: 'UPDATE_NETWORK_COMPLETED'
});
export const updateNetworkSuccess = (updateNetwork, updateData,id) => ({
  type: 'UPDATE_NETWORK_SUCCESS',
  payload: { updateNetwork,updateData ,id }

});
export const updateNetworkError = (error) => ({
  type: 'UPDATE_NETWORK_ERROR',
  payload: error
});
export const deleteNetworkPending = () => ({
  type: 'DELETE_NETWORK_PENDING'
});

export const deleteNetworkCompleted = () => ({
  type: 'DELETE_NETWORK_COMPLETED'
});

export const deleteNetworkSuccess = (id) => ({
  type: 'DELETE_NETWORK_SUCCESS',
  payload: id
});
export const deleteNetworkError = (error) => ({
  type: 'DELETE_NETWORK_ERROR',
  payload: error
});

export const createNetworkPending = () => ({
  type: 'CREATE_NETWORK_PENDING'
});

export const createNetworkCompleted = () => ({
  type: 'CREATE_NETWORK_COMPLETED'
});

export const createNetworkSuccess = (params) => ({
  type: 'CREATE_NETWORK_SUCCESS',
  payload: {params}
});
export const createNetworkError = (error) => ({
  type: 'CREATE_NETWORK_ERROR',
  payload: error
});
export const resetNetworks = () => ({ 
  type: 'RESET_NETWORK'
});

export const fetchNetworks = (params) => (dispatch) => {

  dispatch(fetchNetworksPending());
  return API.get('network', { params: params })
    .then(fetchNetworksResponce => {
      dispatch(fetchNetworksSuccess(fetchNetworksResponce.data));
    })
    .catch(error => dispatch(fetchNetworksError(error)))
    .finally(() => dispatch(fetchNetworksCompleted()));
};

export const updateNetwork = (params,newData, id) => (dispatch) => {

  dispatch(updateNetworkPending());
  const reqParams = `${params.id}&name=${params.name}&started=${params.started}&destroy=${params.destroy}`
  return API.put(`network/${id}?=${reqParams}`)
    .then(updateNetworkResponce => {

      // const network = NetworksHelper.formatNetworks(updateNetworkResponce);
      dispatch(updateNetworkSuccess(updateNetworkResponce.data,newData.data,params,id));
    })
    .catch(error => dispatch(updateNetworkError(error)))
    .finally(() => dispatch(updateNetworkCompleted()));
};

export const deleteNetwork = (id) => (dispatch) => {
  dispatch(deleteNetworkPending());
  return API.delete(`network/${id}`)
    .then(deleteNetworkResponce => {

      // const network = NetworksHelper.formatNetworks(deleteNetworkResponce);
      dispatch(deleteNetworkSuccess(id));
      return Promise.resolve(deleteNetworkResponce)
    })
    .catch(error => dispatch(deleteNetworkError(error)))
    .finally(() => dispatch(deleteNetworkCompleted()));
};


export const createNetwork = (params) => (dispatch) => {
  dispatch(createNetworkPending());
  const reqParams = `id=${params.id}&name=${params.name}&started=${params.started}&destroy=${params.destroy}`
  return API.put(`network/${params.id}?=${reqParams}`)
    .then(createNetworkResponce => {
      // const network = NetworksHelper.formatNetworks(createNetworkResponce);
      dispatch(createNetworkSuccess(params));
    })
    .catch(error => dispatch(createNetworkError(error)))
    .finally(() => dispatch(createNetworkCompleted()));
};

