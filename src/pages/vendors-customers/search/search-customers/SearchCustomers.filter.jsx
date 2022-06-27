import { useState } from "react";

import { Col, Row } from "reactstrap";

import { FilterPanel } from "components/panels";
import { InputField } from "components/widgets";

export const SearchCustomersFilterPanel = ({ onSearchCustomers }) => {
  const [searchCustomerName, setSearchCustomerName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchWebpage, setSearchWebpage] = useState("");
  const [searchAddress, setSearchAddress] = useState("");

  const onChangeSearchCustomerName = e => {
    const searchCustomerName = e.target.value;
    setSearchCustomerName(searchCustomerName);
  };

  const onChangeSearchEmail = e => {
    const searchEmail = e.target.value;
    setSearchEmail(searchEmail);
  };

  const onChangeSearchWebpage = e => {
    const searchWebpage = e.target.value;
    setSearchWebpage(searchWebpage);
  };

  const onChangeSearchAddress = e => {
    const searchAddress = e.target.value;
    setSearchAddress(searchAddress);
  };

  const resetFilters = () => {
    setSearchAddress("");
    setSearchCustomerName("");
    setSearchEmail("");
    setSearchWebpage("");
  };

  const findByAllParameters = () => {
    const filters = parametersToFilter();
    onSearchCustomers(filters);
  };

  const parametersToFilter = () => {
    return Object.assign(
      {},
      searchCustomerName && searchCustomerName !== "" ? { customerName: searchCustomerName } : null,
      searchEmail && searchEmail !== "" ? { email: searchEmail } : null,
      searchWebpage && searchWebpage !== "" ? { webpage: searchWebpage } : null,
      searchAddress && searchAddress !== "" ? { address: searchAddress } : null
    );
  };

  return (
    <FilterPanel
      title="Search Customers"
      findByAllParameters={findByAllParameters}
      resetFilters={resetFilters}
    >
      <Row>
        <Col md="3">
          <InputField
            id="input-customer-name"
            label="Customer Name"
            style={{ height: "36px" }}
            className="form-control"
            value={searchCustomerName}
            placeholder="Customer Name"
            type="text"
            onChange={onChangeSearchCustomerName}
          />
        </Col>
        <Col md="3">
          <InputField
            id="input-email"
            label="Email"
            style={{ height: "36px" }}
            className="form-control"
            value={searchEmail}
            placeholder="Email"
            type="text"
            onChange={onChangeSearchEmail}
          />
        </Col>
        <Col md="3">
          <InputField
            id="input-webpage"
            label="Webpage"
            style={{ height: "36px" }}
            className="form-control"
            value={searchWebpage}
            placeholder="Webpage"
            type="text"
            onChange={onChangeSearchWebpage}
          />
        </Col>
        <Col md="3">
          <InputField
            id="input-address"
            label="Address"
            style={{ height: "36px" }}
            className="form-control"
            value={searchAddress}
            placeholder="Address"
            type="text"
            onChange={onChangeSearchAddress}
          />
        </Col>
        <Col md="1">&nbsp;</Col>
      </Row>
    </FilterPanel>
  );
};
