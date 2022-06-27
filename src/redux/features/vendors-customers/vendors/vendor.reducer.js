import { AppActionType } from "redux/app";

const initialState = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const vendorReducer = (vendorState = initialState, action) => {
  const { type, payload } = action;
  const { entities, entity } = vendorState;

  let updatedVendors = [];
  let vendorsToKeep = [];

  switch (type) {
    case AppActionType.SEARCH_VENDOR_LOADING:
    case AppActionType.SEARCH_VENDORS_LOADING:
    case AppActionType.UPDATE_VENDOR_LOADING:
    case AppActionType.DELETE_VENDOR_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
        entities,
        entity,
      };

    case AppActionType.SEARCH_VENDOR_ERROR:
    case AppActionType.SEARCH_VENDORS_ERROR:
    case AppActionType.UPDATE_VENDOR_ERROR:
    case AppActionType.DELETE_VENDOR_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        entities,
        entity,
      };

    case AppActionType.SEARCH_VENDOR_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities,
        entity: payload,
      };

    case AppActionType.SEARCH_VENDORS_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: payload,
        entity,
      };

    case AppActionType.UPDATE_VENDOR_COMPLETE:
      updatedVendors = vendorState.entities.map(vendor => {
        if (vendor.id === payload.id) {
          return {
            ...vendor,
            ...payload,
          };
        }
        return vendor;
      });

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: updatedVendors,
        entity: payload,
      };

    case AppActionType.DELETE_VENDOR_COMPLETE:
      vendorsToKeep = vendorState.entities.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: vendorsToKeep,
        entity,
      };

    default:
      return vendorState;
  }
};
