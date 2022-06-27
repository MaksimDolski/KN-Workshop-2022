import { createSelector } from "reselect";

import { SELECT_ALL } from "variables/app.consts";

export const selectCustomersState = rootState => rootState.customer;

export const selectAllCustomerData = createSelector(
  [selectCustomersState],
  customerState => customerState.entities
);

export const selectCustomerById = id =>
  createSelector([selectAllCustomerData], customersData =>
    customersData.find(customer => customer.id === id)
  );

export const selectCustomersAsList = createSelector([selectAllCustomerData], customersData =>
  customersData.map(customer => ({ value: customer.id, label: customer.internationalName }))
);

export const selectAllCustomerDataAsSelectOptions = createSelector(
  [selectAllCustomerData],
  customers => {
    const customersOptions = customers.map(customer => {
      return { value: `${customer.id}`, label: `${customer.firstName} ${customer.lastName}` };
    });
    return [SELECT_ALL, ...customersOptions];
  }
);
