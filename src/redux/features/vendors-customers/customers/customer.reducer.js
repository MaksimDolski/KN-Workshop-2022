import { AppActionType } from "redux/app";

const initialState = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const customerReducer = (customerState = initialState, action) => {
  const { type, payload } = action;
  const { entities, entity } = customerState;

  let updatedCustomers = [];
  let customersToKeep = [];

  switch (type) {
    case AppActionType.SEARCH_CUSTOMER_LOADING:
    case AppActionType.SEARCH_CUSTOMERS_LOADING:
    case AppActionType.UPDATE_CUSTOMER_LOADING:
    case AppActionType.DELETE_CUSTOMER_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},
        entities,
        entity,
      };

    case AppActionType.SEARCH_CUSTOMER_ERROR:
    case AppActionType.SEARCH_CUSTOMERS_ERROR:
    case AppActionType.UPDATE_CUSTOMER_ERROR:
    case AppActionType.DELETE_CUSTOMER_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        entities,
        entity,
      };

    case AppActionType.SEARCH_CUSTOMER_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities,
        entity: payload,
      };

    case AppActionType.SEARCH_CUSTOMERS_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: payload,
        entity,
      };

    case AppActionType.UPDATE_CUSTOMER_COMPLETE:
      updatedCustomers = customerState.entities.map(customer => {
        if (customer.id === payload.id) {
          return {
            ...customer,
            ...payload,
          };
        }
        return customer;
      });

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: updatedCustomers,
        entity: payload,
      };

    case AppActionType.DELETE_CUSTOMER_COMPLETE:
      customersToKeep = customerState.entities.filter(({ id }) => id !== payload);

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: customersToKeep,
        entity,
      };

    default:
      return customerState;
  }
};
