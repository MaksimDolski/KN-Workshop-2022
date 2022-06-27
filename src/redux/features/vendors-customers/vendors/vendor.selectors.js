import { createSelector } from "reselect";

// import { SELECT_ALL } from "variables/app.consts";

export const selectVendorsState = rootState => rootState.vendor;

export const selectAllVendorData = createSelector(
  [selectVendorsState],
  vendorState => vendorState.entities
);

export const selectVendorById = id =>
  createSelector([selectAllVendorData], vendorsData =>
    vendorsData.find(vendor => vendor.id === id)
  );

// export const selectVendorsAsList = createSelector([selectAllVendorData], vendorsData =>
//   vendorsData.map(vendor => ({ value: vendor.id, label: vendor.name }))
// );

// export const selectAllVendorDataAsSelectOptions = createSelector([selectAllVendorData])
