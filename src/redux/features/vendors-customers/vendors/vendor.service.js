import { httpCommon, VENDOR_ROUTE } from "../../../app";

const searchVendors = queryParams => {
  return httpCommon.get(`${VENDOR_ROUTE}?${queryParams}`);
};

const findAllVendors = () => httpCommon.get(`${VENDOR_ROUTE}`);

const getVendorById = id => httpCommon.get(`${VENDOR_ROUTE}/${id}`);

const searchVendorsByIds = vendorIds => {
  const searchString = vendorIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`${VENDOR_ROUTE}?${searchString}`);
};

const updateVendor = updatedVendor => {
  const { id, body } = updatedVendor;
  return httpCommon.put(`${VENDOR_ROUTE}/${id}`, body);
};

const deleteVendor = id => httpCommon.delete(`${VENDOR_ROUTE}/${id}`);

export const vendorService = {
  searchVendors,
  findAllVendors,
  getVendorById,
  updateVendor,
  deleteVendor,
  searchVendorsByIds,
};
