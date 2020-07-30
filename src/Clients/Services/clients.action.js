
import API from '../../MainServices/AxiosInstance'
export const fetchClientsPending = () => ({
  type: 'FETCH_CLIENTS_PENDING'
});

export const fetchClientsCompleted = () => ({
  type: 'FETCH_CLIENTS_COMPLETED'
});

export const fetchClientsSuccess = (machines) => ({
  type: 'FETCH_CLIENTS_SUCCESS',
  payload: machines
});
export const fetchClientsError = (error) => ({
  type: 'FETCH_CLIENTS_ERROR',
  payload: error
});
export const updateClientPending = () => ({
  type: 'UPDATE_CLIENT_PENDING'
});
export const updateClientCompleted = () => ({
  type: 'UPDATE_CLIENT_COMPLETED'
});
export const updateClientSuccess = (updateClient, newState,id) => ({
  type: 'UPDATE_CLIENT_SUCCESS',
  payload: { updateClient,newState ,id }

});
export const updateClientError = (error) => ({
  type: 'UPDATE_CLIENT_ERROR',
  payload: error
});
export const deleteClientPending = () => ({
  type: 'DELETE_CLIENTS_PENDING'
});

export const deleteClientCompleted = () => ({
  type: 'DELETE_CLIENTS_COMPLETED'
});

export const deleteClientSuccess = (id) => ({
  type: 'DELETE_CLIENTS_SUCCESS',
  payload: id
});
export const deleteClientError = (error) => ({
  type: 'DELETE_CLIENTS_ERROR',
  payload: error
});

export const createClientPending = () => ({
  type: 'CREATE_CLIENTS_PENDING'
});

export const createClientCompleted = () => ({
  type: 'CREATE_CLIENTS_COMPLETED'
});

export const createClientSuccess = (params) => ({
  type: 'CREATE_CLIENTS_SUCCESS',
  payload: {params}
});
export const createClientError = (error) => ({
  type: 'CREATE_CLIENTS_ERROR',
  payload: error
});
export const resetClients = () => ({ 
  type: 'RESET_CLIENTS'
});

export const fetchClients = (params) => (dispatch) => {

  dispatch(fetchClientsPending());
  return API.get('clients', { params: params })
    .then(fetchClientsResponce => {

      // const machines = MachinesHelper.formatMachines(fetchClientsResponce);
      dispatch(fetchClientsSuccess(fetchClientsResponce.data));
    })
    .catch(error => dispatch(fetchClientsError(error)))
    .finally(() => dispatch(fetchClientsCompleted()));
};

export const updateClient = (params,newState,id) => (dispatch) => {

  dispatch(updateClientPending());
  const reqParams = `${params.id}&name=${params.name}&state=${params.state}&created=${params.created}&updated=${params.updated}&type=${params.type}`
  return API.put(`clients/${id}?=${reqParams}`)
    .then(updateClientResponce => {

      // const machines = MachinesHelper.formatMachines(updateClientResponce);
      dispatch(updateClientSuccess(updateClientResponce.data,newState,id));
    })
    .catch(error => dispatch(updateClientError(error)))
    .finally(() => dispatch(updateClientCompleted()));
};

export const deleteClient = (id) => (dispatch) => {
  dispatch(deleteClientPending());

  return API.delete(`clients/${id}`)
    .then(deleteClientResponce => {

      // const machines = MachinesHelper.formatMachines(deleteClientResponce);
      dispatch(deleteClientSuccess(id));
      return Promise.resolve(deleteClientResponce)
    })
    .catch(error => dispatch(deleteClientError(error)))
    .finally(() => dispatch(deleteClientCompleted()));
};


export const createClient = (params) => (dispatch) => {
  dispatch(createClientPending());
  const reqParams = `id=${params.id}&name=${params.name}&state=${params.state}&created=${params.created}&updated=${params.updated}&type=${params.type}`
  return API.put(`clients/${params.id}?=${reqParams}`)
    .then(createClientResponce => {
      // const machines = MachinesHelper.formatMachines(createClientResponce);
      dispatch(createClientSuccess(params));
    })
    .catch(error => dispatch(createClientError(error)))
    .finally(() => dispatch(createClientCompleted()));
};

