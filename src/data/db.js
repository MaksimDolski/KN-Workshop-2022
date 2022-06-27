const customersData = require("./customers");
const documentsData = require("./documents");
const employeesData = require("./employees");
const vendorsData = require("./vendors");

module.exports = () => ({
  vendor: vendorsData,
  customer: customersData,
  employee: employeesData,
  document: documentsData,
});
