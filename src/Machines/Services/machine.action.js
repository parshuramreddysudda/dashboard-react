import API from '../../MainServices/AxiosInstance'
export const fetchMachinesPending = () => ({
  type: 'FETCH_MACHINES_PENDING'
});

export const fetchMachinesCompleted = () => ({
  type: 'FETCH_MACHINES_COMPLETED'
});

export const fetchMachinesSuccess = (machines) => ({
  type: 'FETCH_MACHINES_SUCCESS',
  payload: machines
});
export const fetchMachinesError = (error) => ({
  type: 'FETCH_MACHINES_ERROR',
  payload: error
});
export const updateMachinePending = () => ({
  type: 'UPDATE_MACHINES_PENDING'
});
export const updateMachineCompleted = () => ({
  type: 'UPDATE_MACHINES_COMPLETED'
});
export const updateMachineSuccess = (updateMachine, updateData,id) => ({
  type: 'UPDATE_MACHINES_SUCCESS',
  payload: { updateMachine,updateData ,id }

});
export const updateMachineError = (error) => ({
  type: 'UPDATE_MACHINES_ERROR',
  payload: error
});
export const deleteMachinePending = () => ({
  type: 'DELETE_MACHINES_PENDING'
});

export const deleteMachineCompleted = () => ({
  type: 'DELETE_MACHINES_COMPLETED'
});
export const deleteMachineSuccess = (id) => ({
  type: 'DELETE_MACHINES_SUCCESS',
  payload: id
});
export const deleteMachineError = (error) => ({
  type: 'DELETE_MACHINES_ERROR',
  payload: error
});

export const createMachinePending = () => ({
  type: 'CREATE_MACHINES_PENDING'
});

export const createMachineCompleted = () => ({
  type: 'CREATE_MACHINES_COMPLETED'
});

export const createMachineSuccess = (params) => ({
  type: 'CREATE_MACHINES_SUCCESS',
  payload: {params}
});
export const createMachineError = (error) => ({
  type: 'CREATE_MACHINES_ERROR',
  payload: error
});
export const resetMachines = () => ({ 
  type: 'RESET_MACHINES'
});

export const fetchMachines = (params) => (dispatch) => {

  dispatch(fetchMachinesPending());
  return API.get('machines', { params: params })
    .then(fetchMachinesResponce => {

      dispatch(fetchMachinesSuccess(fetchMachinesResponce.data));
    })
    .catch(error => dispatch(fetchMachinesError(error)))
    .finally(() => dispatch(fetchMachinesCompleted()));
};

export const updateMachine = (params,newData,id) => (dispatch) => {

  dispatch(updateMachinePending());
  const reqParams = `${params.id}&name=${params.name}&os=${params.os}&ip=${params.ip}&mac=${params.mac}`
  return API.put(`machines/${id}?=${reqParams}`)
    .then(updateMachineResponce => {

      // const machines = MachinesHelper.formatMachines(updateMachineResponce);
      dispatch(updateMachineSuccess(updateMachineResponce.data,newData.data,id));
    })
    .catch(error => dispatch(updateMachineError(error)))
    .finally(() => dispatch(updateMachineCompleted()));
};

export const deleteMachine = (id) => (dispatch) => {
  dispatch(deleteMachinePending());
  return API.delete(`machines/${id}`)
    .then(deleteMachineResponce => {
      // const machines = MachinesHelper.formatMachines(deleteMachineResponce);
      dispatch(deleteMachineSuccess(id));
      return Promise.resolve(deleteMachineResponce)
    })
    .catch(error => dispatch(deleteMachineError(error)))
    .finally(() => dispatch(deleteMachineCompleted()));
};


export const createMachine = (params) => (dispatch) => {
  dispatch(createMachinePending());
  const reqParams = `id=${params.id}&name=${params.name}&state=${params.state}&created=${params.created}&updated=${params.updated}&type=${params.type}`
  return API.put(`machines/${params.id}?=${reqParams}`)
    .then(createMachineResponce => {
      // const machines = MachinesHelper.formatMachines(createMachineResponce);
      dispatch(createMachineSuccess(params));
    })
    .catch(error => dispatch(createMachineError(error)))
    .finally(() => dispatch(createMachineCompleted()));
};

