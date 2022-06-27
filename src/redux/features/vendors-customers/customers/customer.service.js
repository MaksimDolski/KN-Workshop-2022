import { httpCommon, CUSTOMER_ROUTE } from "../../../app";

const searchCustomers = queryParams => {
  return httpCommon.get(`${CUSTOMER_ROUTE}?${queryParams}`);
};

const findAllCustomers = () => httpCommon.get(`${CUSTOMER_ROUTE}`);

const getCustomerById = id => httpCommon.get(`${CUSTOMER_ROUTE}/${id}`);

const searchCustomersByIds = customerIds => {
  const searchString = customerIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`${CUSTOMER_ROUTE}?${searchString}`);
};

const updateCustomer = updatedCustomer => {
  const { id, body } = updatedCustomer;
  return httpCommon.put(`${CUSTOMER_ROUTE}/${id}`, body);
};

const deleteCustomer = id => httpCommon.delete(`${CUSTOMER_ROUTE}/${id}`);

export const customerService = {
  searchCustomers,
  findAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  searchCustomersByIds,
};
