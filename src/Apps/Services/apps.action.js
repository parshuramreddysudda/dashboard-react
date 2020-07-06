import API from '../../MainServices/AxiosInstance'

export const fetchAppsPending = () => ({
  type: 'FETCH_APP_PENDING'
});

export const fetchAppsCompleted = () => ({
  type: 'FETCH_APP_COMPLETED'
});

export const fetchAppsSuccess = (machines) => ({
  type: 'FETCH_APP_SUCCESS',
  payload: machines
});
export const fetchAppsError = (error) => ({
  type: 'FETCH_APP_ERROR',
  payload: error
});
export const updateAppPending = () => ({
  type: 'UPDATE_APP_PENDING'
});
export const updateAppCompleted = () => ({
  type: 'UPDATE_APP_COMPLETED'
});
export const updateAppSuccess = (updateApp, newData,id) => ({
  type: 'UPDATE_APP_SUCCESS',
  payload: { updateApp,newData ,id }

});
export const updateAppError = (error) => ({
  type: 'UPDATE_APP_ERROR',
  payload: error
});
export const deleteAppPending = () => ({
  type: 'DELETE_APP_PENDING'
});

export const deleteAppCompleted = () => ({
  type: 'DELETE_APP_COMPLETED'
});

export const deleteAppSuccess = (id) => ({
  type: 'DELETE_APP_SUCCESS',
  payload: id
});
export const deleteAppError = (error) => ({
  type: 'DELETE_APP_ERROR',
  payload: error
});

export const createAppPending = () => ({
  type: 'CREATE_APP_PENDING'
});

export const createAppCompleted = () => ({
  type: 'CREATE_APP_COMPLETED'
});

export const createAppSuccess = (params) => ({
  type: 'CREATE_APP_SUCCESS',
  payload: {params}
});
export const createAppError = (error) => ({
  type: 'CREATE_APP_ERROR',
  payload: error
});
export const resetApps = () => ({ 
  type: 'RESET_APP'
});

export const fetchApps = (params) => (dispatch) => {

  dispatch(fetchAppsPending());
  return API.get('Apps', { params: params })
    .then(fetchAppsResponce => {

      // const machines = MachinesHelper.formatMachines(fetchAppsResponce);
      dispatch(fetchAppsSuccess(fetchAppsResponce.data));
    })
    .catch(error => dispatch(fetchAppsError(error)))
    .finally(() => dispatch(fetchAppsCompleted()));
};

export const updateApp = (params,newData,id) => (dispatch) => {

  dispatch(updateAppPending());
  const reqParams = `${params.id}&name=${params.name}&state=${params.state}&created=${params.created}&updated=${params.updated}&type=${params.type}`
  return API.put(`Apps/${id}?=${reqParams}`)
    .then(updateAppResponce => {
      // console.log(newData)
      // const machines = MachinesHelper.formatMachines(updateAppResponce);
      dispatch(updateAppSuccess(updateAppResponce.data,newData.data,id));
    })
    .catch(error => dispatch(updateAppError(error)))
    .finally(() => dispatch(updateAppCompleted()));
};

export const deleteApp = (id) => (dispatch) => {
  dispatch(deleteAppPending());
  return API.delete(`Apps/${id}`)
    .then(deleteAppResponce => {

      // const machines = MachinesHelper.formatMachines(deleteAppResponce);
      dispatch(deleteAppSuccess(id));
      return Promise.resolve(deleteAppResponce);
    })
    .catch(error => dispatch(deleteAppError(error)))
    .finally(() => dispatch(deleteAppCompleted()));
};


export const createApp = (params) => (dispatch) => {
  dispatch(createAppPending());
  const reqParams = `id=${params.id}&name=${params.name}&version=${params.version}&installed=${params.installed}&type=${params.type}&availableat=${params.availableat}`
  return API.put(`Apps/${params.id}?=${reqParams}`)
    .then(createAppResponce => {
      // const machines = MachinesHelper.formatMachines(createAppResponce);
      dispatch(createAppSuccess(params));
    })
    .catch(error => dispatch(createAppError(error)))
    .finally(() => dispatch(createAppCompleted()));
};

