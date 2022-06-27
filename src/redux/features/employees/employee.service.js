import { EMPLOYEE_ROUTE, httpCommon } from "../../app";

const searchEmployees = queryParams => {
  const members = queryParams.get("members");
  queryParams.set("members", "");

  return httpCommon.get(`${EMPLOYEE_ROUTE}?${members}&${queryParams}`);
};

const findAllEmployees = () => httpCommon.get(`${EMPLOYEE_ROUTE}`);

const getEmployeeById = id => httpCommon.get(`${EMPLOYEE_ROUTE}/${id}`);

const searchEmployeesByIds = employeeIds => {
  const searchString = employeeIds.map(id => `id=${id}`).join("&");
  return httpCommon.get(`${EMPLOYEE_ROUTE}?${searchString}`);
};

const updateEmployee = updatedEmployee => {
  const { id, body } = updatedEmployee;
  return httpCommon.put(`${EMPLOYEE_ROUTE}/${id}`, body);
};

const deleteEmployee = id => httpCommon.delete(`${EMPLOYEE_ROUTE}/${id}`);

export const employeeService = {
  searchEmployees,
  findAllEmployees,
  getEmployeeById,
  searchEmployeesByIds,
  updateEmployee,
  deleteEmployee,
};
