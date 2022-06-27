import { AppActionType, typedAction } from "redux/app";

import { vendorService } from ".";

const searchVendorLoading = () =>
  typedAction(AppActionType.SEARCH_VENDOR_LOADING, AppActionType.SEARCH_VENDOR_LOADING);
const searchVendorsLoading = () =>
  typedAction(AppActionType.SEARCH_VENDORS_LOADING, AppActionType.SEARCH_VENDORS_LOADING);
const updateVendorLoading = () =>
  typedAction(AppActionType.UPDATE_VENDOR_LOADING, AppActionType.UPDATE_VENDOR_LOADING);
const deleteVendorLoading = () =>
  typedAction(AppActionType.DELETE_VENDOR_LOADING, AppActionType.DELETE_VENDOR_LOADING);

const searchVendorComplete = data => typedAction(AppActionType.SEARCH_VENDOR_COMPLETE, data);
const searchVendorsComplete = data => typedAction(AppActionType.SEARCH_VENDORS_COMPLETE, data);
const updateVendorComplete = data => typedAction(AppActionType.UPDATE_VENDOR_COMPLETE, data);
const deleteVendorComplete = data => typedAction(AppActionType.DELETE_VENDOR_COMPLETE, data);

const searchVendorError = err => typedAction(AppActionType.SEARCH_VENDOR_ERROR, err);
const searchVendorsError = err => typedAction(AppActionType.SEARCH_VENDORS_ERROR, err);
const updateVendorError = err => typedAction(AppActionType.UPDATE_VENDOR_ERROR, err);
const deleteVendorError = err => typedAction(AppActionType.DELETE_VENDOR_ERROR, err);

export const searchVendor = id => async dispatch => {
  try {
    dispatch(searchVendorLoading());

    const { data } = await vendorService.getVendorById(id);
    dispatch(searchVendorComplete(data));
  } catch (err) {
    dispatch(searchVendorError(err));
  }
};

export const searchVendors = filters => async dispatch => {
  try {
    const queryParams = new URLSearchParams(filters);

    dispatch(searchVendorsLoading());

    const { data } = await vendorService.searchVendors(queryParams);
    dispatch(searchVendorsComplete(data));
  } catch (err) {
    dispatch(searchVendorsError(err));
  }
};

export const updateVendor = updatedVendor => async dispatch => {
  try {
    dispatch(updateVendorLoading());

    const { data } = await vendorService.updateVendor(updatedVendor);
    dispatch(updateVendorComplete(data));
  } catch (err) {
    dispatch(updateVendorError(err));
  }
};

export const deleteVendor = id => async dispatch => {
  try {
    dispatch(deleteVendorLoading());

    await vendorService.deleteVendor(id);
    dispatch(deleteVendorComplete(id));
  } catch (err) {
    dispatch(deleteVendorError(err));
  }
};
