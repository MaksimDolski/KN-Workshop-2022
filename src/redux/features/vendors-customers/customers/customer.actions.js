import { AppActionType, typedAction } from "redux/app";

import { customerService } from ".";

const searchCustomerLoading = () =>
  typedAction(AppActionType.SEARCH_CUSTOMER_LOADING, AppActionType.SEARCH_CUSTOMER_LOADING);
const searchCustomersLoading = () =>
  typedAction(AppActionType.SEARCH_CUSTOMERS_LOADING, AppActionType.SEARCH_CUSTOMERS_LOADING);
const updateCustomerLoading = () =>
  typedAction(AppActionType.UPDATE_CUSTOMER_LOADING, AppActionType.UPDATE_CUSTOMER_LOADING);
const deleteCustomerLoading = () =>
  typedAction(AppActionType.DELETE_CUSTOMER_LOADING, AppActionType.DELETE_CUSTOMER_LOADING);

const searchCustomerComplete = data => typedAction(AppActionType.SEARCH_CUSTOMER_COMPLETE, data);
const searchCustomersComplete = data => typedAction(AppActionType.SEARCH_CUSTOMERS_COMPLETE, data);
const updateCustomerComplete = data => typedAction(AppActionType.UPDATE_CUSTOMER_COMPLETE, data);
const deleteCustomerComplete = data => typedAction(AppActionType.DELETE_CUSTOMER_COMPLETE, data);

const searchCustomerError = err => typedAction(AppActionType.SEARCH_CUSTOMER_ERROR, err);

const searchCustomersError = err => typedAction(AppActionType.SEARCH_CUSTOMERS_ERROR, err);

const updateCustomerError = err => typedAction(AppActionType.UPDATE_CUSTOMER_ERROR, err);

const deleteCustomerError = err => typedAction(AppActionType.DELETE_CUSTOMER_ERROR, err);

export const searchCustomer = id => async dispatch => {
  try {
    dispatch(searchCustomerLoading());

    const { data } = await customerService.getCustomerById(id);
    dispatch(searchCustomerComplete(data));
  } catch (err) {
    dispatch(searchCustomerError(err));
  }
};

export const searchCustomers = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch(searchCustomersLoading());

    const { data } = await customerService.searchCustomers(queryParams);
    dispatch(searchCustomersComplete(data));
  } catch (err) {
    dispatch(searchCustomersError(err));
  }
};

export const updateCustomer = updatedCustomer => async dispatch => {
  try {
    dispatch(updateCustomerLoading());

    const { data } = await customerService.updateCustomer(updatedCustomer);
    dispatch(updateCustomerComplete(data));
  } catch (err) {
    dispatch(updateCustomerError(err));
  }
};

export const deleteCustomer = id => async dispatch => {
  try {
    dispatch(deleteCustomerLoading());

    await customerService.deleteCustomer(id);
    dispatch(deleteCustomerComplete(id));
  } catch (err) {
    dispatch(deleteCustomerError(err));
  }
};
